(function() {
	function iPromise(executor) {
		const me = this;
		const STATUS = {
			PENDING: 'pending',
			RESOLVED: 'resolved',
			REJECTED: 'rejected'
		};
		me.STATUS = STATUS; // 状态
		me.onResolvedCallback = []; // 成功回调
		me.onRejectedCallback = []; // 失败回调
		me.data = undefined; // 初始化数据
		me.status = STATUS.PENDING; // 初始化当前状态

		function resolve(value) {
			setTimeout(() => {
				if (me.status !== STATUS.PENDING) {
					return;
				}
				me.status = STATUS.RESOLVED;
				me.data = value;
				for (let i = 0, len = me.onResolvedCallback.length; i < len; i++) {
					me.onResolvedCallback[i](value);
				}
			});
		}
		function reject(data) {
			setTimeout(() => {
				if (me.status !== STATUS.PENDING) {
					return;
				}
				me.status = STATUS.REJECTED;
				me.data = data;
				for (let i = 0, len = me.onRejectedCallback.length; i < len; i++) {
					me.onRejectedCallback[i](data);
				}
			});
		}
		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}
	function resolvePromise(promise, res, resolve, reject) {}
	iPromise.prototype.then = function(onResolve, onReject) {
		onResolve =
			typeof onResolve === 'function'
				? onResolve
				: function(v) {
						return v;
				  };
		onReject =
			typeof onReject === 'function'
				? onReject
				: function(r) {
						return r;
				  };
		const me = this;
		let newInstance;

		if (me.status === me.STATUS.PENDING) {
			newInstance = new iPromise(function(resolve, reject) {
				me.onResolvedCallback.push(function(value) {
					try {
						let res = onResolve(me.data);
						if (res instanceof iPromise) {
							res.then(resolve, reject);
						} else {
							resolve(res);
						}
					} catch (error) {
						return reject(error);
					}
				});
				me.onRejectedCallback.push(function(reason) {
					try {
						let res = onReject(me.data);
						if (res instanceof iPromise) {
							res.then(resolve, reject);
						} else {
							resolve(res);
						}
					} catch (error) {
						return reject(error);
					}
				});
			});
		} else if (me.status === me.STATUS.RESOLVED) {
			newInstance = new iPromise(function(resolve, reject) {
				setTimeout(function() {
					try {
						let res = onResolve(me.data);
						if (res instanceof iPromise) {
							res.then(resolve, reject);
						} else {
							resolve(res);
						}
					} catch (error) {
						return reject(error);
					}
				});
			});
		} else if (me.status === me.STATUS.REJECTED) {
			newInstance = new iPromise(function(resolve, reject) {
				setTimeout(function() {
					try {
						let res = onReject(me.data);
						if (res instanceof iPromise) {
							res.then(resolve, reject);
						} else {
							resolve(res);
						}
					} catch (error) {
						return reject(error);
					}
				});
			});
		}
		return newInstance;
	};
	// 捕获异常
	iPromise.prototype.catch = function(onReject) {
		return this.then(null, onReject);
	};

	// finally方法
	iPromise.prototype.finally = function(fn) {
		return this.then(
			function(v) {
				setTimeout(fn);
				return v;
			},
			function(r) {
				setTimeout(fn);
				throw r;
			}
		);
	};
	// 返回当前Promise的值
	iPromise.prototype.valueOf = function() {
		return this.data;
	};
	iPromise.resolve = function(value) {
		return new iPromise(function(resolve, reject) {
			try {
				resolve(value);
			} catch (error) {
				reject(err);
			}
		});
	};
	iPromise.reject = function(reason) {
		return new iPromise(function(resolve, reject) {
			reject(reason);
		});
	};
	iPromise.all = function(promises) {};
	iPromise.race = function(promises) {};

	// 实例测试
	const promise = new iPromise((resolve, reject) => {
		reject(1);
	});
	promise
		.then(
			a => {
				console.info('after:' + a);
			},
			err => {
				console.info('then reject:' + err);
			}
		)
		.finally(function() {
			console.info('finally');
		});
	iPromise.resolve('11111').then(data => {
		console.info(data);
	});
	iPromise.reject('asdasdas').catch(reason => {
		console.info(reason);
	});
})();
