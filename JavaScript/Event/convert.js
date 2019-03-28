function convert(list, parentKey, currentKey, rootValue) {
  let obj = {
    children: [],
    id: rootValue
  };
  list.forEach((v, i) => {
    if (v[parentKey] === rootValue) {
      obj.children.push(
        Object.assign(
          { parentId: rootValue },
          convert(list, parentKey, currentKey, v.id)
        )
      );
    }
  });
  return obj;
}
const list = [
  {
    id: 19,
    parentId: 0
  },
  {
    id: 18,
    parentId: 16
  },
  {
    id: 17,
    parentId: 16
  },
  {
    id: 16,
    parentId: 0
  }
];

const result = convert(list, "parentId", "id", 0);
console.info(result);
