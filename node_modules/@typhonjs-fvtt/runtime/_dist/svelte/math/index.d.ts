/**
 * Converts the given number from degrees to radians.
 *
 * @param {number}   deg - Degree number to convert
 *
 * @returns {number} Degree as radians.
 */
declare function degToRad(deg: number): number;
declare var common: Readonly<{
    __proto__: any;
    EPSILON: number;
    readonly ARRAY_TYPE: ArrayConstructor | Float32ArrayConstructor;
    RANDOM: () => number;
    setMatrixArrayType: typeof setMatrixArrayType;
    toRadian: typeof toRadian;
    equals: typeof equals$9;
}>;
/**
 * Performs linear interpolation between a start & end value by given amount between 0 - 1 inclusive.
 *
 * @param {number}   start - Start value.
 *
 * @param {number}   end - End value.
 *
 * @param {number}   amount - Current amount between 0 - 1 inclusive.
 *
 * @returns {number} Linear interpolated value between start & end.
 */
declare function lerp$5(start: number, end: number, amount: number): number;
declare var mat2: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
declare var mat2d: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
declare var mat3: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
declare var mat4: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
declare var quat: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
declare var quat2: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Converts the given number from radians to degrees.
 *
 * @param {number}   rad - Radian number to convert.
 *
 * @returns {number} Degree as radians.
 */
declare function radToDeg(rad: number): number;
declare var vec2: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
declare var vec3: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
declare var vec4: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */
declare function setMatrixArrayType(type: Float32ArrayConstructor | ArrayConstructor): void;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
declare function toRadian(a: number): number;
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
declare function equals$9(a: number, b: number): boolean;
/**
 * 2x2 Matrix
 * @module mat2
 */
