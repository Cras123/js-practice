// async function happyNewYear(){
//     throw "404 page not found"
//     return "hello"
// }

// happyNewYear()
// .then ((result) => {
    
//     console.log("Promise was resolved");
//     console.log("result was:", result);
// })
// .catch((err) =>{
//     console.log("promise was rejected with err:",  err );
// } )

// let demo = () => {
//     return 5;
// };

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

// h1 = document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed!");

//         }, delay);
//     });
// }

// changeColor("green",1000)
// .then(() => {
//     console.log("red color was completed");
//     return changeColor("Orange", 1000);
// })
// .then (() => {
//     console.log("orange color was completed");
//     return changeColor("green",  1000);
// })
// .then (() => {
//     console.log("green color was completed");
//     return changeColor("blue",  1000);
// })
// .then (() => {
//     console.log("blue color was completed");
// });


// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//     changeColor("white", 1000);

// }


let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         return res.json();
//         })
   
//     .then((data) => {
//         console.log("data1 = ", data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data2 = ", data2.fact);
//     })
//     .catch ((err) => {
//         console.log("ERROR -", err);
//     });


async function getFacts() {
    try{
    let res =  await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 =  await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
    } catch(e) {
        console.log("bye")
    }
    console.log("bye")

}