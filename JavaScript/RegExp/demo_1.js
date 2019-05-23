let srcStr = "abc123efg456";
let reg = /([a-zA-Z]+)(?=\d)(\d+)/gi;
let targetStr = srcStr.replace(reg, function(match, firstStr, secondStr) {
  return secondStr + "" + firstStr;
});
console.info(targetStr);
