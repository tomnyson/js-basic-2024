// alert("hello world!");

// khai báo biến let or var
// let so1 = 1;
// let so2 = 1.2;
// let ten= "Lê Hồng Sơn";
// var dungsai = true;

// console.log("so1", so1);
// console.log("so1", so2);
// console.log("ten", ten);
// console.log("dungsai", dungsai);
// // hằng số || những biến ko đổi giá trị
// // const dtb = 8.5;
// // dtb = 8.5 + 1;
// // console.log("dtb", dtb);
// document.write("<h1>" + ten + "</h1>");
// document.getElementById("ten").innerHTML = ten;

// bai 2
let a = 3;
let b = '3';
/* so hoc: + - * / % */
console.log(`${a} + ${b} = `, a +b);
console.log(`${a} - ${b} = `, a - b);
console.log(`${a} * ${b} = `, a * b);
console.log(`${a} / ${b} = `, a / b);
console.log(`${a} % ${b} = `, a % b);
/* so sánh 
 <, > >=, <=, ==
*/ 
console.log(`${a}> ${b}=`,a>b);
console.log(`${a}< ${b} =`,a<b);
console.log(`${a}>= ${b}= `, a>=b);
console.log(`${a}<= ${b} =`, a>=b);
console.log(`${a}=== ${b} =`,a===b);

const biethuA = (3 + 5) > 3;
const biethuB = (2 + 5) <9;
/** && => AND, || => OR, ! => NOT */
console.log(`${biethuA}&&${biethuB}`,biethuA&&biethuB);
console.log(`${biethuA}||${biethuB}`,biethuA||biethuB);
console.log(`${biethuA}!${biethuB}`,biethuA);

function showThongBao() {
    const sothu1 = document.getElementById("sothu1").value;
    // ep kieu string to number
    const sothu2 = document.getElementById("sothu2").value;
    const cong = Number(sothu1) + Number(sothu2);
    console.log("cong: " + cong);
    document.getElementById("ketqua").innerHTML = `kết quả là: ${cong}`;
}