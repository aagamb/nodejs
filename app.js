// //sync file read/write
// const {readFileSync, writeFileSync} = require('fs')
// const first = readFileSync('./content/first.txt', 'utf8')
// writeFileSync('./content/newFile.txt', `First text file content: ${first}`, {flag: 'a'})

// //async file read/write

// const {readFile, writeFile} = require('fs')
// readFile('./content/first.txt', 'utf8', (err, result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// })

const http = require('http');
const server = http.createServer((req, res)=>{
    res.write('Welcome to homepage')
    res.end()

})
server.listen(1234)