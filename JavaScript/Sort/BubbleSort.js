const NumberGenerator = require('./ArrayGenerator');
function BubbleSort(arr) {
	for (let i = 0, len = arr.length; i < len; i++) {
		for (let k = 0, len = arr.length; k < len; k++) {
			if (arr[k] < arr[k + 1]) {
				[arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
			}
		}
	}
	return arr;
}

const arr = NumberGenerator.create(50000);
console.time('BubbleSort');
BubbleSort(arr);
console.timeEnd('BubbleSort');
