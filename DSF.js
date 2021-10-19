const buildMap = (categories) => {
  const categoryMap = new Map();

  categories.forEach((category) => {
    const parentNode = categoryMap.get(category.parent_id);
    if (parentNode && parentNode.children && parentNode.children.length >= 0) {
      parentNode.children.push(category);
      categoryMap.set(category.parent_id, parentNode);
    } else {
      categoryMap.set(category.parent_id, { children: [category] });
    }
  });

  return categoryMap;
};

const DFS = (currentKey, constructedMap, outputArray) => {
  const currentNodeValue = constructedMap.get(currentKey);
  outputArray.push(currentKey);
  if (
    currentNodeValue &&
    currentNodeValue.children &&
    currentNodeValue.children.length > 0
  ) {
    currentNodeValue.children.forEach((child) => {
      DFS(child.id, constructedMap, outputArray);
    });
  } else {
    return;
  }
};

const constructAndTraverseTree = (sampleInput) => {
  let constructedMap = buildMap(sampleInput);
  let sortedIndexes = [];
  let outputArray = [];
  DFS(null, constructedMap, sortedIndexes);
  // fetch element based on index
  for (let i = 0; i < sortedIndexes.length; i++) {
    if (sortedIndexes[i] !== null) {
      const inputElement = sampleInput.filter(
        (e) => e.id === sortedIndexes[i]
      )[0];
      outputArray.push(inputElement);
    }
  }
  return outputArray;
};

module.exports = constructAndTraverseTree;
