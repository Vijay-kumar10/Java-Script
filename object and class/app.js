// const student = {
//     name : "Vijay Kumar",
//     rollNo : 2300,
//     mobile : 74960,
//     course : "B.tech",
//     marks : 90,

//     printMarks: function(){
//         console.log("Marks = ",this.marks);
//     }
// }

// const employee = {
//     calcTax1() {
//         console.log("Tax rate is 10%");
//     },
//     calcTax2 : function () {
//         console.log("Tax rate is 20%");
//     }
// }

// const karan = {
//     salary : 10000,
//     calcTax1() {
//         console.log("Tax rate is 30%");
//     }
// }
// karan.__proto__ = employee;

//---------------class and object -------------
// class ToyotaCar{
//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("Start");
//     }
// }
// let fortuner = new ToyotaCar();

// //-----------callback start

// function sum(a,b){
//     console.log("sum of a and b : ",a+b);
// }

// function product(a,b){
//     console.log("product of a and b : ",a*b);
// }

// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b);
// }

// calculator(5,2,sum);
// calculator(5,2,product);

// // callback hello function
// const hello = ()=>{
//     console.log("Hello is am ececuted after 3 minutes");
// }
// setTimeout(hello,3000);

//call backhell is a problem

// function getData(dataId){
//     setTimeout(() => {
//         console.log("Data is occur : ",dataId);
//     }, 2000);
// }
//this 3 function give the output at the same time becouse of syncronization os modyfiy this function
// getData(1);
// getData(2);
// getData(3);

// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("Data is occur : ",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// //call-back is generated 
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// });

// //Promises is occur to solve this call back hell problem
// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise.");
//     // resolve("success");
//     reject("some error occured !! ")
// })
// console.log(promise);

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log("Data is occur : ",dataId);
        resolve("success");
        if(getNextData){
            getNextData();
        }
    }, 5000); 
    });
}
let result = getData(123);
console.log(result);


