// document.addEventListener("DOMContentLoaded", (event) => {
  function handleSubmit() {
    const username = document.getElementById("username").value
  
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const user = { username: username, name: name, email: email, password: password}
    let users = getDataToStore()
    if(!ktUserTonTai(username)) {
      users.push(user)
      setDataInStore("users", users) 
      alert("thêm thành công")

    } else {
      alert("tài khoản đã tồn tại")
    }
    return false;
  }

  function handleloginSubmit() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    // lay du lieu tu localstorage
    let users = getDataToStore()
    // kiem tra ton tai cua user username, password
    for(let i = 0 ; i < users.length ; i++){
      if(users[i].username == username && users[i].password == password){
        alert("dang nhap thanh cong ")
        // redirect to dashboard
        localStorage.setItem("user", JSON.stringify(users[i]))
        window.location.href = "./index.html";
        return false;
      } 
    }
      alert('tai khoan hoac mat khau khong ton tai')
  }
  
  function getDataToStore() {
    try {
      let data = []
      if(localStorage.getItem("users")) {
        data = JSON.parse(localStorage.getItem("users"))
      }
      return data
    } catch (e) {
      throw new Error("Couldn't get data from store");
    }
  
  }

  function setDataInStore(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data))
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  
  }

  function ktUserTonTai(username) {
    let data = getDataToStore()
    for (let i = 0; i < data.length; i++) {
      if (data[i].username == username) {
        console.log("Tai Da Ton Tai")
        console.log(`${data[i].role}`)
        return true
      }
    }
    return false
  }
  // handleSubmit()
  // });