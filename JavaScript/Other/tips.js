// 创建一个纯净的空对象
console.info(Object.create(null));

// 快速生成五位随机数
let randomCode = Math.random()
  .toString(36)
  .substr(2, 5);
console.info(randomCode);

// 快速生成随机颜色
let hexColor =
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0");
console.info(hexColor);
