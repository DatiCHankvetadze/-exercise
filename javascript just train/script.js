function changeWords(){
   let p1 = document.getElementById("p1");
   let p2 = document.getElementById("p2");
   let p3 = document.getElementById("p3");

    p1.textContent = p2.textContent;
    p2.textContent = p1.textContent;
    
}

// function math(num1,num2){
//     const sum = num1 + num2;
//     const gamravleba = num1 * num2
//     return sum,gamravleba
// }

// sum = math(3,7)
// gamravleba = math(3,5)
// console.log(sum)
// console.log(gamravleba)


const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const btn = document.getElementById("button");

function getValues(){
    console.log(nameInput.value);
    console.log(emailInput.value);
}


