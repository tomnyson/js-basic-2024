function bai4() {
    const sothu1 = document.getElementById("sothu1").value;
    // ep kieu string to number
    const sothu2 = document.getElementById("sothu2").value;
    const cong = Number(sothu1) + Number(sothu2);
    console.log("cong: " + cong);
    document.getElementById("ketqua").innerHTML = `kết quả là: ${cong}`;
}

const sothu1 = 3;
// kiem tra 1 so nhap vao co phai la so chan ko?

if(sothu1 % 2 == 0 ) {
    console.log(`sothu1: ${sothu1} la so chan`);
} else {
    console.log(`sothu1: ${sothu1} la so le`);
}
// kiem tra 1 so co chia het cho 2 va chia het cho 4 hay khong ?
function bai1(){
    const sothu2 = document.getElementById("sothu1").value;
    let ketqua = ""
    if(isNaN(sothu2)) {
        ketqua = "Nhập vào 1 số hợp lệ"
    }
    else if (sothu2 % 2 == 0 && sothu2 % 4 == 0) {
        ketqua = "sothu2 chia het cho 2 va 4";
    }else {
        ketqua = "sothu2 khong chia het cho 2 va 4";
    }
    document.getElementById("ketqua").innerHTML = ketqua;
}

// kiem tra 1 co chia het cho 2 or chia het cho 5 hay khong
function bai2(){
    const sothu2 = document.getElementById("sothu1").value;
    let ketqua = ""
    if(isNaN(sothu2)) {
        ketqua = "Nhập vào 1 số hợp lệ"
    }
    else if (sothu2 % 2 == 0 || sothu2 % 5 == 0) {
        ketqua = "sothu2 chia het cho 2 va 5";
    }else {
        ketqua = "sothu2 khong chia het cho 2 va 5";
    }
    document.getElementById("ketqua").innerHTML = ketqua;
    
}
// xep loai sv dtb bắt buộc từ 0 -> 10
// yeu< 5, tb>=5, kha >=6.5, gioi >=8
function bai3(){
    const dtb = 10;
    if (dtb < 0 || dtb > 10){
        console.log("Lỗi");
   
    }else if(dtb < 5){
        console.log("Hoc sinh yeu");
    }else if(dtb >= 5 && dtb < 6.5){
        console.log("Hoc sinh trung binh");
    }else if(dtb >= 6.5 && dtb < 8){
        console.log("Hoc sinh kha");
    }if (dtb >= 8 && dtb <= 10){
        console.log("Hoc sinh gioi");
    }
    }
// bai3()

function thucHienChucNang() {
    const chucnang = document.getElementById("chucnang").value;
    console.log(chucnang);
    switch (chucnang){
        case "bai1":
            console.log ("bai1");
            bai1();
            break;
        case "bai2":
            console.log ("bai2");
            bai2 ();
            break;
        case "bai3":
            console.log("bai3");
            bai3 ();
            break;
        case "bai4":
            console.log ("bai 4");
            break;
        default:
            console.log ("lua chon sai");


    }
}