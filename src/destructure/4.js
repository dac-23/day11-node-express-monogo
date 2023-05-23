// package.json
let project = {
  name: "day11",
  version: "1.0.0",
  description: "",
  type: "module",
  main: "index.js",
  scripts: {
    test: 'echo "Error: no test specified" && exit 1',
  },
  author: "",
  license: "ISC",
  dependencies: {
    cors: "^2.8.5",
    express: "^4.18.2",
    mongodb: "^5.5.0",
  },
};

let { name, version } = project;
console.log(name, version);
