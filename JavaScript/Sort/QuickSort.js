const NumberGenerator = require('./ArrayGenerator');
function partition(arr, left, right) {
	let centerIdx = Math.floor((left + right) / 2),
		centerItem = arr[centerIdx],
		i = left,
		k = right;
	while (i <= k) {
		while (arr[i] < centerItem) {
			i++;
		}
		while (arr[k] > centerItem) {
			k--;
		}
		if (i <= k) {
			[arr[i], arr[k]] = [arr[k], arr[i]];
			i++;
			k--;
		}
	}
	return i;
}
function QuicKSort(arr, left, right) {
	if (arr.length > 1) {
		index = partition(arr, left, right);
		if (left < index - 1) {
			QuicKSort(arr, left, index - 1);
		}
		if (index < right) {
			QuicKSort(arr, index, right);
		}
	}
	return arr;
}
const arr = NumberGenerator.create(50000);
console.time('QuicKSort');
QuicKSort(arr, 0, arr.length - 1);
console.timeEnd('QuicKSort');
