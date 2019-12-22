let proxy = new Proxy(
	{},
	{
		preventExtensions: function(target) {
			return true;
		}
	}
);

Object.preventExtensions(proxy);
// Uncaught TypeError: 'preventExtensions' on proxy: trap returned truish but the proxy target is extensible
