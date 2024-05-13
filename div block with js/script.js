// let p = document.getElementById("p");
// let text = document.getElementById("text").Value;
// let color = document.getElementById("color").Value;

// function changeP(){
//     p.textContent = text
//     p.style.color = color
// };




function make(){
    let div = document.getElementById("div1");
    let color_div = document.getElementById("color1").value;
    let height_div = document.getElementById("height1").value;
    let width_div = document.getElementById("width1").value;

    div.style.backgroundColor = color_div;
    div.style.height = height_div + "px";
    div.style.width = width_div + "px";
}