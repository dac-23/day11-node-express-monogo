let ref1 = {};

// THIS IS EERROR, REF1 is Object Literal, REF2 is ARRAY
let ref2 = [...ref1];

let list1 = [];
let ref3 = { ...list1 };

// BOTH WILL GIVE U THE ERROR.
