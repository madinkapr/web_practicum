// 1-masala
const user = {
    name: "Ali",
    age: 20,
    job: "Developer"
}

console.log(user.name, user.job)

// 2-masala
const student = {
    name: "Aziza",
    course: "Frontend"
}
student.age = 19
console.log(student)

// 3-masala
const person = {
    name: "Kamron",
    age: 25,
    city: "Tashkent"
}

delete person.age

console.log(person)

// 4-masala
function makeObj(count) {
    const counter = {
        count: 0,
        increament() {
            return count++;
        },
        decrement() {
            return count--;
        }
    }
    return counter
}
const cnt1 = makeObj()
console.log(cnt1);

// 5-masala
const a = { name: "Ali", age: 20 };
const b = { name: "Ali", age: 20 };

function isEqual(a, b) {
    for (let key in a) {
        if (a[key] == b[key]) {
            return true
        } else {
            return false
        }
    }
}

console.log(isEqual(a, b))

// 6-masala
const prices = {
    apple: 5000,
    banana: 12000,
    milk: 15000,
};
let sum = 0;
for (let key in prices) {
    sum += prices[key]
}
console.log(sum)

// 7-masala

const user = {
    name: "Jasur",
    age: 21
};

const user1 = { ...user }
console.log(user1)

// 8-masala
const product = {
    name: "Phone",
    price: 300,
    specs: {
        cpu: "Snapdragon",
        ram: "8GB"
    }
};
// structuredClone
const copy1 = structuredClone(product);
console.log(copy1)
// JSON.parse(JSON.stringify())
const copy2 = JSON.parse(JSON.stringify(product));
console.log(copy2)


// 9-masala
const obj = {
    a: {
        name: "Ali"
    },
    b: {
        age: 22
    },
    c: {
        job: "Developer"
    }
}

console.log(obj)


// 10-masala
const user = {
    name: "Ali",
    age: 20,
    isStudent: true,
    getInfo() {
        console.log(`${user.name} ${user.age} yoshda. Talaba: ${user.isStudent}`)
    }
}
user.getInfo()


// 11-misol
const person = {
    name: "Ali",
    age: 22,
    address: {
        city: "Toshkent",
        street: "Amir Temur"
    }
}
// Shallow copy 
// const person1 = {...person} //spread
// person1.address.city = 'Buxoro';

// console.log(person);
// console.log(person1);
// city ni ozgartirganimda person va person1 obyektga tasir qildi ikkalasi ham Buxoroga o'zgarvotti. Chunki 2ta obyekt 1ta adresga qarab turibdi

// const person2 = Object.assign({},person) // Object.assign
// person2.address.city = 'Buxoro';
// console.log(person);
// console.log(person2);
// bunga ham tasir qildi 2ta obyektga
// farqi faqat sintaksisida. Bir xil ish qiladi. Spread(...) qisqa va zamonaviy. Object.assign sal uzunroq yoziladi. City ni Buxoroga ozgartirganda ikkala objectga ham tasir qivotti chunki spread bilan object assign yuzaki nusxalidi(faqat adresini ko'chiradi).


// Deep copy 

// const person3 = structuredClone(person); //structuredClone 
// person3.address.city = 'Navoiy'
// console.log(person3)
// console.log(person)
// ha faqat bittasiga tasir qildi. bunda manzili bir xil emas.Bu yangi obyekt 



const person4 = JSON.parse(JSON.stringify(person)) //JSON.parse(JSON.stringify
person4.address.city = 'Navoiy';
console.log(person4);
console.log(person);

// ha faqat 1tasiga tasir qildi. StructuredClone bilan Json.parse ni farqi yoq bir xil qiladi.Lekin shallow copy bilan deep copyni farqi shallowda bitta adressdan olinadi deep copy da esa alohida alohida objectlar yaratiladi.


// 12-masala

const calculator = {
    add(a, b) {
        return a + b
    },
    sub(a, b) {
        return a - b
    },
    mul(a, b) {
        return a * b
    },
    div(a, b) {
        return a / b
    }
}

console.log(calculator.add(3, 4))


// 13-masala
const car = {
    brand: "Chevrolet",
    model: "Cobalt",
    year: "2022",
    getAge(currentYear) {
        console.log(`${car.model} mashinasi ${currentYear - car.year} yoshda`)
    }
}

car.getAge(2025);

// 14-masala
const obj = {
    multiply(n) {
        let result = 1;
        if (n <= 10 && n > 0) {
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }

    }
};

console.log(obj.multiply(6))

// 15-masala
const a = {
    name: "Madina",
    age: 23
};
const b = {
    city: "Toshkent",
    isMarried: false
};

const info = { ...a, ...b }
console.log(info)

// 16-masala
const person = {
    name: "Ali",
    address: { city: "Tashkent", zip: 100000 }
};

person.address.city = "Samarqand"
console.log(person)

// 17-masala
const student = {
    name: "Ali",
    age: 23,
    facultet: "e-commerce",
    course: 4,
    marks: {
        math: 90,
        ecommerce: 40,
        economy: 60,
        russian: 78
    },
    maxBall() {
        let max = 0;
        for (let key in student.marks) {
            if (student.marks[key] > max) {
                max = student.marks[key];
            }
        }
        return max
    },
    average() {
        let sum = 0;
        let count = 0;
        for (let key in student.marks) {
            sum += student.marks[key]
            count++;
        }
        return Math.floor(sum / count);
    }
}

student.grant = false;

console.log(`Max baho: ${student.maxBall()}`)

console.log(`O'rtacha bahosi: ${student.average()}`)


// 18-masala
const books ={
    book1:{
        nomi: "Matematika",
        mualllif: "Nodira Begimova",
        nashrYili: 2019,
        holat: true
    },
    book2:{
        nomi: "Mukammal dasturlash HRML va CSS",
        mualllif: "Javlon Abdullo",
        nashrYili: 2021,
        holat: false
    },
    book3:{
        nomi: "Mukammal dasturlash Js asoslari",
        muallif: "Javlon Abdullo",
        nashrYili: 2023,
        holat: true
    },
    isRead(kitob_nomi){ //kitob='book2'
        for(let book in books){ // 'book1', 'book2', 'book3'
            if(books[book].nomi === kitob_nomi){
                if(books[book].holat == true){
                    console.log('Sotish mumkin emas!');
                }
                else{
                    console.log('Sotish mumkin.');
                }
            }
        }
    }
   
}

books.isRead('Mukammal dasturlash HRML va CSS')



// 19-masala

const car = {
    marka: 'Chevrolet',
    model: 'Nexia',
    yil: 2010,
    texnik_holat:{
        dvigatel_hajmi: 2,
        ot_kuchi:75,
        rang:'oq'
    }
}

car['texnik_holat']['rang'] = 'qora';
// car.texnik_holat['rang'] = 'qora';
// car.texnik_holat.rang = ' qora';
// car['texnik_holat'].rang = 'qora';
console.log(car)

// 20=masala
const user = {
    name: "Ali",
    age: 20,
    job: "Developer"
}

const user_shallow = {...user};
//const user_shallow2 = Object.assign({}, user);

user_shallow.name = 'Ibrohim';
user_shallow.age = 29;
user_shallow.job = 'Teacher';

console.log('user = ', user);
console.log('user_shallow = ', user_shallow);

// 21-masala

cola = {
    bonus(n,k){
        return n+Math.floor((n-1)/(k-1))
    }
}

console.log(cola.bonus(1605,1998))



  
    


