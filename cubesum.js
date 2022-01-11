var arr = [2, 3, 5, 7];
console.log(
  arr.filter((e) => e % 3 == 0).reduce((acc, cur) => acc + cur ** 3, 0)
);
