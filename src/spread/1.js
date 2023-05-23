// SPREAD OPERATOR :: COPY :: CLONE
let user1 = { id: 1, name: "rohit", assignment: "react assignment done" };

// Clone :: SPREAD OPERATOR
// let user2 = { id: user1.id, name: user1.name, assignment: user1.assignment };
let user2 = { ...user1 };

console.log(user1);
console.log(user2);
