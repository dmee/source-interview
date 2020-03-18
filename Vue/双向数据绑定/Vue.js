class Vue {
	constructor(options = {}) {
		// 简化了$options的处理
		this.$options = options;
		// 简化了对data的处理
		let data = (this._data = this.$options.data);
		// 将所有data最外层属性代理到Vue实例上
		Object.keys(data).forEach(key => this._proxy(key));
		// 监听数据
		observe(data);
	}
	// 对外暴露调用订阅者的接口，内部主要在指令中使用订阅者
	$watch(expOrFn, cb) {
		new Watcher(this, expOrFn, cb);
	}
	_proxy(key) {
		Object.defineProperty(this, key, {
			configurable: true,
			enumerable: true,
			get: () => this._data[key],
			set: val => {
				this._data[key] = val;
			}
		});
	}
}
function observe(value) {
	// 当值不存在，或者不是复杂数据类型时，不再需要继续深入监听
	if (!value || typeof value !== 'object') {
		return;
	}
	return new Observer(value);
}
