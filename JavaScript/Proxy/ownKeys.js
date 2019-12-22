let target = {
	a: 1,
	b: 2,
	c: 3
};

let handler = {
	ownKeys(target) {
		return ['a'];
	}
};

let proxy = new Proxy(target, handler);

Object.keys(proxy);
// [ 'a' ]
