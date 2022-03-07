const makeArray = require('./makeArray');

const sourceArr = makeArray(15);
console.info(`source array:`, JSON.stringify(sourceArr));

// 冒泡排序
function BubbleSort(arr) {
	for (let i = 0, len = arr.length - 1; i < len; i++) {
		for (let j = 0, jLen = arr.length - 1 - i; j < jLen; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
console.info(`target array:`, JSON.stringify(BubbleSort([...sourceArr])));
