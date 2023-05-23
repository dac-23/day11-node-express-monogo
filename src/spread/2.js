let user1 = {
  id: 1,
  name: "rohit",
  assignment1: "react assignment done",
  assignment2: "react assignment done",
  assignment3: "react assignment done",
  assignment4: "react assignment done",
};

// REACT + VIRTUAL DOM
// Clone + Override name and id
let user2 = { ...user1, name: "rahul", id: 2 };

console.log(user1);
console.log(user2);
