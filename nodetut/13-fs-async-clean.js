const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getFile = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,result)=>{
//             if(err){
//                 reject(err);
//                 return;
//             }
//             resolve(result);
//         })
//     })
// }

const getStart = async()=>{
    try{
        const first = await readFile('./content/first.txt','utf8')
        const second = await readFile('./content/second.txt','utf8')
        await writeFile('./content/result-mind-granade.txt',`This is AWESOME ${first}${second}`,{flag:a})
        console.log(first,second)
    }
    catch(err){
        console.log(err)
    }
}
getStart()