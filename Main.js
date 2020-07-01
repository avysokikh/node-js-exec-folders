const fs = require('fs')
const folders = ['./folder1/', './folder2/', './folder3/']
const path = require('path')

const data = {};
let result = {};

async function execJsInFolder(folder) {
    try {
        const files = fs.readdirSync(folder).filter(file => {
            return path.extname(file) === '.js'
        })

        const execs = files.map(async file => {
            const func = require(`${folder}${file}`) // import js file
            return await func(data, result) // exec code from js file
        })

        return Promise.all(execs)
    } catch (err) {
        console.error('Something went wrong :(')
    }
}

async function execJsInFolders(folders) {
    folders.map(async folder => {
        await execJsInFolder(folder) // exec all .js files in the folder
    })
}

execJsInFolders(folders)
    .then(console.log('Main.js finished'))