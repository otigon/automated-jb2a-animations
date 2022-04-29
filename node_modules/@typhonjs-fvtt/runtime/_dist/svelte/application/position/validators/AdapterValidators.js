/**
 * Provides the storage and sequencing of managed position validators. Each validator added may be a bespoke function or
 * a {@link ValidatorData} object containing an `id`, `validator`, and `weight` attributes; `validator` is the only
 * required attribute.
 *
 * The `id` attribute can be anything that creates a unique ID for the validator; recommended strings or numbers. This
 * allows validators to be removed by ID easily.
 *
 * The `weight` attribute is a number between 0 and 1 inclusive that allows validators to be added in a
 * predictable order which is especially handy if they are manipulated at runtime. A lower weighted validator always
 * runs before a higher weighted validator. If no weight is specified the default of '1' is assigned and it is appended
 * to the end of the validators list.
 *
 * This class forms the public API which is accessible from the `.validators` getter in the main Position instance.
 * ```
 * const position = new Position(<PositionData>);
 * position.validators.add(...);
 * position.validators.clear();
 * position.validators.length;
 * position.validators.remove(...);
 * position.validators.removeBy(...);
 * position.validators.removeById(...);
 * ```
 */
export class AdapterValidators
{
   /**
    * @type {ValidatorData[]}
    */
   #validatorData;

   #mapUnsubscribe = new Map();

