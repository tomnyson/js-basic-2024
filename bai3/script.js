

// for 1 - 100
for(let i=0; i< 100; i++) {
    if(i %2 ==0) {
        console.log(`i = ${i}`)
    }
  
}
// while 
let j=0;
while(j<100){ //j<100 dk dung
    j++;
    console.log(`j = ${j}`);
}
// do while
let k=0;
do {
    console.log(k);
    k++;
}while (k<100)
/**
    * xây dựng vòng lặp chạy từ 0->100 và xuất ra giá trị
    *  in ra các giá trị lẻ
*/
for(let i=0; i<100; i++){
    if(i%2!=0){
        console.log(`i = ${i}`)
    }
}

/*

    *  in ra các giá trị lẻ và chia hết cho 5
*/
for (let i=0;i<100;i++){
    if(i%2!=0 && i%5==0){
        console.log(`i = ${i}`);
    }
}
/*
    *  in ra các giá trị là số chính phương
    *  in ra tổng các số chia hết cho 2 và 4
    *  in ra trung bình cộng các số chia hết cho 2 và 4

 */
// function kiemTraChinhPhuong(x){
//     if(Math.sqrt(x)== Math.floor(Math.sqrt(x))){
//         console.log("Chinh phuong")
//     }else{
//         console.log("KHong")
//     }
// }
// kiemTraChinhPhuong(16)
// kiemTraChinhPhuong(3)

    let h = 1;
    while(h <= 50){
        if(Math.sqrt(h)== Math.floor(Math.sqrt(h))){
            console.log(`h = ${h}`)
        }
        h++;
    }

    /**
     *  in ra tổng các số chia hết cho 2 và 4
     */
    let sum = 0;
    for(let i=0; i<100; i++){
        if(i%2==0&&i%4==0){
            sum += i;
        }
      
    }
    console.log(sum);

    /*
    *  in ra trung bình cộng các số chia hết cho 2 và 4
     */
    let tong = 0;
    let dem = 0;
    for(let i=0; i<=100; i++){
        if(i%2==0 && i%4==0){
            tong+=i;
            dem ++;
        }
    }
    let tbc=tong/dem;
    console.log(tbc);

    /**
     * đầu vào nhập từ form x, y, x> y 1-> 100
     * Tính giai thừa của một số: Viết một chương trình JavaScript 
     * để tính giai thừa của một số nguyên dương nhập từ người dùng.
        Kiểm tra một số có phải là số nguyên tố hay không:
        Viết một chương trình JavaScript để kiểm tra xem một số có phải là số nguyên tố hay không, 
         với số được nhập từ người dùng.
    In bảng cửu chương: Viết một chương trình JavaScript để in ra bảng cửu chương từ 1 đến 10.
     */
    function bai1(){
        console.log("bai1");
    }

    function bai2(){
        console.log("bai2");
    }

    function bai3(){
        console.log("bai3");
        const sothu1 = document.getElementById("sothu1").value;
        const sothu2 = document.getElementById("sothu2").value;
        let row ="";
        for (let i = Number(sothu1); i < Number(sothu2);i++){   
            for (let j = 1; j <=10;j++){
                console.log(`${i}* ${j} = ${i*j}`);
        } 
       
           
    }
}


    function thucHienChucNang(){
        const chucnang = document.getElementById("chucnang").value;

        switch (chucnang){
            case "bai1":
                bai1()
                break;
            case "bai2":
                bai2()
                    break;
            case "bai3":
                bai3()
                break;
            default:
                console.log("vui long chon chuc nag")

        }
            

    }