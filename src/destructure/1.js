// DESTRUCTURING
// 1. IMPORT/ExPorT
// 2. Passing Parameter to Funcn (UnOrdered)

function printEmailAndNameV1(user) {
  console.log(user.name);
  console.log(user.email);
}

// Index Based Param, Orderd Param
function printEmailAndNameV2(name, email) {
  console.log(name);
  console.log(email);
}

function printEmailAndNameV3({ name, email }) {
  console.log(name);
  console.log(email);
}

let user = {
  id: 1,
  name: "rohit",
  email: "rohit@gmail.com",
  address: "mumbai",
};
// printEmailAndNameV1(user);
// printEmailAndNameV2(user.name, user.email);

printEmailAndNameV3(user);
