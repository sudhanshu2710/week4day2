var a = ["abc", "abcd", "abcde"];

console.log(a.reduce((acc, cur) => acc + cur + "_", ""));
