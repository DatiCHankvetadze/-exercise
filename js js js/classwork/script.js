function num(num1, num2){
    const sum= num1 + num2
    return sum
}

sum = num(5,6)
console.log(sum)


function number(num1, num2){
    const sum1 = num1 - num2
    return sum1
}

sum1 = number(2,4)
console.log(sum1)


function info(name1, name2){
    const fullname = name1 + " " + name2
    return fullname
}

fullname = info("dati", "chankvetadze")
console.log(fullname)

const car = {
    brand: "s class",
    name: "mercedes",
    created: 1800
}

console.log(car)

car.created = 2018

console.log(car)


function changeborder(){
    const h1 = document.getElementById("h1");
    h1.style.color = "green"
    h1.style.border = "dotted"
    h1.style.width = "180px"
}