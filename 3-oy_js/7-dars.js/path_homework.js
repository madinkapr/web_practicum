//1.
import path from 'path'
let result = path.join('users', "jakhongir", "documents", "project", "index.js"
)

// console.log(result)

//2.
// function aboutFile(file) {
//     let result1 = path.parse(file)
//     return result1
// }

// console.log(aboutFile("C:/projects/app/index.js"))

//3.
let result2 = path.parse("/home/user/test/data.txt")
// console.log(result2)

//4.
function isAbsolutePath(p) {
    let res = path.isAbsolute(p)
    return res

}


// console.log(isAbsolutePath('users/test/a.js'))

//5.
const p = 'users//jakhongir///desktop/project//index.js'

let result3 = path.normalize(p)
// console.log(result3)

//6.
let result4 = path.resolve("project", "src", "utils",   "helper.js")
console.log(result4)
