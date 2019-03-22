module.exports = {
	create(digit) {
		const totalNumber = 1000,
			arr = [];
		for (let i = 0, len = digit; i < len; i++) {
			arr.push(parseInt(totalNumber * Math.random(0, 1)));
		}
		return arr;
	}
};