/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
declare function create$8(): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
declare function clone$8(a: any): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */
declare function copy$8(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
declare function identity$5(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
declare function fromValues$8(m00: number, m01: number, m10: number, m11: number): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
declare function set$8(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, m00: number, m01: number, m10: number, m11: number): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */
declare function transpose$2(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */
declare function invert$5(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */
declare function adjoint$2(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Calculates the determinant of a mat2
 *
 * @param {ReadonlyMat2} a the source matrix
 * @returns {Number} determinant of a
 */
declare function determinant$3(a: any): number;
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */
declare function multiply$8(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
declare function rotate$4(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, a: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
declare function scale$8(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, a: any, v: any): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
declare function fromRotation$4(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2} out
 */
declare function fromScaling$3(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, v: any): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Returns a string representation of a mat2
 *
 * @param {ReadonlyMat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
declare function str$8(a: any): string;
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
declare function frob$3(a: any): number;
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {ReadonlyMat2} L the lower triangular matrix
 * @param {ReadonlyMat2} D the diagonal matrix
 * @param {ReadonlyMat2} U the upper triangular matrix
 * @param {ReadonlyMat2} a the input matrix to factorize
 */
declare function LDU(L: any, D: any, U: any, a: any): any[];
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */
declare function add$8(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */
declare function subtract$6(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
declare function exactEquals$8(a: any, b: any): boolean;
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
declare function equals$8(a: any, b: any): boolean;
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
declare function multiplyScalar$3(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, a: any, b: number): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
declare function multiplyScalarAndAdd$3(out: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>, a: any, b: any, scale: number): Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    copy: typeof copy$8;
    identity: typeof identity$5;
    fromValues: typeof fromValues$8;
    set: typeof set$8;
    transpose: typeof transpose$2;
    invert: typeof invert$5;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$8;
    rotate: typeof rotate$4;
    scale: typeof scale$8;
    fromRotation: typeof fromRotation$4;
    fromScaling: typeof fromScaling$3;
    str: typeof str$8;
    frob: typeof frob$3;
    LDU: typeof LDU;
    add: typeof add$8;
    subtract: typeof subtract$6;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$8;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    mul: typeof multiply$8;
    sub: typeof subtract$6;
}>;
/**
 * 2x3 Matrix
 * @module mat2d
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */
/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
declare function create$7(): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
declare function clone$7(a: any): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */
declare function copy$7(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
declare function identity$4(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
declare function fromValues$7(a: number, b: number, c: number, d: number, tx: number, ty: number): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
declare function set$7(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, a: number, b: number, c: number, d: number, tx: number, ty: number): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */
declare function invert$4(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Calculates the determinant of a mat2d
 *
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {Number} determinant of a
 */
declare function determinant$2(a: any): number;
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */
declare function multiply$7(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
declare function rotate$3(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, a: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
declare function scale$7(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, a: any, v: any): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
declare function translate$3(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, a: any, v: any): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
declare function fromRotation$3(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2d} out
 */
declare function fromScaling$2(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, v: any): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat2d} out
 */
declare function fromTranslation$3(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, v: any): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Returns a string representation of a mat2d
 *
 * @param {ReadonlyMat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
declare function str$7(a: any): string;
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
declare function frob$2(a: any): number;
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */
declare function add$7(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */
declare function subtract$5(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
declare function multiplyScalar$2(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, a: any, b: number): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
declare function multiplyScalarAndAdd$2(out: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>, a: any, b: any, scale: number): Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    copy: typeof copy$7;
    identity: typeof identity$4;
    fromValues: typeof fromValues$7;
    set: typeof set$7;
    invert: typeof invert$4;
    determinant: typeof determinant$2;
    multiply: typeof multiply$7;
    rotate: typeof rotate$3;
    scale: typeof scale$7;
    translate: typeof translate$3;
    fromRotation: typeof fromRotation$3;
    fromScaling: typeof fromScaling$2;
    fromTranslation: typeof fromTranslation$3;
    str: typeof str$7;
    frob: typeof frob$2;
    add: typeof add$7;
    subtract: typeof subtract$5;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$7;
    mul: typeof multiply$7;
    sub: typeof subtract$5;
}>;
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
declare function exactEquals$7(a: any, b: any): boolean;
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
declare function equals$7(a: any, b: any): boolean;
/**
 * 3x3 Matrix
 * @module mat3
 */
/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
declare function create$6(): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
declare function fromMat4$1(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
declare function clone$6(a: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */
declare function copy$6(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
declare function fromValues$6(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
declare function set$6(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
declare function identity$3(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */
declare function transpose$1(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */
declare function invert$3(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */
declare function adjoint$1(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */
declare function determinant$1(a: any): number;
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */
declare function multiply$6(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */
declare function translate$2(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any, v: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
declare function rotate$2(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
declare function scale$6(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any, v: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */
declare function fromTranslation$2(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, v: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
declare function fromRotation$2(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */
declare function fromScaling$1(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, v: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/
declare function fromMat2d(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */
declare function fromQuat$1(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, q: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */
declare function normalFromMat4(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
declare function projection(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, width: number, height: number): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
declare function str$6(a: any): string;
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
declare function frob$1(a: any): number;
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */
declare function add$6(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */
declare function subtract$4(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
declare function multiplyScalar$1(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any, b: number): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
declare function multiplyScalarAndAdd$1(out: Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>, a: any, b: any, scale: number): Readonly<{
    __proto__: any;
    create: typeof create$6;
    fromMat4: typeof fromMat4$1;
    clone: typeof clone$6;
    copy: typeof copy$6;
    fromValues: typeof fromValues$6;
    set: typeof set$6;
    identity: typeof identity$3;
    transpose: typeof transpose$1;
    invert: typeof invert$3;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$6;
    translate: typeof translate$2;
    rotate: typeof rotate$2;
    scale: typeof scale$6;
    fromTranslation: typeof fromTranslation$2;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$1;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat$1;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$6;
    frob: typeof frob$1;
    add: typeof add$6;
    subtract: typeof subtract$4;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$6;
    equals: typeof equals$6;
    mul: typeof multiply$6;
    sub: typeof subtract$4;
}>;
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
declare function exactEquals$6(a: any, b: any): boolean;
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
declare function equals$6(a: any, b: any): boolean;
/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */
/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
declare function create$5(): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
declare function clone$5(a: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */
declare function copy$5(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
declare function fromValues$5(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
declare function set$5(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
declare function identity$2(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */
declare function transpose(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */
declare function invert$2(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */
declare function adjoint(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */
declare function determinant(a: any): number;
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */
declare function multiply$5(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */
declare function translate$1(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any, v: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
declare function scale$5(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any, v: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */
declare function rotate$1(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any, rad: number, axis: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
declare function rotateX$3(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
declare function rotateY$3(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
declare function rotateZ$3(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */
declare function fromTranslation$1(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, v: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */
declare function fromScaling(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, v: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */
declare function fromRotation$1(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, rad: number, axis: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
declare function fromXRotation(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
declare function fromYRotation(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
declare function fromZRotation(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */
declare function fromRotationTranslation$1(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, q: any, v: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */
declare function fromQuat2(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
declare function getTranslation$1(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, mat: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
declare function getScaling(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, mat: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
declare function getRotation(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, mat: any): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */
declare function fromRotationTranslationScale(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, q: any, v: any, s: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
declare function fromRotationTranslationScaleOrigin(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, q: any, v: any, s: any, o: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
declare function fromQuat(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, q: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
declare function frustum(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, left: number, right: number, bottom: number, top: number, near: number, far: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */
declare function perspectiveNO(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, fovy: number, aspect: number, near: number, far: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */
declare function perspectiveZO(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, fovy: number, aspect: number, near: number, far: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
declare function perspectiveFromFieldOfView(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, fov: any, near: number, far: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
declare function orthoNO(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, left: number, right: number, bottom: number, top: number, near: number, far: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
declare function orthoZO(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, left: number, right: number, bottom: number, top: number, near: number, far: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */
declare function lookAt(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, eye: any, center: any, up: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */
declare function targetTo(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, eye: any, target: any, up: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
declare function str$5(a: any): string;
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
declare function frob(a: any): number;
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */
declare function add$5(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */
declare function subtract$3(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
declare function multiplyScalar(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any, b: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
declare function multiplyScalarAndAdd(out: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>, a: any, b: any, scale: number): Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    copy: typeof copy$5;
    fromValues: typeof fromValues$5;
    set: typeof set$5;
    identity: typeof identity$2;
    transpose: typeof transpose;
    invert: typeof invert$2;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply$5;
    translate: typeof translate$1;
    scale: typeof scale$5;
    rotate: typeof rotate$1;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    fromTranslation: typeof fromTranslation$1;
    fromScaling: typeof fromScaling;
    fromRotation: typeof fromRotation$1;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation$1;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$5;
    frob: typeof frob;
    add: typeof add$5;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$5;
    mul: typeof multiply$5;
    sub: typeof subtract$3;
}>;
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
declare function exactEquals$5(a: any, b: any): boolean;
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
declare function equals$5(a: any, b: any): boolean;
/**
 * Quaternion
 * @module quat
 */
/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
declare function create$2(): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
declare function identity$1(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
declare function setAxisAngle(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, axis: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
declare function getAxisAngle(out_axis: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, q: any): number;
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */
declare function getAngle(a: any, b: any): number;
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */
declare function multiply$2(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
declare function rotateX$1(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, a: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
declare function rotateY$1(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, a: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
declare function rotateZ$1(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, a: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */
declare function calculateW(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */
declare function exp(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */
declare function ln(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */
declare function pow(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, a: any, b: number): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
declare function slerp(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, a: any, b: any, t: number): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
declare function random$1(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */
declare function invert$1(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */
declare function conjugate$1(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
declare function fromMat3(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, m: any): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
declare function fromEuler(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, x: any, y: any, z: any): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Returns a string representation of a quatenion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
declare function str$2(a: any): string;
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
declare function clone$3(a: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
declare function fromValues$3(x: number, y: number, z: number, w: number): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */
declare function copy$3(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
declare function set$3(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, x: number, y: number, z: number, w: number): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */
declare function add$3(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
declare function scale$3(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: number): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */
declare function dot$3(a: any, b: any): number;
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */
declare function lerp$3(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any, t: number): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */
declare function length$3(a: any): number;
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
declare function squaredLength$3(a: any): number;
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */
declare function normalize$3(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
declare function exactEquals$3(a: any, b: any): boolean;
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
declare function equals$3(a: any, b: any): boolean;
/**
 * 4 Dimensional Vector
 * @module vec4
 */
/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
declare function create$3(): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */
declare function subtract$1(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */
declare function multiply$3(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */
declare function divide$1(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */
declare function ceil$1(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */
declare function floor$1(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */
declare function min$1(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */
declare function max$1(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */
declare function round$1(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
declare function scaleAndAdd$1(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any, scale: number): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */
declare function distance$1(a: any, b: any): number;
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
declare function squaredDistance$1(a: any, b: any): number;
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */
declare function negate$1(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */
declare function inverse$1(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */
declare function cross$1(out: any, u: any, v: any, w: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
declare function random$2(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, scale?: number): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */
declare function transformMat4$1(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, m: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */
declare function transformQuat(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, q: any): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */
declare function zero$1(out: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>): Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    subtract: typeof subtract$1;
    multiply: typeof multiply$3;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$3;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$3;
    squaredLength: typeof squaredLength$3;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$3;
    dot: typeof dot$3;
    cross: typeof cross$1;
    lerp: typeof lerp$3;
    random: typeof random$2;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat;
    zero: typeof zero$1;
    str: typeof str$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    sub: typeof subtract$1;
    mul: typeof multiply$3;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$3;
    sqrLen: typeof squaredLength$3;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
declare function str$3(a: any): string;
/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */
/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */
declare function create$1(): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */
declare function clone$1(a: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */
declare function fromValues$1(x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number, w2: number): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */
declare function fromRotationTranslationValues(x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q a normalized quaternion
 * @param {ReadonlyVec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
declare function fromRotationTranslation(out: any, q: any, t: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Creates a dual quat from a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyVec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
declare function fromTranslation(out: any, t: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Creates a dual quat from a quaternion
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
declare function fromRotation(out: any, q: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {ReadonlyMat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */
declare function fromMat4(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */
declare function copy$1(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */
declare function identity(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */
declare function set$1(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number, w2: number): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} dual part
 */
declare function getDual(out: Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$2;
    identity: typeof identity$1;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$2;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp;
    random: typeof random$1;
    invert: typeof invert$1;
    conjugate: typeof conjugate$1;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$2;
    clone: typeof clone$3;
    fromValues: typeof fromValues$3;
    copy: typeof copy$3;
    set: typeof set$3;
    add: typeof add$3;
    mul: typeof multiply$2;
    scale: typeof scale$3;
    dot: typeof dot$3;
    lerp: typeof lerp$3;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$3;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => Readonly<{
        __proto__: any;
        create: typeof create$3;
        clone: typeof clone$3;
        fromValues: typeof fromValues$3;
        copy: typeof copy$3;
        set: typeof set$3;
        add: typeof add$3;
        subtract: typeof subtract$1;
        multiply: typeof multiply$3;
        divide: typeof divide$1;
        ceil: typeof ceil$1;
        floor: typeof floor$1;
        min: typeof min$1;
        max: typeof max$1;
        round: typeof round$1;
        scale: typeof scale$3;
        scaleAndAdd: typeof scaleAndAdd$1;
        distance: typeof distance$1;
        squaredDistance: typeof squaredDistance$1;
        length: typeof length$3;
        squaredLength: typeof squaredLength$3;
        negate: typeof negate$1;
        inverse: typeof inverse$1;
        normalize: typeof normalize$3;
        dot: typeof dot$3;
        cross: typeof cross$1;
        lerp: typeof lerp$3;
        random: typeof random$2;
        transformMat4: typeof transformMat4$1;
        transformQuat: typeof transformQuat;
        zero: typeof zero$1;
        str: typeof str$3;
        exactEquals: typeof exactEquals$3;
        equals: typeof equals$3;
        sub: typeof subtract$1;
        mul: typeof multiply$3;
        div: typeof divide$1;
        dist: typeof distance$1;
        sqrDist: typeof squaredDistance$1;
        len: typeof length$3;
        sqrLen: typeof squaredLength$3;
        forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
    }>;
}>;
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */
declare function setDual(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, q: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */
declare function getTranslation(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {quat2} out
 */
declare function translate(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any, v: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
declare function rotateX(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
declare function rotateY(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
declare function rotateZ(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @returns {quat2} out
 */
declare function rotateByQuatAppend(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any, q: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */
declare function rotateByQuatPrepend(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, q: any, a: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */
declare function rotateAroundAxis(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any, axis: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 * @function
 */
declare function add$1(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 */
declare function multiply$1(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */
declare function scale$1(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any, b: number): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */
declare function lerp$1(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any, b: any, t: number): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */
declare function invert(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */
declare function conjugate(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */
declare function normalize$1(out: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    fromValues: typeof fromValues$1;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromTranslation: typeof fromTranslation;
    fromRotation: typeof fromRotation;
    fromMat4: typeof fromMat4;
    copy: typeof copy$1;
    identity: typeof identity;
    set: typeof set$1;
    getReal: typeof copy$3;
    getDual: typeof getDual;
    setReal: typeof copy$3;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation;
    translate: typeof translate;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$1;
    multiply: typeof multiply$1;
    mul: typeof multiply$1;
    scale: typeof scale$1;
    dot: typeof dot$3;
    lerp: typeof lerp$1;
    invert: typeof invert;
    conjugate: typeof conjugate;
    length: typeof length$3;
    len: typeof length$3;
    squaredLength: typeof squaredLength$3;
    sqrLen: typeof squaredLength$3;
    normalize: typeof normalize$1;
    str: typeof str$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$1;
}>;
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {ReadonlyQuat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */
declare function str$1(a: any): string;
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2} a the first dual quaternion.
 * @param {ReadonlyQuat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */
declare function exactEquals$1(a: any, b: any): boolean;
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2} a the first dual quat.
 * @param {ReadonlyQuat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */
declare function equals$1(a: any, b: any): boolean;
/**
 * 2 Dimensional Vector
 * @module vec2
 */
/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
declare function create(): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
declare function clone(a: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
declare function fromValues(x: number, y: number): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */
declare function copy(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
declare function set(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, x: number, y: number): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */
declare function add(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */
declare function subtract(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */
declare function multiply(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */
declare function divide(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */
declare function ceil(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */
declare function floor(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */
declare function min(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */
declare function max(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */
declare function round(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
declare function scale(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: number): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
declare function scaleAndAdd(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any, scale: number): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */
declare function distance(a: any, b: any): number;
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
declare function squaredDistance(a: any, b: any): number;
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */
declare function length(a: any): number;
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
declare function squaredLength(a: any): number;
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */
declare function negate(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */
declare function inverse(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */
declare function normalize(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */
declare function dot(a: any, b: any): number;
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */
declare function cross(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */
declare function lerp(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any, t: number): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
declare function random(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, scale?: number): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */
declare function transformMat2(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, m: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */
declare function transformMat2d(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, m: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */
declare function transformMat3(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, m: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */
declare function transformMat4(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, m: any): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */
declare function rotate(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */
declare function angle(a: any, b: any): number;
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */
declare function zero(out: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>): Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    fromValues: typeof fromValues;
    copy: typeof copy;
    set: typeof set;
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    length: typeof length;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    random: typeof random;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3;
    transformMat4: typeof transformMat4;
    rotate: typeof rotate;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str;
    exactEquals: typeof exactEquals;
    equals: typeof equals;
    len: typeof length;
    sub: typeof subtract;
    mul: typeof multiply;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
declare function str(a: any): string;
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
declare function exactEquals(a: any, b: any): boolean;
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
declare function equals(a: any, b: any): boolean;
/**
 * 3 Dimensional Vector
 * @module vec3
 */
/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
declare function create$4(): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
declare function clone$4(a: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */
declare function length$4(a: any): number;
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
declare function fromValues$4(x: number, y: number, z: number): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */
declare function copy$4(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
declare function set$4(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, x: number, y: number, z: number): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
declare function add$4(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
declare function subtract$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
declare function multiply$4(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
declare function divide$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */
declare function ceil$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */
declare function floor$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
declare function min$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
declare function max$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */
declare function round$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
declare function scale$4(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: number): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
declare function scaleAndAdd$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any, scale: number): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */
declare function distance$2(a: any, b: any): number;
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
declare function squaredDistance$2(a: any, b: any): number;
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
declare function squaredLength$4(a: any): number;
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */
declare function negate$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */
declare function inverse$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */
declare function normalize$4(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */
declare function dot$4(a: any, b: any): number;
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
declare function cross$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
declare function lerp$4(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any, t: number): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
declare function hermite(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any, c: any, d: any, t: number): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
declare function bezier(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any, c: any, d: any, t: number): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
declare function random$3(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, scale?: number): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */
declare function transformMat4$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, m: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
declare function transformMat3$1(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, m: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */
declare function transformQuat$1(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, q: any): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */
declare function rotateX$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */
declare function rotateY$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */
declare function rotateZ$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>, a: any, b: any, rad: number): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */
declare function angle$1(a: any, b: any): number;
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */
declare function zero$2(out: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>): Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length$4;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$2;
    multiply: typeof multiply$4;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random$3;
    transformMat4: typeof transformMat4$2;
    transformMat3: typeof transformMat3$1;
    transformQuat: typeof transformQuat$1;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$4;
    sub: typeof subtract$2;
    mul: typeof multiply$4;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    len: typeof length$4;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
declare function str$4(a: any): string;
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
declare function exactEquals$4(a: any, b: any): boolean;
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
declare function equals$4(a: any, b: any): boolean;

export { degToRad, common as glMatrix, lerp$5 as lerp, mat2, mat2d, mat3, mat4, quat, quat2, radToDeg, vec2, vec3, vec4 };
