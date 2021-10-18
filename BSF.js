let testInput = [
  {
    name: "Men",
    id: 20,
    parent_id: null,
  },
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
];

const buildMap = (categories) => {
  const categoryMap = new Map();

  categories.forEach((category) => {
    if (category.parent_id === null) {
      categoryMap.set(null, { children: [category] });
    } else {
      const parentNode = categoryMap.get(category.parent_id);

      if (
        parentNode &&
        parentNode.children &&
        parentNode.children.length >= 0
      ) {
        parentNode.children.push(category);
        categoryMap.set(category.parent_id, parentNode);
      } else {
        categoryMap.set(category.parent_id, { children: [category] });
      }
    }
  });

  return categoryMap;
};

const BFS = (currentKey, constructedMap, outputArray) => {
  const currentNodeValue = constructedMap.get(currentKey);
  outputArray.push(currentKey);
  if (
    currentNodeValue &&
    currentNodeValue.children &&
    currentNodeValue.children.length > 0
  ) {
    currentNodeValue.children.forEach((child) => {
      BFS(child.id, constructedMap, outputArray);
    });
  } else {
    return;
  }
};

let constructedMap = buildMap(testInput);

let outputArray = [];
BFS(null, constructedMap, outputArray);

// for debug
console.log(outputArray);
