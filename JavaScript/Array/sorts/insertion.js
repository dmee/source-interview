const makeArray = require('./makeArray');

const sourceArr = makeArray(15);
console.info(`source array:`, JSON.stringify(sourceArr));

// 插入排序
function InsertionSort(arr) {
	var len = arr.length;
	var preIndex, current;
	for (var i = 1; i < len; i++) {
		preIndex = i - 1;
		current = arr[i];
		while (preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex];
			preIndex--;
		}
		arr[preIndex + 1] = current;
	}
	return arr;
}
console.info(`target array:`, JSON.stringify(InsertionSort([...sourceArr])));
