// ****************************************Searching (search, indexOf, includes, startsWith, endsWith)******************************
// 1. search()
let str = "The black cat is under the table";
console.log(str.search('cat'));

// 2. indexOf()
let text = "I love js and js love me";
console.log(text.indexOf('js'));

// 3. lastIndexOf()
console.log(text.lastIndexOf('js'));

// 4. includes()
let s = "Hi, how are you?";
console.log(s.includes('hello'));

// 5. startsWith()
let url = "https://google.com";
console.log(url.startsWith('https'));

// 6. endsWith()
let photo = "my_picture.jpg";
console.log(photo.endsWith('.jpg'))

// *******************************Trimming (trim, trimStart, trimEnd)*************************

// 1. trim()
let t = "   Hello JS   ";
console.log(t.trim(' '));

// 2. trimStart()
let l = "    Clean me";
console.log(l.trimStart(' '));

// 3. trimEnd()
let k = "Bye JS     ";
console.log(k.trimEnd(' '));

// ****************************************Padding (padStart, padEnd)************************************

// 1. padStart()
let num = '45';
console.log(num.padStart(5,0));

// 2. padEnd()
let ism = "Ali";
console.log(ism.padEnd(8, '*'))



// *******************************Extracting (split, substring, slice)**************************************

// 1. split()
let words = "JavaScript is awesome";
console.log(words.split(' '));

// 2. substring()
let lang = "JavaScript";
console.log(lang.indexOf('Script'));
console.log(lang.substring(4));

// 3. slice()
let s = "JavaScript is awesome";
console.log(s.indexOf('awesome'));
console.log(s.slice(14));


// ********************************Concatenating & Interpolating**************************************

// 1. concat()
let a = "Hello";
let b = "World";

console.log(a.concat(b))

// 2. Template literals
let name = "Jakhongir";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old`)


// ****************Replacing (replace, replaceAll)****************
// 1. replace()

let text = "apple banana apple mango";
console.log(text.replace('apple', 'orange'))

// 2. replaceAll()
let text = "apple banana apple mango";
console.log(text.replaceAll('apple', 'orange'))

// ****************Changing Cases (toUpperCase, toLowerCase)****************

// 1. toUpperCase()
let x = "hello world";
console.log(x.toUpperCase())

// 2. toLowerCase()
let y = "JAVASCRIPT IS FUN";
console.log(y.toLowerCase());