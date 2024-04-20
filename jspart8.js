// let arr = [1,2,3,4,5]




// arr.forEach((el) => {
//     console.log(el);
// });
// arr.forEach(function(el){
//     console.log(el);
// });

// let print =  function(el){
//     console.log(el);
// };

// arr.forEach(print);


// let arr = [
//     {
//     name: "aman",
//     marks:98,
//     },
//     {
//     name: "sirash",
//     marks: 100,
//     },
//     {
//     name: "Sijan",
//     marks: 20,
//     }
// ];

// arr.forEach((student)=>{
//     console.log(student.marks);
// });


// let gpa = arr.map((el) =>{
    
//     return el.marks / 10;
// }
// );

// let num=[1,2,3,4];

// let double = num.map((el) => {
//     return el*2;
// });


// let num = [1,3,4,5,6,77,7,];

// let ans = num.filter((el)=>(el % 2 == 0))


// let nums =[1,2,3,4];
// let finalVal = nums.reduce((res,el) => {

// console.log(res);
// return res+el;
// });

// let arr = [1,5,6,7,3,54,64,33,54,45]

// let max = arr.reduce((max, el) => {
//     if (max < el) {
//         return el;
//     } else {
//         return max;
//     }
// })


// let nums = [10, 20 , 3 ,40];

// let ans = nums.filter((el) => el % 10 == 0)

// let arr = [34,43,3];


// function getMins(nums){
//     let min = arr.reduce((min, el) => {
//         if (min < el){
//             return min;
//         } else {
//             return el;
//         }
//     });

//     return min;
// }
// console.log(getMins(arr));
// let min = getMins(arr);
// console.log(arr.indexOf(min));



// function sum(...args){
//     for (let i = 0; i < args.length; i++){
//         console.log("you gave us : ", args[i]);
//     }
// };

// function min(){
//     console.log(arguments
//     )
// }

// arr= ["sirqa","se"]

// console.log(...arr[1]);


// let names = ["tony", "hard", "steve","hardy","sirash"]

// let [winner,level, ...friend] = names



// const student={
//     name: Soraj,
//     age: 18,
//     city: Sydney,
//     username : maharjansirash1gmailcom,
//     password : sirash123,

// }

// let {username:user,  password:pass}= student;



// const doubleAndReturnArgs = ( arr,...args) => [
//     ...arr,
//     ...args.map((el)=>(2*el)),
// ];

// console.log(doubleAndReturnArgs([1,2,3],2,3));


mergeObjects=(obj1,obj2) => ({...obj1,...obj2});























