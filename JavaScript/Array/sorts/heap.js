const makeArray = require('./makeArray');

const sourceArr = makeArray(15);
console.info(`source array:`, JSON.stringify(sourceArr));

let len;
function buildMaxHeap(arr) {
	// 建立大顶堆
	len = arr.length;
	for (var i = Math.floor(len / 2); i >= 0; i--) {
		heapify(arr, i);
	}
}

function heapify(arr, i) {
	// 堆调整
	var left = 2 * i + 1,
		right = 2 * i + 2,
		largest = i;

	if (left < len && arr[left] > arr[largest]) {
		largest = left;
	}

	if (right < len && arr[right] > arr[largest]) {
		largest = right;
	}

	if (largest != i) {
		swap(arr, i, largest);
		heapify(arr, largest);
	}
}

function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
// 堆排序
function HeapSort(arr) {
	buildMaxHeap(arr);
	for (var i = arr.length - 1; i > 0; i--) {
		swap(arr, 0, i);
		len--;
		heapify(arr, 0);
	}
	return arr;
}

console.info(`target array:`, JSON.stringify(HeapSort([...sourceArr])));
