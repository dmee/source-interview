const NumberGenerator = require('./ArrayGenerator');

const arr = NumberGenerator.create(50000);
console.time('NativeSort');
arr.sort();
console.timeEnd('NativeSort');
