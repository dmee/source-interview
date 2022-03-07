const makeArray = require('./makeArray');

const sourceArr = makeArray(15);
console.info(`source array:`, JSON.stringify(sourceArr));

// 计数排序
function CountingSort(arr, maxValue) {
	let bucket = new Array(maxValue + 1),
		sortedIndex = 0,
		arrLen = arr.length,
		bucketLen = maxValue + 1;

	for (var i = 0; i < arrLen; i++) {
		if (!bucket[arr[i]]) {
			bucket[arr[i]] = 0;
		}
		bucket[arr[i]]++;
	}

	for (var j = 0; j < bucketLen; j++) {
		while (bucket[j] > 0) {
			arr[sortedIndex++] = j;
			bucket[j]--;
		}
	}

	return arr;
}
console.info(`target array:`, JSON.stringify(CountingSort([...sourceArr])));
