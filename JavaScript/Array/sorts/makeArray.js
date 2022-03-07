module.exports = function (len = 10, maxNum = 100) {
	let arr = [];
	for (let i = 0; i < len; i++) {
		arr.push(parseInt(maxNum * Math.random()));
	}
	return arr;
};
