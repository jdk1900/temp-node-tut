//----------Now READ from a file

//--1st way: One way is this: const {readFileSync,writeFileSync} = require("fs");

// const first = readFileSync("./content/first.txt","utf-8")
// const second = readFileSync("./content/second.txt","utf-8")

//Another way is this:(I prefer this one)
const fs = require("fs");

const first = fs.readFileSync("./content/first.txt","utf-8")
const second = fs.readFileSync("./content/second.txt","utf-8")
fs.writeFileSync("./content/result-sync.txt", `Here is the result : ${first}, ${second}`);
//end of my prefered way

console.log(first, second);

//this is when yu want to append to a file(flag)
fs.writeFileSync("./content/result-sync.txt", `Here is the result : ${first}, ${second}`, {flag: 'a'});