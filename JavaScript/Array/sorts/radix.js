const makeArray = require('./makeArray');

const sourceArr = makeArray(15);
console.info(`source array:`, JSON.stringify(sourceArr));

// 基数排序
let counter = [];
function RadixSort(arr, maxDigit) {
	let mod = 10;
	let dev = 1;
	for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
		for (let j = 0; j < arr.length; j++) {
			let bucket = parseInt((arr[j] % mod) / dev);
			if (counter[bucket] == null) {
				counter[bucket] = [];
			}
			counter[bucket].push(arr[j]);
		}
		let pos = 0;
		for (let j = 0; j < counter.length; j++) {
			let value = null;
			if (counter[j] != null) {
				while ((value = counter[j].shift()) != null) {
					arr[pos++] = value;
				}
			}
		}
	}
	return arr;
}
console.info(`target array:`, JSON.stringify(RadixSort([...sourceArr])));
