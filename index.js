// console.log("Hello Backend")

// Packages
//1. In built packages
//2. Third party packages
//3. Custom built packages

// const os = require('os')
// console.log(os.version())
// console.log(os.platform())
// console.log(os.cpus())
// console.log(os.hostname())
// console.log(os.homedir())


// const path = require('path')
// console.log(path.extname('fake.js'))
// const userData = [{
//     name:"Nag",
//     email:"nag@gmail.com",
//     mobile:"123456789",
//     address:{
//         no:"13",
//         street:"Vivekanandar Street Dubai Main road",
//         city: "Dubai"
//     }
// },
// {
//     name:"Nag",
//     email:"nag@gmail.com",
//     mobile:"123456789",
//     address:{
//         no:"13",
//         street:"Vivekanandar Street Dubai Main road",
//         city: "Dubai"
//     }
// },
// {
//     name:"Nag",
//     email:"nag@gmail.com",
//     mobile:"123456789",
//     address:{
//         no:"13",
//         street:"Vivekanandar Street Dubai Main road",
//         city: "Dubai"
//     }
// },
// {
//     name:"Nag",
//     email:"nag@gmail.com",
//     mobile:"123456789",
//     address:{
//         no:"13",
//         street:"Vivekanandar Street Dubai Main road",
//         city: "Dubai"
//     }
// }]


// const http = require('http')
// const PORT = 8000
// let server = new http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'})
//     res.end(JSON.stringify(userData))
// })

// server.listen(PORT,()=>console.log("Server connected to "+PORT))


const http = require('http')
const fs = require('fs')
const PORT = 8000
let server = new http.createServer((req,res)=>{
    try {

        // fs.writeFileSync('assets/sample.txt','What is the fav food','utf-8')
        fs.appendFileSync('assets/sample.txt',' My Fav is Curd rice','utf-8')
        let data = fs.readFileSync('assets/sample.txt','utf-8')
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data)
        
    } catch (error) {
        res.writeHead(500,{'Content-Type':'text/plain'})
        res.end(`Error Occoured: ${error.message} Try Again Later!`)
    }
})

server.listen(PORT,()=>console.log("Server connected to "+PORT))


// let data = fs.readFile('node.txt','utf-8',(err,data)=>{
//     if(err)
//     {
//         throw err
//     }
//     else
//     {
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.end(data)
//     }
// })