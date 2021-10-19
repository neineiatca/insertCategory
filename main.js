const constructAndTraverseTree = require("./DSF");

let sampleInput = [
  {
    name: "Accessories",
    id: 1,
    parent_id: 20,
  },
  {
    name: "Watches",
    id: 57,
    parent_id: 1,
  },
  {
    name: "Men",
    id: 20,
    parent_id: null,
  },
];

// let testInput = [
//   {
//     name: "txt",
//     id: 96,
//     parent_id: 76,
//   },
//   {
//     name: "txt",
//     id: 76,
//     parent_id: null,
//   },
//   {
//     name: "txt",
//     id: 12,
//     parent_id: 76,
//   },
//   {
//     name: "txt",
//     id: 7,
//     parent_id: 88,
//   },
//   {
//     name: "txt",
//     id: 62,
//     parent_id: 96,
//   },
//   {
//     name: "txt",
//     id: 88,
//     parent_id: 3,
//   },
//   {
//     name: "txt",
//     id: 51,
//     parent_id: 3,
//   },
//   {
//     name: "txt",
//     id: 2,
//     parent_id: 81,
//   },
//   {
//     name: "txt",
//     id: 11,
//     parent_id: 88,
//   },
//   {
//     name: "txt",
//     id: 46,
//     parent_id: 81,
//   },
//   {
//     name: "txt",
//     id: 3,
//     parent_id: 96,
//   },

//   {
//     name: "txt",
//     id: 81,
//     parent_id: 37,
//   },
//   {
//     name: "txt",
//     id: 37,
//     parent_id: null,
//   },
// ];

let outputArray = [];

outputArray = constructAndTraverseTree(sampleInput);

console.log(outputArray);
