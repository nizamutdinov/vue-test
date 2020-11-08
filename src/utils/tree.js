const listToTree = (dataset, idKey = 'id', parentKey = 'parentId') => {
  const hashTable = Object.create(null);
  dataset.forEach((element) => {
    hashTable[element[idKey]] = { ...element, children: [] };
    return hashTable[element[idKey]];
  });
  const dataTree = [];
  dataset.forEach((element) => {
    if (element.parentId) {
      hashTable[element[parentKey]].children.push(hashTable[element[idKey]]);
    } else {
      dataTree.push(hashTable[element[idKey]]);
    }
  });
  return dataTree;
};

export default listToTree;
