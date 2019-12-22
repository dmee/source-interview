let handler = {
	setPrototypeOf(target, proto) {
		throw new Error('Changing the prototype is forbidden');
	}
};
let proto = {};
let target = function() {};
let proxy = new Proxy(target, handler);
Object.setPrototypeOf(proxy, proto);
// Error: Changing the prototype is forbidden
