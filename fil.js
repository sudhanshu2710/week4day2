var a = ["abca", "abcd", "abcdea", "xxx"];

console.log(a.filter((cur) => cur[0] === "a" && cur[cur.length - 1] === "a"));
