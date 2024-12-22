const fs=require("fs");
// fs.writeFileSync("File.txt","I am Donlee");
// fs.appendFileSync("File.txt"," I am gangstare");
// fs.renameSync("File.txt","GangstareDire.txt");
// const afir=fs.readFileSync("GangstareDire.txt","utf-8");
// console.log(afir);
// fs.unlinkSync('GangstareDire.txt');

//Make a Folder

// fs.mkdirSync("Bio");
fs.writeFileSync("Bio/file.txt","Hello howare you");
fs.unlinkSync("Bio/file.txt");
fs.writeFileSync("Bio/GangstareDire.txt","I am don lukato");
fs.writeFileSync("Bio/GangstareDire.txt","I am don lukato blider");
const mybio=fs.readFileSync("Bio/GangstareDire.txt","utf-8");
console.log(mybio);
//Dellet the file
fs.unlinkSync("Bio/GangstareDire.txt");
//delet the folde
fs.rmdirSync("Bio");