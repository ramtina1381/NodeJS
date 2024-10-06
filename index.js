// const _ = require("lodash")
// const arr = [1, 4, 6, 8];

// console.log(_.chunk(arr)) 

// const {ford, tesla} = require("./car")
// console.log(ford)
// console.log(tesla)

const path = require("path")
const fs = require("fs")
const filePath = "/Users/ramtinabolfazli/Documents/NodeJS_Training/files/sample.txt"
const fsPromise = require("fs").promises;

// dirname
// console.log(path.dirname(filePath));

// basename
// console.log(path.basename(filePath));

//extension
// console.log(path.extname(filePath)); 

//Reading from a file - Async
// fs.readFile(filePath, "utf-8", (err, data)=> {
//     if(err) throw new Error("Something went wrong!");
//     console.log(data);
// })

//Reading from a file - Sync
// try{
//     const data = fs.readFileSync(path.join(__dirname, "files", "sample.txt"), "utf-8")
//     console.log(data)
// }catch(err){
//     throw Error("An error found!")
// }


// using fs.promises for async operation
// const fileReading = async() => {
//     try{
//         const data = await fsPromise.readFile(filePath, {encoding: "utf-8"})
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }
// now we need to call this function
// fileReading();

// writing into a file
const txtFile = path.join(__dirname, "files", "text.txt")
const content = "I love this Node js tutorial series!"
fs.writeFile(txtFile, content, (err)=> {
    if(err) throw new Error("Something went wrong!");
    console.log("Write operation completed successfuly.");
    fs.readFile(txtFile, 'utf-8', (err, data)=> {
        if(err) throw new Error("Can't read somehow");
        console.log("Here is the content", data)
    })
})

const fileWriting = async() => {
    try{
        await fsPromise.writeFile(txtFile, content)
        await fsPromise.appendFile(txtFile, "\n This is file appender!")
        const data = await fsPromise(txtFile, {encoding: 'utf-8'})
        console.log(data)
    }catch(err){
        console.log("An error occured!")
    }
}

fileWriting()