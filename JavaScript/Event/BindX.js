Function.prototype.bindX = function(receiver, args) {
  let self = this,
    selfArgsLen = self.length, // 自身函数参数长度
    selfArgs = args || [];
  return function() {
    let tempArgs = Array.prototype.slice.call(arguments);
	tempArgs = tempArgs.concat(selfArgs);
    if (selfArgs < selfArgsLen) {
      return self.bindX.call(self, receiver, tempArgs);
    }
    return receiver.call(self, tempArgs);
  };
};

function add(num1, num2, num3) {
  return this.value + num1 + num2;
}
var data = {
  value: 1
};
var addEx = add.bindX(data, 2);
addEx(3); // 6
