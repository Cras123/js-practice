
h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");

        }, delay);
    });
}

changeColor("green",1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("Orange", 1000);
})
.then (() => {
    console.log("orange color was completed");
    return changeColor("green",  1000);
})
.then (() => {
    console.log("green color was completed");
    return changeColor("blue",  1000);
})
.then (() => {
    console.log("blue color was completed");
});
// savetoDb("Sirash Maharjan", 
// () => {
//     console.log("success: your data was saved");
//     savetoDb("hello world", 
//         ()=>{
//             console.log("success2:data was saved");
//             savetoDb("javaScript", () => {
//                 console.log("success3:your data is saved");

//             }, () => {
//                 console.log("failure3: weak connection");
//             });
//     }, () => {
//         console.log("failure2 : weak connection");
//     } );
// }, 
// () => {
//     console.log("failure: weak Connection. Data not saved");
// } );

// function savetoDb(data, ){
 
//    return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random()* 10 ) + 1;
//         if (internetSpeed > 4 ) {
//             resolve("success: Your data was saved");
//         } else{
//             reject("failure: weak connection");
//         }
//    } )
// }

// savetoDb("apanacollege")
//     .then((result) => {
//     console.log("data1 saved. promise was resolved");
//     console.log("result of promise: ", result);
//     return savetoDb("sirash Mahrjan")
//     })
//     .then((result) => {
//         console.log("data2 saved")
//         console.log("result of promise: ", result);
//         return savetoDb("hello world");
//     })
//     .then(() => {
//         console.log("data3 saved")
//         console.log("result of promise: ", result);
//     })

//     .catch((error) => {

//     console.log("promiose was rejected");
//     console.log("error of promise:",  error);
    

// }); 

