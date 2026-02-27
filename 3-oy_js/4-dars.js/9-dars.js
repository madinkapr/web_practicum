function executeSequentially(promises) {
  const results = [];

  return promises.reduce((chain, fn) => {
    return chain
      .then(() => fn())
      .then((res) => results.push(res));
  }, Promise.resolve())
  .then(() => results);
}


const p1 = () => new Promise(res => setTimeout(() => res("p1"), 1000));
const p2 = () => new Promise(res => setTimeout(() => res("p2"), 2000));
const p3 = () => new Promise(res => setTimeout(() => res("p3"), 500));

executeSequentially([p1, p2, p3])
  .then(results => console.log("Natijalar:", results))
  .catch(err => console.log("Xato:", err));


