const NumberGenerator = require('./ArrayGenerator');
function InsterSort(arr) {
	for (let i = 0, len = arr.length; i < len; i++) {
		for (let j = 1, len = arr.length; j < len; j++) {
			if (arr[i] < arr[i + 1]) {
				[arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
				break;
			}
		}
	}
	return arr;
}

const arr = NumberGenerator.create(500000);
console.time('InsterSort');
InsterSort(arr);
console.timeEnd('InsterSort');
