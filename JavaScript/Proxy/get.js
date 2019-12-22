let obj = new Proxy(
	{},
	{
		get: function(target, propKey, receiver) {
			console.log(`getting ${propKey}!`);
			return 'proxy property';
		},
		set: function(target, propKey, value, receiver) {
			console.log(`setting ${propKey}!`);
		}
	}
);

console.info(obj.name);
