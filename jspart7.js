// const sum = (a, b) => (a+b);
// sum(4,6);

// // const cube=  (a) =>{
// //     console.log(a*a*a);
// // };

// // cube(5);


// // const power=(a,n) => {
// //     return a ** n;
// // };

// // power(2,3);

// const hel= () =>{
//     console.log("hello")
// }
// hel();

// const mul = (a,b)=> (a*b);

// console.log("hi there")
// setTimeout(() => {
//     console.log("sirash hai");
// }, 4000);

// console.log("hi there")
// let id=setInterval(() => {
//     console.log("sirash hai");
// }, 4000);

// console.log(id);



// let id2=setInterval(() => {
//     console.log("lala sirash");
// }, 4000);
// console.log(id2);


// const student = {
//     name: "sirash",
//     marks: 95,
//     prop: this, //global scope
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks: ()=>{
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1: function(){
//         setTimeout( ()=>{
//             console.log(this);
//         },2000);
//     },
//     getInfo2: function(){
//         setTimeout( function() {
//             console.log(this);
//         },2000);
//     },
// };


// const square = (n)=>(n*n);
// console.log(square(2));

// console.log("hello")

// setTimeout(() => {

// })


// let id = setInterval(()=>{
// console.log("hello world")
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("clear the last one")
// },10000) 


// const arrayAverage = (arr)=> {
//     let tot=0;
//     for (let array of arr){
//         tot=array+tot;

//     }
//     avg=tot/arr.length;
//     return avg;
// };
// let arr=[1,2,3];
// console.log(arrayAverage(arr));

// let a =5;
// const iseven = num => num % 2 == 0;

// console.log(iseven(a));
let length = 4;
function callback(){
    console.log(this.length);
}
const object = {
    length : 5,
    method (callback){  
        callback();


    },
}
object.method(callback,1,2);