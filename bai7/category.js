const currentUser = localStorage.getItem("user")
if(!currentUser) {
  window.location.href = "./login.html";
} else {
  const parseUser = JSON.parse(currentUser);
  document.getElementById("welcome").innerHTML= `Xin chào: ${parseUser.name}`
}
console.log("currentUser = ",currentUser);

// cach khai bai
function handleSubmit() {
  // lay gia tri tu form
  const btn_action = document.getElementById("btn_action").value
  const name = document.getElementById("name").value
  const category = {name}
  const data = getDataToStore();
  if (btn_action == "create") {
    if (ktNameTonTai(name)) {
      alert("name da ton tai")
      return false
    }
    data.push(category)
    // chuyen mang => string
    alert("them thanh cong")
  } else {
    document.getElementById("btn_action").value = "create"
    for (let i = 0; i < data.length; i++) {
      if (data[i].name == name){
        data[i] = category;
        alert("edit thanh cong")
        break;
      }
    }
  }
  document.getElementById("name").readOnly = false;
  setDataInStore("category", data)
  createTable()
  return false
}

function ktNameTonTai(name) {
  let data = getDataToStore()
  for (let i = 0; i < data.length; i++) {
    if (data[i].name == name) {
      console.log("Tai Da Ton Tai")
      console.log(`${data[i].role}`)
      return true
    }
  }
  return false
}

  // lay du lieu tu localstorage
  function getDataToStore() {
    try {
      let data = []
      if(localStorage.getItem("category")) {
        data = JSON.parse(localStorage.getItem("category"))
      }
      return data
    } catch (e) {
      throw new Error("Couldn't get data from store");
    }

  }
//luu du lieu tu vao localstorage key, value
function setDataInStore(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data))
    return true
  } catch (e) {
    console.error(e)
    return false
  }

}


function createTable() {
  
  // loop array ds_users => render rows
  const data = getDataToStore();
  const users = document.getElementById("customer-rows")
  let rows = ""
  for (let i = 0; i < data.length; i++) {
    let item = `<tr>
  
  <td>${data[i].name}</td>
  
  
  
  <td>
  <i class="bi bi-pencil action-icon" style='action-icon' onclick="handleEdit('${data[i].name}')"></i>
  <i class="bi bi-x action-icon" onclick="handleDelete('${data[i].name}')"></i>
  </td>
  
</tr>`
    rows += item
  }
  users.innerHTML = rows
}
createTable()
function handleDelete(name) {
  let text = "bạn có muốn xóa: " + name;
  if (confirm(text) == true) {
    let vt = -1
  let data = getDataToStore();
  for (var i = 0; i < data.length; i++) {
    if (data[i].name == name) {
      vt = i
      break
    }
  }
  if (vt != -1) {
    data.splice(vt, 1)
    setDataInStore("category", data)
  } else {
    alert("khong tim thay")
  }
  createTable()
  }

  
}

function handleEdit(username) {
  //fruits.splice(2
  alert("edit clicked" + username)
  let vt = -1
  
  for (var i = 0; i < ds_users.length; i++) {
    if (ds_users[i].username == username) {
      document.getElementById("username").value = ds_users[i].username
      document.getElementById("username").readOnly = true;
      document.getElementById("name").value = ds_users[i].name
      document.getElementById("email").value = ds_users[i].email
      document.getElementById("password").value = ds_users[i].password
      // document.getElementById ("role").value = ds_users[i].role;
      document.getElementById("role").options[1].selected = "selected"
      vt = i
      break
    }

  }
  document.getElementById("btn_action").value = "edit"

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
  createTable()
}
function logout() {
 localStorage.removeItem("user");
 alert("logout thanh cong");
 window.location.href = "./login.html";
}

