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

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//        setTimeout(() => {
//         console.log("Data is occur : ",dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     }, 5000); 
//     });
// }
// let result = getData(123);
// console.log(result);

// const getPromise = ()=>{
//    return new Promise((resolve,reject)=>{
//         console.log("I am a promise.");
//         // resolve("success");
//         reject("Network error occur");
//     })
// };
// let promise  = getPromise();
// promise.then((res)=>{
//     console.log("Promise fulfilled successfully",res);
// })
// promise.catch((err)=>{
//     console.log("some error is occur during execution...!!",err);
// })

//------------promise chaining-------------
function asyncFun(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some data 1 occur.");
            resolve("success");
        }, 2000);
    });
}
function asyncFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some data 2 occur.");
            resolve("success");
        }, 2000);
    });
}
// console.log("Fetching data-1....");
// asyncFun().then((res)=>{
//     console.log("Request status : ",res);
//         console.log("Fetching data-2....");
//         asyncFun2().then((res)=>{
//             console.log("Request status : ",res);
//         })
// });


// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//        setTimeout(() => {
//         console.log("Data is occur : ",dataId);
//         resolve("success");

//     }, 3000); 
//     });
// }

//chaining start from here
// getData(1).then(()=>{
//     return getData(2);
// }).then(()=>{
//     return getData(3);
// }).then(()=>{
//     return getData(4);
// }).then((res)=>{
//     console.log(res);
// })

//---------------------Async-await funciton -------------
async function hello() {
    console.log("Hello");
}
hello();

// function api() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("weather data");
//         resolve(200)
//     }, 2000);
//   })
// }
// async function weatherData(){
//     await api();
//     await api();
//     await api();
// }
// weatherData();

function getData(dataId){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log("Data is occur : ",dataId);
        resolve("success");

    }, 2000); 
    });
}
// same thing do multiple call at same time
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}
getAllData();

//-----------implement the IIFE------------

(async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
})();




