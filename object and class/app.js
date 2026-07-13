const student = {
    name : "Vijay Kumar",
    rollNo : 2300,
    mobile : 74960,
    course : "B.tech",
    marks : 90,

    printMarks: function(){
        console.log("Marks = ",this.marks);
    }
}

const employee = {
    calcTax1() {
        console.log("Tax rate is 10%");
    },
    calcTax2 : function () {
        console.log("Tax rate is 20%");
    }
}

const karan = {
    salary : 10000,
    calcTax1() {
        console.log("Tax rate is 30%");
    }
}
karan.__proto__ = employee;

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
// console.log(fortuner);

//-----------callback start