function math(num1,num2){
    const multiply = num1 * num2
    return multiply
}

multiply = math(2,3)
console.log(multiply)

function changeborder(){
    const h1 = document.getElementById("h1");
    h1.style.color = "red";
    h1.style.border = "solid";
    h1.style.width = "100px";
}

const bmw = {
    model: "s class",
    created: 2016,
    name: "bmw"
}

bmw.name = "bmw2"

console.log(bmw)


function fullname(name1,name2){
    const flname = name1 + " " + name2
    return flname
}

flname = fullname("dati","chankvetadze")

console.log(flname)

const myInfo = {
    name: "dati",
    lastName: "chankvetadze",
    age: 16
}

myInfo.age = 17

console.log(myInfo)


function secondborder(){
    const h2 = document.getElementById("h2");
    h2.style.color = "red";
    h2.style.border = "dotted";
    h2.style.width = "678px";
}
