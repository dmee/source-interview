let p = new Proxy(
	{},
	{
		isExtensible: function(target) {
			console.log('called');
			return true;
		}
	}
);

Object.isExtensible(p);
// "called"
// true
