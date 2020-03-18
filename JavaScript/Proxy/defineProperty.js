let handler = {
	defineProperty(target, key, descriptor) {
		return false;
	}
};
let target = {};
let proxy = new Proxy(target, handler);
proxy.foo = 'bar'; // 不会生效
