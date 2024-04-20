// let btn = document.querySelector("button");
// let div = document.querySelector("div");
// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
 
//     h3.innerText = randomColor();
//     console.log("color updated")

//     div.style.backgroundColor= randomColor();
    
// })



// function randomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);


// let color = `rgb(${red}, ${green}, ${blue})`;
// return color;
// };



// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass= document.querySelector("#pass");
   
//     console.log(user.value);
//     console.log(pass.value);
    
// } );



// let user = document.querySelector("#user");
// user. addEventListener("change",function(){
//     console.log("input changed");
//     console.log("final value=", this.value);
// });
// let para = document.createElement("p");
let button = document.querySelector('button');
// let fo = document.querySelector("form");
// window.addEventListener("load",function(){
//     console.log("hello world");
    
    
    
// });

let para = document.createElement("p");
para.innerText = "click me";
button.append(para);