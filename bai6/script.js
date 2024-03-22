// cach khai bao
const sinhvien = {
  ten: "nguyen van a",
  mssv: "pk001",
  dtb: 7.0,
  gioitinh: "nam",
}

// truy xuat gia tri

console.log(sinhvien.ten)
console.log(sinhvien["dtb"])

//duyet theo key & value

const keys = Object.keys(sinhvien)
const values = Object.values(sinhvien)
console.log("key", keys)
console.log("values", values)

// duyet  object
for (let i = 0; i < keys.length; i++) {
  console.log(`key = ${keys[i]} | value = ${values[i]}`)
}
//The For In Loop
for (let value in sinhvien) {
  console.log(`value = ${value}`)
}

// for (let key of sinhvien) {
//     console.log(`value = ${value}`);
//   }

;`
{
    "user": {
      "id": 1,
      "username": "john_doe",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "**********"
    }
  }

`
const ds_users = [
  {
    username: "admin",
    name: "admin",
    email: "admin@example.com",
    password: "123456",
    role: "admin",
  },
  {
    username: "user",
    name: "John Doe",
    email: "user@example.com",
    password: "123456",
    role: "user",
  },
]
/**
 * quản lý người dùng
 * in ds tai khoan
 *
 * xay dung chuc nang dang nhap
 * nếu đúng show quyền và thông tin hiện tại, sai báo tk or mật khẩu không đúng
 * thêm mới 1 tài khoản đk không được trùng username
 * cập nhật lại tài khoản dựa vào username
 * tìm kiếm 1 tài khoản dựa vào tên
 *  xóa 1 tài khoản
 */

function cau1() {
  for (let i = 0; i < ds_users.length; i++) {
    console.log(`${ds_users[i].username}`)
    console.log(`${ds_users[i].id}`)
    console.log(`${ds_users[i].name}`)
    console.log(`${ds_users[i].email}`)
    console.log(`${ds_users[i].password}`)
    console.log(`${ds_users[i].role}`)
    console.log(`----------------------------`)
  }
}

function cau2(username, password) {
  console.log(`input ${username}| ${password}`)
  for (let i = 0; i < ds_users.length; i++) {
    if (ds_users[i].username == username && ds_users[i].password == password) {
      console.log("dang nhap thanh cong")
      console.log(`${ds_users[i].role}`)
      return
    } else {
      console.log("dang nhap khong thanh cong")
    }
  }
}
cau1()
cau2("admin", "123456")
//* thêm mới 1 tài khoản đk không được trùng username array.push()

function cau3() {
  new_sv = {
    id: 4,
    username: "Ythanh",
    name: "admin",
    email: "admin@example.com",
    password: "123456",
    role: "admin",
  }
  for (let i = 0; i < ds_users.length; i++) {
    if (ds_users[i].username == new_sv.username ) {
      console.log("Tai Da Ton Tai")
      console.log(`${ds_users[i].role}`)
      return
    } else {
        ds_users.push(new_sv)
    }
  }
}
// * cập nhật lại tài khoản dựa vào username
cau3()
cau1()

function cau4(username, name_moi) {
  for (let i = 0; i < ds_users.length; i++) {
    if (ds_users[i].username == username ) {
      console.log(`${ds_users[i].role}`) 
      console.log(`${ds_users[i].role}`)
      ds_users[i].name = name_moi
      return
    } else {
        ds_users.push(new_sv)
    }
  }
}
console.log('cau 4', ds_users.length)
cau4('admin', 'phuong')
cau1()
 
function handleSubmit() {
  alert("Submit")
  console.log("click here")
  // lay gia tri tu form

  const username= document.getElementById ("username").value
  const name= document.getElementById ("name").value
  const email= document.getElementById ("email").value
  const password= document.getElementById ("password").value
  const role= document.getElementById ("role").value
  const user= {username: username, name: name, email: email, password: password, role: role}
  console.log (user)
  if(ktUserTonTai(username)){
    alert("user da ton tai")
    return false
  }
  ds_users.push(user)
  createTable()
  alert ('them thanh cong')
  console.log ({username,name,email,password,role})
  return false
}

function ktUserTonTai(username) {

  for (let i = 0; i < ds_users.length; i++) {
    if (ds_users[i].username == username ) {
      console.log("Tai Da Ton Tai")
      console.log(`${ds_users[i].role}`)
      return true
    } 
  }
  return false
} 

function createTable(data = ds_users) {
  // loop array ds_users => render rows
  const users= document.getElementById ("customer-rows")
//   username.innerHTML = `<tr>
//   <td>123</td>
//   <td>3131</td>
//   <td>3131</td>
//   <td>31313</td>
//   <td>3131</td>
//   <td>Action</td>
// </tr>`
let rows ="";
for(let i = 0; i < data.length;i++){
  let item= `<tr>
  <td>${data[i].username}</td>
  <td>${data[i].name}</td>
  <td>${data[i].email}</td>
  <td>${data[i].password}</td>
  <td>${data[i].role}</td>
  <td>
    <button onclick="handleDelete('${data[i].username}')" class='delete'>Delete</button>
    <button class='edit' onclick="handleEdit('${data[i].username}')">edit</button>
  </td>
  
</tr>`
rows+=item;

}
users.innerHTML =rows

}
createTable();
function handleDelete(username) {

  //fruits.splice(2
  alert('delete clicked'+ username);
  let vt=-1;
  for(var i=0; i<ds_users.length; i++)
  {
    if(ds_users[i].username==username)
    {
      vt=i; 
      break
    }
  }
  if(vt!=-1)
  {
    ds_users.splice(vt, 1);
    console.log(ds_users);
    alert("xoa thanh cong")
  }
  else{
    alert("khong tim thay") 

  }
  createTable();

}


function handleEdit(username) {


  //fruits.splice(2
  alert('edit clicked'+ username);
  let vt=-1;
  for(var i=0; i<ds_users.length; i++)
  {
    if(ds_users[i].username==username)
    {
  document.getElementById ("username").value = ds_users[i].username;
  document.getElementById ("name").value = ds_users[i].name;
  document.getElementById ("email").value = ds_users[i].email;
  document.getElementById ("password").value = ds_users[i].password ;
  // document.getElementById ("role").value = ds_users[i].role;
  document.getElementById ("role").options[1].selected = 'selected'
      vt=i; 
      break
    }
  }
  //document.getElementById("nameofid").value = "My value";
  // if(vt!=-1)
  // {
  //   ds_users.splice(vt, 1);
  //   console.log(ds_users);
  //   alert("xoa thanh cong")
  // }
  // else{
  //   alert("khong tim thay") 

  // }
  createTable();

}
