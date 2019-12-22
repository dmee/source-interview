let handler = {
	getOwnPropertyDescriptor(target, key) {
		if (key[0] === '_') {
			return;
		}
		return Object.getOwnPropertyDescriptor(target, key);
	}
};
let target = { _foo: 'bar', baz: 'tar' };
let proxy = new Proxy(target, handler);
Object.getOwnPropertyDescriptor(proxy, 'wat');
// undefined
Object.getOwnPropertyDescriptor(proxy, '_foo');
// undefined
Object.getOwnPropertyDescriptor(proxy, 'baz');
// { value: 'tar', writable: true, enumerable: true, configurable: true }
