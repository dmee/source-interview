let handler = {
	deleteProperty(target, key) {
		invariant(key, 'delete');
		delete target[key];
		return true;
	}
};
function invariant(key, action) {
	if (key[0] === '_') {
		throw new Error(`Invalid attempt to ${action} private "${key}" property`);
	}
}

let target = { _prop: 'foo' };
let proxy = new Proxy(target, handler);
delete proxy._prop;
// Error: Invalid attempt to delete private "_prop" property
