class Student {
    constructor(name,age,grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    getInfo(){
        return `Ismi: ${this.name}\nYoshi: ${this.age} yosh\nBahosi: ${this.grade} ball`
    }
}

let talaba1 = new Student('Ali', 20, 98);
console.log(talaba1.getInfo());