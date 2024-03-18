// khai bao mang
const sv_dtb = [5, 5, 6.6, 7, 7.5, 4, 4, 2, 1]
// tinh do dai cua mang
console.log(sv_dtb.length)
// set lai index 4 => 9
sv_dtb[4]=9;
// lay gia tri index 4
console.log(sv_dtb[4]);
for(let i=0; i<sv_dtb.length; i++) {
    console.log(sv_dtb[i]);
}
sv_dtb.forEach(function(sv) {
    console.log(sv);
})

let mangsoNguyen =  [...Array(Number(100)).keys()]

 /**
   * yêu cầu nhập vào một số nếu ko phải số yêu cầu nhập lại
   * chỉ xuất ra giá trị chẵn mảng  
   * chỉ in lẻ mảng
   * in ra các số chia hết cho 3 và 5 mảng
   * tính tổng của mảng
   * tinh trung bình công mảng
   * in ra số chính phương mảng
   * in ra số nguyên tố mảng
   * * in ra số hoàn hảo mảng
   * nhập vào 2 số a và b in ra giá trị trong khoảng [a,b]
   * đếm số phần tử chẵn trong mảng
   * đếm số phần tử lẻ trong mảng hay không
   * sắp xếp tăng dần
   * sắp xếp giảm dần
   */
  //so chan
  function chan() {
    //let sochan = mangsoNguyen.filter ( so => so % 2  == 0);
    //console.log ( sochan);
    for (let i = 0; i < mangsoNguyen.length; i++){
        if (i % 2 == 0){
            console.log ("So chan la: " + i);
        }
    }
  }
chan();
function bai3(){
    console.log("cac so chia het cho 3 va 5 trong mang la ")
    for(let i = 0; i < mangsoNguyen.length; i++){
        if(mangsoNguyen[i]%3==0 && mangsoNguyen[i]%5==0){
            console.log(mangsoNguyen[i])
        }
    }
}
bai3();
function tinhtong(){
    let tong = 0;
    console.log("tong cac so trong mang la :")
    for(let i=0 ; i< mangsoNguyen.length ; i++){
        tong += mangsoNguyen[i];
        
    }
     let trungbinhcong = tong / mangsoNguyen.length;
    console.log(tong)
    console.log(`trung binh cong cua mang la: ${trungbinhcong}`);
}
tinhtong();
function soChinhPhuong(x){  
    if (Math.sqrt(x) == parseInt(Math.sqrt(x))){
    return true;
    } else {
        return false; 
    }

}
for(let i=1 ; i< mangsoNguyen.length ; i++){
  if (soChinhPhuong(mangsoNguyen[i]) ){
 console.log(`${mangsoNguyen[i]} la so chi phuong`)
  }
  
    
}
