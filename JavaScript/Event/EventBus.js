class EventEmitter {
  constructor() {
    this.eventsMap = {}; // 存储事件回调
  }

  // 监听事件
  on(eventName, fn) {
    if (
      !eventName ||
      typeof eventName != "string" ||
      typeof fn !== "function"
    ) {
      return false;
    }
    let fnList = this.eventsMap[eventName];
    if (!fnList) {
      this.eventsMap[eventName] = fn;
    } else if (typeof fnList == "function") {
      this.eventsMap[eventName] = [fnList, fn];
    } else if (this.isArray(fnList)) {
      this.eventsMap[eventName].push(fn);
    }
  }

  // 解绑事件
  off(eventName) {
    if (!eventName || typeof eventName != "string") {
      return false;
    }
    // 删除事件
    if (this.eventsMap[eventName]) {
      delete this.eventsMap[eventName];
    }
  }

  // 触发事件
  emit(eventName) {
    if (!eventName || typeof eventName != "string") {
      return false;
    }
    // 获取事件毁掉
    let eventFn = this.eventsMap[eventName];
    if (!eventFn) {
      return false;
    }
    let args = Array.prototype.slice.call(arguments, 1); // 获取参数

    // 执行回调
    if (typeof eventFn === "function") {
      eventFn.apply(this, args);
    } else if (this.isArray(eventFn)) {
      eventFn.map(fn => {
        fn.apply(this, args);
      });
    }
  }
  // 判断是否为数组
  isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  }
}

let eventEmitter = new EventEmitter();
eventEmitter.on("eventname", function(name, age) {
  console.info("eventname_1", name, age);
});
eventEmitter.on("eventname", function(name, age) {
  console.info("eventname_2", name, age);
});
eventEmitter.on("eventname", function(name, age) {
  console.info("eventname_3", name, age);
});
eventEmitter.emit("eventname");
eventEmitter.off("eventname");
eventEmitter.emit("eventname");
