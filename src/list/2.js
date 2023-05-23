// MAP OPERATOR :: LOOPING IN REACT
// THIS WORKS with ARRAY or LIST
// THIS IS EQUIVALENT TO THE LAMDA And STREAM in JAVA :: 2 WEEK

// INPUT
let list = ["delhi", "caclutta", "kochi", "mumbai"];

// OUTPUT
// ["Hi DELHI", "Hi CALCUTTA", "Hi KOCHI", "Hi MUMBAI"]

let list1 = list.map((item) => "hi " + item.toUpperCase());

console.log(list);
console.log(list1);
