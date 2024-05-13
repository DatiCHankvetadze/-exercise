function changeborder(){
    const h1 = document.getElementById("h1")
    h1.style.color = "green"
    h1.style.border = "solid"
    h1.style.width = "200px"
}

const car = {
    model: "glc",
    brand: "mercedes",
    created: 2018
}

console.log(car)

car.model = "s class"
console.log(car)

function names(name1,name2){
    const name3 = name1 + name2;
    return name3
}

name3 = names("dati ","chankvetadze")

console.log(name3)


function math(nam1,nam2){
    const sum = nam1 + nam2;
    return sum 
}

console.log(math(3,2))


function p(){

 const p1 = document.getElementById("p1");

 const p2 = document.getElementById("p2");

 const p3 = document.getElementById("p3");
}


function pnames(){
    
    p1.textContent = p2.textContent;
    p2.textContent = p3.textContent;
    p3.textContent = p1.textContent;

}