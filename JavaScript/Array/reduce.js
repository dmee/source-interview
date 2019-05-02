let arr = [
  615,
  210,
  856,
  450,
  68,
  1028,
  625,
  920,
  72,
  723,
  671,
  676,
  910,
  1098,
  1108,
  769,
  719,
  548,
  432,
  431,
  386,
  1015,
  1184,
  510
];
let res = arr.reduce((prevItem, nextItem) => {
  return prevItem + nextItem;
});
console.info(res);
