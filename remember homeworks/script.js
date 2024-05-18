// // 1. math operation
// console.log(10 - 5)
// console.log(10 + 5)
// console.log(10 * 5)
// console.log(10 / 5)
// console.log(10 ** 2)

// // 2. boolean
// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 >= 5)
// console.log(10 <= 5)
// console.log(10 == 10)

// // 3. test alert
// // alert("error")

// // 4. num1 + num2
// // num1 = 10
// // num2 = 5
// // console.log(num1 + num2)

// // 5. let cvladebi
// let num1 = 10
// let num2 = 5

// console.log(num1 > num2)
// console.log(num1 < num2)
// console.log(num1 >= num2)
// console.log(num1 <= num2)
// console.log(num1 != num2)
// console.log(num1 == num2)

// // 6. about book
// // const page = 360
// // const name = "ikigai"

// // console.log("boon name is " + name + " and book has " + page + " page")

// // 7. registration form
// let name = "dati"
// let lastname = "chankvetadze"
// let age = 16
// let adress = "saburtalo"

// console.log("my name is " + name + " my lastname is " + lastname + " i am " + age + " years old" + " and my homes adress is " + adress)

// // 8. object
// const aboutMe = {
//     name: "dati",
//     lastname: "chankvetadze",
//     age: 16
// }

// aboutMe.lastname = "chankve"
// aboutMe.age = 17
// console.log(aboutMe)

// // 9. obejct for my family

// const mom = {
//     name: "mom",
//     lastname: "moms lstname",
//     age: "mom age"
// }

// console.log(mom)

// 10. same object ==
// const same = {
//     name: "any",
//     age: 16,
//     lastname: "any lastname"
// }

// const same = {
//     name: "dati",
//     age: 16,
//     lastname: "any lastname"
// }


// 11. switch p tags
// function switchTexts(){
//     const p1 = document.getElementById("p1");
//     const p2 = document.getElementById("p2");
//     const p3 = document.getElementById("p3");

//     p1.textContent = p2.textContent
//     p2.textContent = p3.textContent
//     p3.textContent = p1.textContent
// }


// // 12. plus minus reset
// function minus(){
//     const  pNum = document.getElementById("p_num")

//     pNum.textContent = 3
// }

// function plus(){
//     const pNUm = document.getElementById("p_num");

//     pNUm.textContent = 5
// }

// function reset(){
//     const pNUm = document.getElementById("p_num");

//     pNUm.textContent = 0
// }

// // 13. changeColor
// function changeColor1(){
//     const p1 = document.getElementById("pColor1");
//     const p2 = document.getElementById("pColor2");
//     const p3 = document.getElementById("pColor3");
    
//    p1.style.color = "green"
//    p2.style.color = "green"
//    p3.style.color = "green"
// }

// function changeColor2(){
//     const p1 = document.getElementById("pColor1");
//     const p2 = document.getElementById("pColor2");
//     const p3 = document.getElementById("pColor3");
    
//    p1.style.color = "blue"
//    p2.style.color = "blue"
//    p3.style.color = "blue"
// }

// function changeColor3(){
//     const p1 = document.getElementById("pColor1");
//     const p2 = document.getElementById("pColor2");
//     const p3 = document.getElementById("pColor3");
    
//    p1.style.color = "red"
//    p2.style.color = "red"
//    p3.style.color = "red"
// }

// // 14. car info
// const carInfo = {
//     brand: "mrc",
//     model: "glc",
//     year: "2024",
//     color: "black",
//     engine: 6.5,
//     fullnfo:  function fullInfo(){
//         const full = "car brand is " + carInfo.brand + " " + "model is " + carInfo.model + " " + "year is " + carInfo.year + " " + "car color is " + carInfo.color + " " + "engine " + carInfo.engine;
//         return full
//     }
// }

// console.log(carInfo)
// console.log(carInfo.fullnfo())

// // 15. calculator
// const calculator = {
//     plua: function plus(num1,num2){
//         const sum = num1 + num2;
//         return sum
//     },
//     minus: function minus(num1,num2){
//         const minus2 = num1 - num2;
//         return minus2
//     },
//     multiply: function multiply(num1,num2){
//         const multy = num1 * num2;
//         return multy
//     },
//     gayofa: function gayofa(num1,num2){
//         const gayofa2 = num1 / num2;
//         return gayofa2
//     }
// }

// console.log(calculator)

// 16. prompt
// let x = prompt("enter first number: ")
// let y = prompt("enter second number: ")

// function math(){
//    const plus = x + y
//    console.log(plus)
//    const minus = x - y
//    console.log(minus)
//    const multiply = x * y
//    console.log(multiply)
//    const gayofa = x / y
//    console.log(gayofa)
// }

// math()
    
// 17. inputs in console
// function output(){
    
//     const name = document.getElementById("input1").value;
//     const lastname = document.getElementById("input2").value;
//     const age = document.getElementById("input3").value;
//     const button = document.getElementById("but").value;

//     console.log(name)
//     console.log(lastname)
//     console.log(age)
// }

// function changeP(){
//     const txt= document.getElementById("text").value;
//     const color = document.getElementById("color").value;
//     const p = document.getElementById("pP")

//     p.textContent = txt;
//     p.style.color = color

// }


function makeDiv(){
    const height = document.getElementById("height").value;
    const width = document.getElementById("width").value;
    const text =  document.getElementById("txt").value;
    const color = document.getElementById("backcolor").value;
    const p = document.getElementById("Pp");
    const div = document.getElementById("div");

    div.style.height = height + "px";
    div.style.width = width + "px";
    div.style.backgroundColor = color
    p.textContent = text



}