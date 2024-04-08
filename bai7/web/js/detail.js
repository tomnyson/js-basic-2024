
// cach khai bai
const urlParams = new URLSearchParams(window.location.search);
const tensp = urlParams.get('id');
  // lay du lieu tu localstorage
  function getDataToStore() {
    try {
      let data = []
      if(localStorage.getItem("products")) {
        data = JSON.parse(localStorage.getItem("products"))
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


function createProductList() {
  
  // loop array ds_users => render rows
  const data = getDataToStore();
  const users = document.getElementById("productList")
  let rows = ""
  for (let i = 0; i < data.length; i++) {
    console.log('tensp',tensp)
    console.log('data[i].tensanpham',data[i].tensanpham)
    if(data[i].tensanpham === tensp) {
      let item = `<div class="col mb-5">
      <div class="card h-100">
        <!-- Product image-->
        <img
          class="card-img-top"
          src="${data[i].hinhanh}"
          alt="..."
        />
        <!-- Product details-->
        <div class="card-body p-4">
          <div class="text-center">
            <!-- Product name-->
            <a href="detail.html?id=${data[i].tensanpham}"><h5 class="fw-bolder">${data[i].tensanpham}</h5></a>
            <!-- Product price-->
            ${data[i].giasanpham}
            <p>${data[i].mota}</p>
          </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <a class="btn btn-outline-dark mt-auto" href="#">View options</a>
          </div>
        </div>
      </div>
    </div>`
      rows += item
    }
   
  }
  users.innerHTML = rows
}
createProductList()

