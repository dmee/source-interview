let handler = {
	has(target, key) {
		if (key[0] === '_') {
			return false;
		}
		return key in target;
	}
};
let target = { _prop: 'foo', prop: 'foo' };
let proxy = new Proxy(target, handler);
'_prop' in proxy; // false
