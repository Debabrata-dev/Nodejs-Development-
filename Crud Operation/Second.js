//Async
const fs=require("fs");
fs.writeFile('read.txt',"today is good day: ",(err)=>{
console.log(err);
});


fs.appendFile('read.txt',"My chanel:",(err)=>{
    console.log("data add");
})

fs.readFile("read.txt",'UTF-8',(err,data)=>{
console.log(data);
})
//delet .
fs.unlink("read.txt",(err)=>{

})