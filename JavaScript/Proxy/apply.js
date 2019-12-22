let target = function() {
	return 'I am the target';
};
let handler = {
	apply: function() {
		return 'I am the proxy';
	}
};

let p = new Proxy(target, handler);

p(); // "I am the proxy"
