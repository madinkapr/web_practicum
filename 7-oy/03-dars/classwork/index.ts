// let n = 12
// n = "salom"
// n = 13

// const str = "salom"
// str = 12
// str = "hi"

// let boolean= true
// boolean = false
// boolean = "salom"

// let n : number = 12;
// n= 13;

// console.log(n)


// LITERAL TYPE
// const role: "admin" | "student" | "teacher" = "admin"
// const permission: "GET" | "POST" | "DELETE" | "PUT" = "GET"

// UNION TYPE
// const n: string | number | boolean = 12

// ARRAY
// let arr: number[] = [12, 34, 5]
// let ar: string[] = ["salom", "hi"]
// const array: (string | number)[] = [12, "salom", 34, "hi"]

// ANY
// let a: any = 12
// a = "salom"
// a= true

// FUNCTION
// function dev(a: number, b: number): number {
//     return a + b;
// }
// console.log(dev(12, 34))

// console.log(12+"1") //121
// console.log(12+ +"1") //13
// console.log(12+ +"salom") //NaN

// TYPE-kam berish ham kop berish ham mumkinmas
// ?-optional xato bermidi
// type User = {
//     name: string,
//     age: number,
//     isActive?: boolean
// }

// const user: User = {
//     name: "John",
//     age: 30,
//     // isActive: true
// }

// INTERFACE- extends orqali voris olsh ham mumkin, type va interface ni farqi shundaki, type da union(|) va intersection(&)qilish mumkin, interface da esa yoq. Non primitive turlarni yaratishda interface ishlatiladi, primitive turlarni yaratishda type ishlatiladi. Type da biror bir type ni qayta aniqlash mumkin emas, interface da esa mumkin. Type da mapped type va conditional type qilish mumkin, interface da esa yoq. bir xil nom bilan interface ni qayta aniqlash mumkin, type da esa mumkin emas. 
// interface Person {
//     name: string,
//     age: number,
//     isActive?: boolean
// }

// interface Person {
//     email: string
// }

// const user: Person = {
//     name: "John",
//     age: 30,
//     // isActive: true
//     email: "jnjkk"
// }

// UTILITY TYPES
    //    - Partial<Type> - Type ning barcha property larini optional qiladi
    //    - Required<Type> - Type ning barcha property larini required qiladi
    //    - Readonly<Type> - Type ning barcha property larini readonly qiladi
    //    - Record<Keys, Type> - Keys ni Type ga map qiladi. key key ga type valuega ega boladi
    //    - Pick<Type, Keys> - Type dan Keys ni tanlab oladi
    //    - Omit<Type, Keys> - Type dan Keys ni tashlab yuboradi

// PARTIAL
// interface User {
//     name: string,
//     age: number
// }

// const user: Partial<User> ={
//     name: "John"
// }

// REQUIRED
// const user: Required<User> = {
//     name: "John",
//     age: 30
// }

// PICK
// const user: Pick<User, "name" | "age"> = {
//     name: "John",
//     age: 30
// }

// OMIT
// const user: Omit<User, "age"> = {
//     name: "John"
// }

// RECORD
// type Role = "admin" | "student" | "teacher"
// type Permission = "GET" | "POST" | "DELETE" | "PUT"
// type n = string | number 


// const user: Record<Role, Permission[]> = {
//     "admin": ["GET", "POST", "DELETE", "PUT"],
//     "student": ["POST"],
//     "teacher": ["DELETE"]
// }
 
// const user: Record<Role, n[]> = {
//     "admin": ["GET", "POST", "DELETE", "PUT", 'hello', 12],
//     "student": ["POST"],
//     "teacher": ["DELETE"]
// }

// GENERIC - bu biror bir type ni parametr sifatida qabul qiladigan va shu type ga asoslangan yangi type yaratuvchi konstruktsiya. Generic lar yordamida biz biror bir type ni qayta ishlatishimiz mumkin, bu esa kodni yanada moslashuvchan va qayta ishlatishga imkon beradi. Generic lar ko'pincha funktsiyalar, sinflar va interfeyslar bilan birga ishlatiladi. Generic lar yordamida biz biror bir type ni parametr sifatida qabul qiladigan va shu type ga asoslangan yangi type yaratuvchi konstruktsiya. Generic lar yordamida biz biror bir type ni qayta ishlatishimiz mumkin, bu esa kodni yanada moslashuvchan va qayta ishlatishga imkon beradi. Generic lar ko'pincha funktsiyalar, sinflar va interfeyslar bilan birga ishlatiladi. a va b bir xil type da bolishi kerak, lekin biz a va b ning type ni oldindan bilmaymiz, shuning uchun biz generic larni ishlatamiz. Generic lar yordamida biz a va b ning type ni parametr sifatida qabul qilamiz va shu type ga asoslangan yangi type yaratuvchi konstruktsiya yaratamiz. object va boolean type larni generic lar yordamida yaratish mumkin emas, chunki ular primitive turlar hisoblanadi. 

