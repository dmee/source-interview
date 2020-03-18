var myObject = {
	foo: 1,
	set bar(value) {
		return (this.foo = value);
	}
};

myObject.foo; // 1

Reflect.set(myObject, 'foo', 2);
myObject.foo; // 2

Reflect.set(myObject, 'bar', 3);
myObject.foo; // 3
