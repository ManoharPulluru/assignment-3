const fs = require('fs');
const http = require('http');
let Your_Name ='Manohar'
const htmlContent = `<h1> Hello World </h1> \n<p> This is ${Your_Name}... </p>` ;
fs.writeFile('./index.html',htmlContent,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('HTML created succesfully');
    }
});
const htmlFile = fs.readFileSync('./index.html','utf-8');
console.log(htmlFile);
const server = http.createServer((req,res)=>{
    res.end(htmlFile);
}).listen(5000,()=>{
    console.log('Server running on port 5000');
});