const NumberGenerator = require('./ArrayGenerator');
function SelectSort(arr) {
	for (let i = 0, len = arr.length; i < len; i++) {
		for (let j = 0, len = arr.length; j < len; j++) {
			if (arr[i] < arr[j]) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
	}
	return arr;
}

const arr = NumberGenerator.create(50000);
console.time('SelectSort');
SelectSort(arr);
console.timeEnd('SelectSort');
