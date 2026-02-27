let text = "We are the losers by FCB";
let arr = text.split(" ");

let longestWord = "";

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > longestWord.length) {
    longestWord = arr[i];
  }
}

console.log(longestWord); 