// function plus<T>(a: T, b: T): T {
//     return a as any + b as any
// }
// plus<number>(12,34)
// plus<string>("hello","world")

// function plus<T extends number | string>(a: T, b: T): T {
//     return (a as any) + (b as any)
// }
// plus("hello","world")
// plus(12,34)
// plus("hello", 12)
// plus ({}, {})
// plus(true, false)

// function plus<T,N>(name: T, age: N): object {
//     return {
//         name,
//         age
//     }
// }
// plus<string, number>("John", 30)

// SPECIAL TYPES
    // -unknown - bu type ni hech qanday qiymatga tayinlash mumkin emas, lekin bu type ni boshqa type ga tayinlash mumkin
    // -never - bu type ni hech qanday qiymatga tayinlash mumkin emas, va bu type ni boshqa type ga ham tayinlash mumkin emas
    // -void - bu type ni faqat undefined yoki null qiymatga tayinlash mumkin, va bu type ni boshqa type ga ham tayinlash mumkin emas. return qilmaydigan funksiyalar uchun ishlatiladi.
    // any - bu type ni har qanday qiymatga tayinlash mumkin, va bu type ni boshqa type ga ham tayinlash mumkin
    // keyof - bu operator Type ning barcha property larini union type sifatida qaytaradi.
    // typeof - bu operator o'zgaruvchining type ni qaytaradi. typeof operatori faqat primitive turlar uchun ishlaydi, object va array lar uchun ishlamaydi.

// let a: unknown = 12
// a = "salom"
// a = true
// let b: string = a //Type 'unknown' is not assignable to type 'string'.


// let c: any = 12
// c = "salom"
// c = true
// let d: string = c //Type 'any' is not assignable to type 'string'.

// let e: never = 12 //Type 'number' is not assignable to type 'never'.
// let f: never = "salom" //Type 'string' is not assignable to type 'never'.
// let g: never = true //Type 'boolean' is not assignable to type 'never'.


// function dev1(): void {
//     console.log("Hello World")
// }

// type User = {
//     name: string,
//     age: number,
//     isActive?: boolean
// }
// type role = keyof User // "name" | "age" | "isActive"
// const a: role = "name" // "age" yoki "isActive" ham bo'lishi mumkin

// CLASS TAMOYILLARI
    //   - encapsulation - bu class ning property va method larini private yoki protected qilib belgilash orqali ularni tashqaridan kirish mumkin emas qilish tamoyili
    //   - inheritance - bu class dan voris olish tamoyili, voris olgan class parent class ning property va method larini meros qilib oladi
    //   - polymorphism - bu class ning method larini override qilish tamoyili, voris olgan class parent class ning method larini o'zgartirib ishlatishi mumkin
    //  - abstraction - bu class ning faqat kerakli property va method larini tashqaridan ko'rsatish tamoyili, qolgan property va method larini yashirish tamoyili

// type User = {
//     readonly name: string,
//     age: number
// }

// let obj = {
//     name: "John",
//     age: 30
// }
// obj.age = 24
// obj.name = "Ali" // Error: Cannot assign to 'name' because it is a read-only property
// console.log(obj)

// Bular access modifiers (kirish modifikatorlari) — classda field yoki metodga kimlar kira olishini belgilaydi.

// Yuqorida jadval bilan tushuntirdim, qisqacha:

// public — hamma joydan: class ichidan, farzanddan, tashqaridan
// protected — faqat class ichidan va farzand classdan, tashqaridan yo'q
// private — faqat shu class ichidan, boshqa hech kim

// class User {
//     public name = "John"       // hamma ko'radi
//     protected email = "j@j.com" // faqat class + farzand
//     private password = "1234"   // faqat shu class
// }

// const u = new User()
// u.name      // ✅
// u.email     // ❌
// u.password  // ❌
// TypeScript darslarida hozircha ko'p ishlatmaysiz — class mavzusiga yetganda kerak bo'ladi.