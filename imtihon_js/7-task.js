let data = [0, "Hello", false, "", 42, null,
undefined, "JS"];
let truthy = []
for(let n of data){
  if(n){
    console.log(n)
  }
}
