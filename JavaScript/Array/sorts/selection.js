const makeArray = require('./makeArray');

const sourceArr = makeArray(15);
console.info(`source array:`, JSON.stringify(sourceArr));

// 选择排序
function SelectionSort(arr) {
	let len = arr.length;
	let minIndex, temp;
	for (let i = 0; i < len - 1; i++) {
		minIndex = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}
console.info(`target array:`, JSON.stringify(SelectionSort([...sourceArr])));
