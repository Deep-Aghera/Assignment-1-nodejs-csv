console.log("Hello csv");
let csvHandler = require('./csvClass/csvClass')
const fs  = require('fs');
console.log(csvHandler);
// fs.writeFile("data.js",
// `id,name,age
// 1,deep,22
// 2,jay,28`,"utf-8",(err) => {
//     if(err) console.log(err);
//     else console.log("data saved");
// });

fs.readFile("data.csv","utf-8",(err,data) => {
    if(err) console.log(err);
    else console.log(typeof(data))
})