   /**
    * @returns {[AdapterValidators, ValidatorData[]]} Returns this and internal storage for validator adapter.
    */
   constructor()
   {
      this.#validatorData = [];

      Object.seal(this);

      return [this, this.#validatorData];
   }

   /**
    * @returns {number} Returns the length of the validators array.
    */
   get length() { return this.#validatorData.length; }

   /**
    * Provides an iterator for validators.
    *
    * @returns {Generator<ValidatorData|undefined>} Generator / iterator of validators.
    * @yields {ValidatorData<T>}
    */
   *[Symbol.iterator]()
   {
      if (this.#validatorData.length === 0) { return; }

      for (const entry of this.#validatorData)
      {
         yield { ...entry };
      }
   }

   /**
    * @param {...(ValidatorFn<T>|ValidatorData<T>)}   validators -
    */
   add(...validators)
   {
      /**
       * Tracks the number of validators added that have subscriber functionality.
       *
       * @type {number}
       */
      let subscribeCount = 0;

      for (const validator of validators)
      {
         const validatorType = typeof validator;

         if (validatorType !== 'function' && validatorType !== 'object' || validator === null)
         {
            throw new TypeError(`AdapterValidator error: 'validator' is not a function or object.`);
         }

         let data = void 0;
         let subscribeFn = void 0;

         switch (validatorType)
         {
            case 'function':
               data = {
                  id: void 0,
                  validator,
                  weight: 1
               };

               subscribeFn = validator.subscribe;
               break;

            case 'object':
               if (typeof validator.validator !== 'function')
               {
                  throw new TypeError(`AdapterValidator error: 'validator' attribute is not a function.`);
               }

               if (validator.weight !== void 0 && typeof validator.weight !== 'number' ||
                (validator.weight < 0 || validator.weight > 1))
               {
                  throw new TypeError(
                   `AdapterValidator error: 'weight' attribute is not a number between '0 - 1' inclusive.`);
               }

               data = {
                  id: validator.id !== void 0 ? validator.id : void 0,
                  validator: validator.validator.bind(validator),
                  weight: validator.weight || 1,
                  instance: validator
               };

               subscribeFn = validator.validator.subscribe ?? validator.subscribe;
               break;
         }

         // Find the index to insert where data.weight is less than existing values weight.
         const index = this.#validatorData.findIndex((value) =>
         {
            return data.weight < value.weight;
         });

         // If an index was found insert at that location.
         if (index >= 0)
         {
            this.#validatorData.splice(index, 0, data);
         }
         else // push to end of validators.
         {
            this.#validatorData.push(data);
         }

         if (typeof subscribeFn === 'function')
         {
            // TODO: consider how to handle validator updates.
            const unsubscribe = subscribeFn();

            // Ensure that unsubscribe is a function.
            if (typeof unsubscribe !== 'function')
            {
               throw new TypeError(
                'AdapterValidator error: Filter has subscribe function, but no unsubscribe function is returned.');
            }

            // Ensure that the same validator is not subscribed to multiple times.
            if (this.#mapUnsubscribe.has(data.validator))
            {
               throw new Error(
                'AdapterValidator error: Filter added already has an unsubscribe function registered.');
            }

            this.#mapUnsubscribe.set(data.validator, unsubscribe);
            subscribeCount++;
         }
      }

      // Filters with subscriber functionality are assumed to immediately invoke the `subscribe` callback. If the
      // subscriber count is less than the amount of validators added then automatically trigger an index update
      // manually.
      // TODO: handle validator updates.
      // if (subscribeCount < validators.length) { this.#indexUpdate(); }
   }

   clear()
   {
      this.#validatorData.length = 0;

      // Unsubscribe from all validators with subscription support.
      for (const unsubscribe of this.#mapUnsubscribe.values())
      {
         unsubscribe();
      }

      this.#mapUnsubscribe.clear();

      // TODO: handle validator updates.
      // this.#indexUpdate();
   }

   /**
    * @param {...(ValidatorFn<T>|ValidatorData<T>)}   validators -
    */
   remove(...validators)
   {
      const length = this.#validatorData.length;

      if (length === 0) { return; }

      for (const data of validators)
      {
         // Handle the case that the validator may either be a function or a validator entry / object.
         const actualValidator = typeof data === 'function' ? data : data !== null && typeof data === 'object' ?
          data.validator : void 0;

         if (!actualValidator) { continue; }

         for (let cntr = this.#validatorData.length; --cntr >= 0;)
         {
            if (this.#validatorData[cntr].validator === actualValidator)
            {
               this.#validatorData.splice(cntr, 1);

               // Invoke any unsubscribe function for given validator then remove from tracking.
               let unsubscribe = void 0;
               if (typeof (unsubscribe = this.#mapUnsubscribe.get(actualValidator)) === 'function')
               {
                  unsubscribe();
                  this.#mapUnsubscribe.delete(actualValidator);
               }
            }
         }
      }

      // Update the index a validator was removed.
      // TODO: handle validator updates.
      // if (length !== this.#validatorData.length) { this.#indexUpdate(); }
   }

   /**
    * Remove validators by the provided callback. The callback takes 3 parameters: `id`, `validator`, and `weight`.
    * Any truthy value returned will remove that validator.
    *
    * @param {function(*, ValidatorFn<T>, number): boolean} callback - Callback function to evaluate each validator
    *                                                                  entry.
    */
   removeBy(callback)
   {
      const length = this.#validatorData.length;

      if (length === 0) { return; }

      if (typeof callback !== 'function')
      {
         throw new TypeError(`AdapterValidator error: 'callback' is not a function.`);
      }

      this.#validatorData = this.#validatorData.filter((data) =>
      {
         const remove = callback.call(callback, { ...data });

         if (remove)
         {
            let unsubscribe;
            if (typeof (unsubscribe = this.#mapUnsubscribe.get(data.validator)) === 'function')
            {
               unsubscribe();
               this.#mapUnsubscribe.delete(data.validator);
            }
         }

         // Reverse remove boolean to properly validator / remove this validator.
         return !remove;
      });

      // TODO: handle validator updates.
      // if (length !== this.#validatorData.length) { this.#indexUpdate(); }
   }

   removeById(...ids)
   {
      const length = this.#validatorData.length;

      if (length === 0) { return; }

      this.#validatorData = this.#validatorData.filter((data) =>
      {
         let remove = false;

         for (const id of ids) { remove |= data.id === id; }

         // If not keeping invoke any unsubscribe function for given validator then remove from tracking.
         if (remove)
         {
            let unsubscribe;
            if (typeof (unsubscribe = this.#mapUnsubscribe.get(data.validator)) === 'function')
            {
               unsubscribe();
               this.#mapUnsubscribe.delete(data.validator);
            }
         }

         return !remove; // Swap here to actually remove the item via array validator method.
      });

      // TODO: handle validator updates.
      // if (length !== this.#validatorData.length) { this.#indexUpdate(); }
   }
}

/**
 * @callback ValidatorFn - Position validator function that takes a {@link PositionData} instance potentially
 *                             modifying it or returning null if invalid.
 *
 * @param {ValidationData} valData - Validation data.
 *
 * @returns {PositionData|null} The validated position data or null to cancel position update.
 *
 */

/**
 * @typedef {object} ValidatorData
 *
 * @property {*}           [id=undefined] - An ID associated with this validator. Can be used to remove the validator.
 *
 * @property {ValidatorFn} validator - Position validator function that takes a {@link PositionData} instance
 *                                     potentially modifying it or returning null if invalid.
 *
 * @property {number}      [weight=1] - A number between 0 and 1 inclusive to position this validator against others.
 *
 * @property {Function}    [subscribe] - Optional subscribe function following the Svelte store / subscribe pattern.
 */
