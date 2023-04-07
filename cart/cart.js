let cart = JSON.parse(localStorage.getItem("Add")) || [];
let loggedin = JSON.parse(localStorage.getItem("loggedin"))||""
if(loggedin.length==0){
  location.href='/login_authentication/login.html'
}
else{
  document.getElementById("changeimg").src='/landing_page/Utiles/logout.jpg'
    document.getElementById("changeimg").addEventListener("click", function(){
        localStorage.removeItem('loggedin');
        alert("Your are logged out")
       window.location.reload();
    })
}
// cart=[
//   {
//     "image-container href": "https://www.catherines.com/products/masquerade-beaded-dress-set/1051848.html?cgid=CA_Dresses&dwvar_1051848_color=4368295",
//     "tile-image src": "https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36b/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dwbed59ec5/images/hi-res/2603_25718_mc_0324.jpg?colorid=4368295&sw=240&sh=346&sm=fit&yocs=j_m_",
//     "p-image-rollover src": "https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36b/on/demandware.static/Sites-oss-Site/-/default/dwb0f5965e/images/loading.png?yocs=j_",
//     "text_product_badge": "Best Seller",
//     "link href": "https://www.catherines.com/products/masquerade-beaded-dress-set/1051848.html?cgid=CA_Dresses&dwvar_1051848_color=4368295",
//     "sr-only": "4.3 out of 5 Customer Rating",
//     "hide": "SFCC",
//     "text-sale": "Limited Time Price!",
//     "price-curreny-symbol": "₹",
//     "price-currency-text": 11200,
//     "price-cents-text": "00",
//     "plp-save-message": "—  Save $49.96",
//     "link": "Masquerade Beaded Dress Set",
//     "link href 2": "https://www.catherines.com/products/masquerade-beaded-dress-set/1051848.html?cgid=CA_Dresses&dwvar_1051848_color=4368295",
//     "sr-only 2": "mariner navy",
//     "sr-only 3": "black",
//     "sr-only 4": "rose",
//     "sr-only 5": "grey",
//     "sr-only 6": "victoria purple",
//     "sr-only 7": "",
//     "small": "",
//     "text-capitalize": "",
//     "quantity":1
//   },
//   {
//     "image-container href": "https://www.catherines.com/products/3-piece-lace-gala-pant-suit/1051862.html?cgid=CA_Dresses&dwvar_1051862_color=4367385",
//     "tile-image src": "https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36b/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dwc5f52729/images/hi-res/2603_25747_mc_0435.jpg?colorid=4367385&sw=360&sh=519&sm=fit&yocs=j_m_",
//     "p-image-rollover src": "https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36b/on/demandware.static/Sites-oss-Site/-/default/dwb0f5965e/images/loading.png?yocs=j_",
//     "text_product_badge": "Best Seller",
//     "link href": "https://www.catherines.com/products/3-piece-lace-gala-pant-suit/1051862.html?cgid=CA_Dresses&dwvar_1051862_color=4367385",
//     "sr-only": "4.3 out of 5 Customer Rating",
//     "hide": "SFCC",
//     "text-sale": "Limited Time Price!",
//     "price-curreny-symbol": "₹",
//     "price-currency-text": 11200,
//     "price-cents-text": "00",
//     "plp-save-message": "—  Save $49.96",
//     "link": "3-Piece Lace Gala Pant Suit",
//     "link href 2": "https://www.catherines.com/products/3-piece-lace-gala-pant-suit/1051862.html?cgid=CA_Dresses&dwvar_1051862_color=4367385",
//     "sr-only 2": "chai latte",
//     "sr-only 3": "mariner navy",
//     "sr-only 4": "heirloom lilac",
//     "sr-only 5": "black",
//     "sr-only 6": "sage",
//     "sr-only 7": "",
//     "small": "",
//     "text-capitalize": "",
//     "quantity":1
//   },
//   {
//     "image-container href": "https://www.catherines.com/products/strawbridge-fit-and-flare-dress/1063660.html?cgid=CA_Dresses&dwvar_1063660_color=4438414",
//     "tile-image src": "https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36b/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dwa1b6a12d/images/hi-res/2605_36002_mc_0624.jpg?colorid=4438414&sw=240&sh=346&sm=fit&yocs=j_m_",
//     "p-image-rollover src": "https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36b/on/demandware.static/Sites-oss-Site/-/default/dwb0f5965e/images/loading.png?yocs=j_",
//     "text_product_badge": "",
//     "link href": "https://www.catherines.com/products/strawbridge-fit-and-flare-dress/1063660.html?cgid=CA_Dresses&dwvar_1063660_color=4438414",
//     "sr-only": "3.3 out of 5 Customer Rating",
//     "hide": "SFCC",
//     "text-sale": "Limited Time Price!",
//     "price-curreny-symbol": "₹",
//     "price-currency-text": 5600,
//     "price-cents-text": "00",
//     "plp-save-message": "—  Save $14.96",
//     "link": "Strawbridge Fit & Flare Dress",
//     "link href 2": "https://www.catherines.com/products/strawbridge-fit-and-flare-dress/1063660.html?cgid=CA_Dresses&dwvar_1063660_color=4438414",
//     "sr-only 2": "vibrant turq outlined paisley",
//     "sr-only 3": "black floral",
//     "sr-only 4": "navy",
//     "sr-only 5": "animal print",
//     "sr-only 6": "classic animal neutral",
//     "sr-only 7": "",
//     "small": "",
//     "text-capitalize": "",
//     "quantity":1
//   }
// ]
function displaydata(cart) {
  document.querySelector("#items").innerHTML=null
  let sum=0;
 cart.map((el,i)=>{
  let cartrow = document.createElement("div");
  cartrow.setAttribute("class", "cartItem row align-items-start");
  let imgbox = document.createElement("div");
  imgbox.setAttribute("class", "col-2 mb-2");
  let img = document.createElement("img");
  img.setAttribute("class", "w-100");
  let descbox = document.createElement("div");
  descbox.setAttribute("class", "col-5 mb-2");
  let name = document.createElement("h6");
  let desc = document.createElement("p");
  desc.setAttribute("class", "pl-1 mb-0");
  let quantitybox = document.createElement("div");
  quantitybox.setAttribute("class", "col-2 quantity");
  let increment = document.createElement("button");
  increment.setAttribute("id", "increment");
  increment.textContent = "+";
  increment.addEventListener("click", function () {
    el.quantity++;
    localStorage.setItem("Add", JSON.stringify(cart))
    displaydata(cart)
    
  });
  let quantity = document.createElement("p");
  quantity.setAttribute("class", "cartItemQuantity p-1 text-center");
  let decrement = document.createElement("button");
  decrement.setAttribute("id", "decrement");
  decrement.textContent = "-";
  decrement.addEventListener("click", function () {
    if (el.quantity != 1) {
      el.quantity--;
      localStorage.setItem("Add", JSON.stringify(cart))
      displaydata(cart)
      
    }
  });
  let pricebox = document.createElement("div");
  pricebox.setAttribute("class", "col-2");
  let price = document.createElement("p");
  price.setAttribute("id", "cartItemPrice");
  let removebox = document.createElement("div");
  removebox.setAttribute("class", "col-1");

  removebox.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  removebox.addEventListener("click", function () {
    removeitem(i);
  });

  img.src =el["tile-image src"]
  imgbox.append(img);
  name.textContent = el.link;
  desc.textContent = "";
  descbox.append(name, desc);

  quantity.textContent = el.quantity;
  quantitybox.append(increment, quantity, decrement);
  
  price.textContent = `₹ ${el["price-currency-text"]}`;

  pricebox.append(price);

  cartrow.append(imgbox, descbox, quantitybox, pricebox, removebox);
  let hr = document.createElement("hr");
  document.querySelector("#items").append(cartrow,hr);
  sum+=Number(el["price-currency-text"])*Number(el.quantity)

 })
  document.getElementById("subtotal").innerText=`₹ ${sum}`;
  document.getElementById("tax").innerText=`₹ ${sum*0.18}`;
  document.getElementById("total").innerText=`₹ ${sum+sum*0.18}`
}

displaydata(cart);

function removeitem(i) {
  cart.splice(i, 1);
  localStorage.setItem("Add", JSON.stringify(cart));
  displaydata(cart);
}


