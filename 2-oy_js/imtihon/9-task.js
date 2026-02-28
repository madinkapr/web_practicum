const calculator = {
  a: 0,
  b: 0,
  setValues(x, y) {
  this.a = x;
  this.b = y;
  },
  sum(d,u) {
    this.a = d;
    this.b = u;
    return d+u;
  },
  multiply(d,u) {
    this.a = d;
    this.b = u;
    return d*u;
  }
};

console.log(calculator.sum(4,5))
console.log(calculator.multiply(4,5))
