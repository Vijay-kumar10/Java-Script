// var num= 10;
// var name  = "vijay";
// console.log(name);
// console.log(num);
// let name1 = "vijay";
// console.log(name1);

// price  = 99;
// console.log(price);

// name = 10;
// console.log(name);
// price = 100.0;
// console.log(typeof name);
// console.log(typeof price);

// const student = {
//     name : "Vijay",
//     age : 22,
//     cgpa : 7.5
// };

// console.log(student["name"]);
// console.log(student.name);
// console.log(student.age);
// student.age = student.age + 2;
// console.log(student.age);

const instagram = {
    name : "Vaijay Kumar",
    follower : 25,
    likes : 95,
    photos : 5,
    discription : "Software developer."
};
// console.log(typeof instagram["likes"]);


// let a = 2;
// let b = 5;
// console.log(a**b);
// console.log("a+b : ",(a+b));

// let a = 5;
// let b = "5";
// console.log(a < Number(b) && typeof a === typeof Number(b));

// let age = prompt("Enter your age : ");
// console.log(age >= 18 ? "adult" : "under age");


//loops in js
// let str = "my name is vijay kumar";
// let words = str.split(" ");
// for(let word of words){
//     console.log(word);
// }

// console.log(instagram["discription"]);
// //loop for object
// for(let key in instagram){
//     console.log(key," : ",instagram[key]);
// }

let obj = {
    type : "pen",
    price : 10
};
//without literals
// console.log("the price of ",obj.type," is : ",obj.price);

//suign literals
// console.log(`the price of ${obj.type} is : ${obj.price}`);

// let str = "My name is vijay kumar";
// console.log(str.trim());
// console.log(str.replace("name","home"));
// console.log(str.split(" "));


//Array start
// let arr = ["Vijay",10,"b.tech",25];
// let nums = [5,2,4,7,0,0,6,1,7,2,7,5];
// console.log(arr);
// nums.sort();
// console.log(nums);
// nums.pop(7);
// nums.pop(7);
// nums.push(8);
// nums.shift();
// nums.unshift(-1);
// console.log(nums);

// console.log(nums.slice(1,5));
// console.log(nums);

// console.log(arr.join("-"));


//array question 
// let arr = [250,350,450,650,750];
// console.log(arr);
// for(let i=0;i<arr.length;i++){
//     arr[i] = arr[i]*0.9;
// }
// console.log(arr);
// console.log(arr.toString());

// function started from here -----------------------------------------------------
// function hello() {
//   console.log("hello");
// }
// hello();

// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));

// function square(n){ 
//     return n*n;
// }
// console.log(square(10));

// const add = function(a,b){
//     return a*b;
// }
// console.log(add(10,5));

//arrow function
// const multiply = (a,b)=>{return a*b};
// console.log(multiply(10,10));

// const sq = n => n*n;
// console.log(sq(5));

//--------------------call back function --------------------
// let arr = [1,2,3,4,5];
// arr.forEach(function printValue(val) {
//   console.log(val);
// });

// let arr = ["Delhi","Mumbai","Panipat"]
// arr.forEach( (val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// });

//print the square of every numbe in array using foreach loop
// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val*val);
// });
//another way
// let calculateSquare = (val)=>{
//     console.log(val*val);
// };
// arr.forEach(calculateSquare);

//---------------array.map
// let arr = [1,2,3,4,5];
// let newArr = arr.map((val)=>{
//     return val*2;
// });
// console.log(newArr);


//---------------------reduce method
let arr = [1,2,3,4,5];
// let result = arr.reduce((prev,curr)=>{
//     return prev + curr;
// })
// console.log(result);

//return the greatest elment
// let big = arr.reduce((prev,curr)=>{
//     return prev > curr?prev : curr;
// })
// console.log(big);


// ----------------------------------------------------DOM START------------------------------

// alert("Hello ereryone")
// console.log("hello");
// window.console.log("hello2");

// console.dir(document.body.childNodes);
// let heading = document.getElementById("header");
// console.dir(heading);

// let heading2 = document.getElementsByClassName("heading2");
// console.dir(heading2);

// let parah = document.getElementsByTagName("p");
// console.dir(parah);

// Query selector start from here
// let parah1 = document.querySelector("p"); //give the first tag
// console.dir(parah1);

// let parahs = document.querySelectorAll("P");
// console.dir(parahs); 

// let btn = document.querySelector("#btn");
// console.dir(btn);


//advanced dom and access the attributes is start ----------------------------------------

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

//  let div = document.querySelector("div");
//  console.log(div);
//  div.style.backgroundColor = "red"; 


//----------------------------- insert elements-------------
// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!";

// let div = document.querySelector("div");
// div.append(newbtn);
// div.prepend(newbtn);
// div.before(newbtn);
// div.after(newbtn);

//delete the paragraph from code
// let parah = document.querySelector("p");
// parah.after(newbtn)
//delet the parah
// parah.remove();

// let btn1 = document.createElement("button");
// btn1.style.color = "white";
// btn1.innerText = "click me!";
// btn1.style.backgroundColor = "red";
// btn1.style.width = "100px";
// btn1.style.height = "20px";
// btn1.style.fontSize = "10px";
// btn1.style.fontWeight = "bold";
// document.body.append(btn1);

// //access the paragraph
// let parah = document.querySelector("p");
// parah.style.color = "red";

// parah.getAttribute("class")  


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = ()=>{
//     console.log("button was click");
// }
// btn2.ondblclick = ()=>{
//     console.log("button was click two times");
// }

let btn1 = document.querySelector("#btn1");

btn1.onclick = (e)=>{ 
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
}