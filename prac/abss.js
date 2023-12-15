const fs = require ('fs')
// fs.writeFile("bio.txt","Hey just a practice.",(err)=>{
// console.log("no error")
// })
// fs.appendFile("bio.txt","This is new data",()=>{
//     console.log("new data addded")
// })
// fs.readFile("bio.txt","utf-8",(err,data)=>{
//     console.log(data)
// })
// fs.rename("bio.txt","newbio.txt",(err)=>{
//     console.log("file was renamed")
// })
fs.unlink("newbio.txt",(err)=>{
    console.log("file deleted successfully")
})