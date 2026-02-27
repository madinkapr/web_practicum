function retryPromise(promiseFn, retries = 3) {
    return new Promise((res, rej) => {
        function attempt(left) {
            promiseFn()
                .then(res)
                .catch((err) => {
                    if (left <= 1) {
                        rej(err); // oxirgi urinish ham xato bo'lsa
                    } else {
                        attempt(left - 1); // qayta urinish
                    }
                });
        }
        attempt(retries)
    })
}

let count = 0;
function testFn() {
  return new Promise((res, rej) => {
    count++;
    console.log("Attempt:", count);

    if (count < 3) rej("Xato chiqdi ❌");
    else res("Success ✅");
  });
}

retryPromise(testFn, 3)
  .then((res) => console.log("Result:", res))
  .catch((err) => console.log("Failed:", err));
