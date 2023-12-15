console.log('Getting back to backend. Welcome back Arunima Ambastha!!')
const { isUtf8 } = require('buffer')
const fs= require('fs')
//creating a new file
// fs.writeFileSync('file.txt',' Write my data')

// fs.writeFileSync('file.txt',' let me editt Write my data,.')
//adding new statements to the created file
// fs.appendFileSync('file.txt','hey, how are you? i am fine, thank you!!')
// const buf_data=fs.readFileSync('file.txt')
// console.log(buf_data)
// org_data=buf_data.toString()
// console.log(org_data)
// fs.renameSync('file.txt','read_write.txt')

fs.writeFileSync("new.txt","Testing the file system.")

fs.appendFileSync("new.txt","HELLO")
const org=fs.readFileSync("new.txt","utf8")
// org=buf.toString()
// console.log(org)
// fs.renameSync("new.txt","old.txt")
console.log(org)
fs.unlinkSync("new.txt")
fs.writeFile("big.txt","Hey judt trying async", (err)=>{
    console.log('file is created')
    console.log(err)
    console.log('neefvjnfdvn')
})
