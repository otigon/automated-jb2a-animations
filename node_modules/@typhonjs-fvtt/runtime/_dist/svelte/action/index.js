/**
 * Provides an action to apply style properties provided as an object.
 *
 * @param {HTMLElement} node - Target element
 *
 * @param {object}      properties - Key / value object of properties to set.
 *
 * @returns {Function} Update function.
 */
function applyStyles(node, properties)
{
   /** Sets properties on node. */
   function setProperties()
   {
      if (typeof properties !== 'object') { return; }

      for (const prop of Object.keys(properties))
      {
         node.style.setProperty(`${prop}`, properties[prop]);
      }
   }

   setProperties();

   return {
      update(newProperties)
      {
         properties = newProperties;
         setProperties();
      }
   };
}

/**
 * Provides an action to enable pointer dragging of an HTMLElement and invoke `position.set` on a given {@link Position}
 * instance provided. When the attached boolean store state changes the draggable action is enabled or disabled.
 *
 * @param {HTMLElement}       node - The node associated with the action.
 *
 * @param {object}            params - Required parameters.
 *
 * @param {Position}          params.position - A position instance.
 *
 * @param {boolean}           [params.active=true] - A boolean value; attached to a readable store.
 *
 * @param {Writable<boolean>} [params.storeDragging] - A writable store that tracks "dragging" state.
 *
 * @returns {{update: Function, destroy: Function}} The action lifecycle methods.
 */
function draggable(node, { position, active = true, storeDragging = void 0 })
{
   /**
    * Duplicate the app / Positionable starting position to track differences.
    *
    * @type {object}
    */
   let initialPosition = null;

   /**
    * Stores the initial X / Y on drag down.
    *
    * @type {object}
    */
   let initialDragPoint = {};

   /**
    * Stores the current dragging state and gates the move pointer as the dragging store is not
    * set until the first pointer move.
    *
    * @type {boolean}
    */
   let dragging = false;

   /**
    * Remember event handlers associated with this action so they may be later unregistered.
    *
    * @type {object}
    */
   const handlers = {
      dragDown: ['pointerdown', (e) => onDragPointerDown(e), false],
      dragMove: ['pointermove', (e) => onDragPointerMove(e), false],
      dragUp: ['pointerup', (e) => onDragPointerUp(e), false]
   };

   /**
    * Activates listeners.
    */
   function activateListeners()
   {
      // Drag handlers
      node.addEventListener(...handlers.dragDown);
      node.classList.add('draggable');
   }

   /**
    * Removes listeners.
    */
   function removeListeners()
   {
      if (typeof storeDragging?.set === 'function') { storeDragging.set(false); }

      // Drag handlers
      node.removeEventListener(...handlers.dragDown);
      node.removeEventListener(...handlers.dragMove);
      node.removeEventListener(...handlers.dragUp);
      node.classList.remove('draggable');
   }

   if (active)
   {
      activateListeners();
   }

   /**
    * Handle the initial pointer down that activates dragging behavior for the positionable.
    *
    * @param {PointerEvent} event - The pointer down event.
    */
   function onDragPointerDown(event)
   {
      event.preventDefault();

      dragging = false;

      // Record initial position.
      initialPosition = position.get();
      initialDragPoint = { x: event.clientX, y: event.clientY };

      // Add move and pointer up handlers.
      node.addEventListener(...handlers.dragMove);
      node.addEventListener(...handlers.dragUp);

      node.setPointerCapture(event.pointerId);
   }

   /**
    * Move the positionable.
    *
    * @param {PointerEvent} event - The pointer move event.
    */
   function onDragPointerMove(event)
   {
      event.preventDefault();

      // Only set store dragging on first move event.
      if (!dragging && typeof storeDragging?.set === 'function')
      {
         dragging = true;
         storeDragging.set(true);
      }

      // Update application position.
      position.set({
         left: initialPosition.left + (event.clientX - initialDragPoint.x),
         top: initialPosition.top + (event.clientY - initialDragPoint.y)
      });
   }

   /**
    * Finish dragging and set the final position and removing listeners.
    *
    * @param {PointerEvent} event - The pointer up event.
    */
   function onDragPointerUp(event)
   {
      event.preventDefault();

      dragging = false;
      if (typeof storeDragging?.set === 'function') { storeDragging.set(false); }

      node.removeEventListener(...handlers.dragMove);
      node.removeEventListener(...handlers.dragUp);
   }

   return {
      update: ({ active }) =>  // eslint-disable-line no-shadow
      {
         if (active) { activateListeners(); }
         else { removeListeners(); }
      },

      destroy: () => removeListeners()
   };
}

export { applyStyles, draggable };
//# sourceMappingURL=index.js.map
