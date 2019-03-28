Function.prototype.bindX = function(obj, v) {
  let that = this;
  let args = Array.prototype.slice.call(arguments);
  return function() {
    let tempArgs = Array.prototype.slice.call(arguments);
    return that.apply(obj, args.concat(tempArgs));
  };
};
function add(num1, num2) {
  return this.value + num1 + num2;
}
var data = {
  value: 1
};
var addEx = add.bindX(data, 2);
let res = addEx(3);
console.info(res); // 6
