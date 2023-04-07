let loggedin = JSON.parse(localStorage.getItem("loggedin"))||"";
if(loggedin.length!=0){
    document.getElementById("changeimg").src='/landing_page/Utiles/logout.jpg'
    document.getElementById("changeimg").addEventListener("click", function(){
        localStorage.removeItem('loggedin');
        alert("Your are logged out")
       window.location.reload();
    })
}
else{
    document.getElementById("changeimg").addEventListener("click", function(){
       
        window.location.href='/login_authentication/login.html'
    })
}

// async function fetchApi(){
//     try{
//         let res = await fetch("")
//         let data = await res.json();
//         console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
   
// }
// fetchApi();


let data1=[]

var oXHR = new XMLHttpRequest();
oXHR.onreadystatechange = reportStatus;
oXHR.open("GET", "./csvjson.json", true); // get json file.
oXHR.send();
 let filterdata=[]; 
function reportStatus() {
  if (oXHR.readyState == 4) {
    // Check if request is complete.

    // Create an HTML table using response from server.
    let data = JSON.parse(this.responseText);
   

    localStorage.setItem("nil", JSON.stringify(data))
console.log(data)
    // data1=data.filter(e=>{
    //   e["price-currency-text"]
    // })

    data1= data;
    // filterdata=data
    show(data1)
  }
}

let fildata = document.getElementById("filter")

let pricef = document.getElementById("price-range")

data1 = JSON.parse(localStorage.getItem("nil"))||[];

let Add = JSON.parse(localStorage.getItem("Add"))||[];
let cont = document.getElementById("cont");
function show(data){
    cont.innerHTML = null;
    data.forEach((el,index)=>{

  let card = document.createElement("div");
  let img = document.createElement("img");
  let rating = document.createElement("p");
  rating.setAttribute("class","c1")
  let tag = document.createElement("p");

  let sym = document.createElement("span");
  let price = document.createElement("span");
  let des = document.createElement("p");
   let col = document.createElement("p")
  col.setAttribute("class","c1")

  let btn = document.createElement("button");
  btn.setAttribute("class","c2")
  img.src = el["tile-image src"]
  img.alt = "error"
  rating.innerText = el["sr-only"]
  tag.innerText = el["text-sale"];
  sym.textContent = el["price-curreny-symbol"];
  price.innerText = el["price-currency-text"];
  des.innerText = el["link"]
col.innerText =el["sr-only 5"]
btn.innerText = "Add To Bag"

btn.addEventListener("click",function(){
 
  let already=false;
  Add.map(el1=>{
    if(el1["image-container href"]==el["image-container href"]){
        already=true;
    }
  })
  if(already){
    alert('Product already in the bag')
  }
  else{
    el.quantity=1;
    Add.push(el)
  localStorage.setItem("Add",JSON.stringify(Add))
  console.log(Add)
  alert("Product added successfully")
  }
})

  card.append(img,rating,tag,sym,price,des,col,btn);

  cont.append(card)
    })

    document.getElementById("total").innerHTML = data1.length;
}

// show(data1)










// let cont = document.getElementById("cont");
// function show(data){
//     cont.innerHTML = null;
//     data.forEach((el,index)=>{

//   let card = document.createElement("div");
//   let img = document.createElement("img");
//   let rating = document.createElement("p");
//   let tag = document.createElement("p");

//   let sym = document.createElement("span");
//   let price = document.createElement("span");
//   let des = document.createElement("p");

//   img.src = el["tile-image src"]
//   img.alt = "error"
//   rating.innerText = el["sr-only"]
//   tag.innerText = el["text-sale"];
//   sym.textContent = el["price-curreny-symbol"];
//   price.innerText = el["price-currency-text"];
//   des.innerText = el["link"]

//   card.append(img,rating,tag,sym,price,des);

//   cont.append(card)
//     })
// }


// let cont = document.getElementById("cont");

// function show(data, sortProperty, sortOrder) {
//   cont.innerHTML = null;
  
//   // Filter the data based on the specified sorting direction
//   let filteredData = data.filter(el => el[sortProperty]);
//   if (sortOrder === "high-to-low") {
//     filteredData.sort((a, b) => b[sortProperty] - a[sortProperty]);
//   } else if (sortOrder === "low-to-high") {
//     filteredData.sort((a, b) => a[sortProperty] - b[sortProperty]);
//   }

//   filteredData.forEach((el, index) => {
//     let card = document.createElement("div");
//     let img = document.createElement("img");
//     let rating = document.createElement("p");
//     let tag = document.createElement("p");
//     let sym = document.createElement("span");
//     let price = document.createElement("span");
//     let des = document.createElement("p");

//     img.src = el["tile-image src"]
//     img.alt = "error"
//     rating.innerText = el["sr-only"]
//     tag.innerText = el["text-sale"];
//     sym.textContent = el["price-curreny-symbol"];
//     price.innerText = el["price-currency-text"];
//     des.innerText = el["link"]

//     card.append(img, rating, tag, sym, price, des);
//     cont.append(card);
//   });
// }


let highToLowBtn = document.getElementById("sort-high-to-low");
let lowToHighBtn = document.getElementById("sort-low-to-high");




highToLowBtn.addEventListener("click",sortAsc)

 function sortAsc(){
 let sortedout = data1.sort(function(a,b){
    return b["price-currency-text"]- a["price-currency-text"]
  })
console.log(sortedout)
  show(sortedout)
}

lowToHighBtn.addEventListener("click",sortDes)

function sortDes(){
  let sortedout = data1.sort(function(a,b){
    return a["price-currency-text"]- b["price-currency-text"]
  })
  console.log(sortedout)
  show(sortedout)
}

fildata.addEventListener("change", filfun)

function filfun(){
  let filtered = data1.filter(function(ele){
    if(fildata.value==""||fildata.value=="colour"){
      return true;
    }
    if(fildata.value==ele["sr-only 5"]){
      return true;
    }

  })
  show(filtered)
  document.getElementById("total").innerHTML = filtered.length;

}


pricef.addEventListener("change", (event) => {
  const priceRange = JSON.parse(event.target.value);
  const filteredItems = filterItemsByPriceRange(priceRange);
  console.log(filteredItems);
});



// pricef.addEventListener("change", filprice)

// function filprice(priceRange){
//   let filteredpri = data1.filter(function(ele){
//     if(pricef.value==""||pricef.value=="price"){
//       return true;
//     }
//     if(ele["price-currency-text"] >=priceRange.min && ele["price-currency-text"] <= priceRange.max){
//       return true
//       console.log(ele["price-currency-text"])
//     }

//   })

//   console.log(filteredpri);
//   show(filteredpri)
//   document.getElementById("total").innerHTML = filteredpri.length;

// }

function filterItemsByPriceRange(priceRange) {
  return data1.filter((item) => {
    return item["price-currency-text"] >= priceRange.min && item["price-currency-text"]<= priceRange.max;
  });
}

// const pricef = document.getElementById("price-range");

pricef.addEventListener("change", (event) => {
  const priceRange = JSON.parse(event.target.value);
  const filteredItems = filterItemsByPriceRange(priceRange);
  show(filteredItems);
  document.getElementById("total").innerHTML = filteredItems.length;
});

function slideshow(slide){

    
    Imagein = 0;
    let firstImage = document.getElementById("fImage");

let upImage = document.createElement("img");
upImage.src = slide[0]
firstImage.append(upImage)

setInterval(function(){
   Imagein++;

   if(Imagein==slide.length-1){
    Imagein=0;
   }
   upImage.src = slide[Imagein];

   firstImage.append(upImage);

 

},2000)

}



let slide = ["https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36c/on/demandware.static/-/Sites-oss-Library/default/dwb0001406/ca-images/plp-tiles/2023/FBB_PLP_SHAPEWEAR_Desktop.jpg?yocs=j_m_",
"https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36c/on/demandware.static/-/Sites-oss-Library/default/dw77b00ba8/ca-images/plp-tiles/2023/FBB_PLP_SLIPS_Desktop.jpg?yocs=j_m_",
"https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36c/on/demandware.static/-/Sites-oss-Library/default/dwb0001406/ca-images/plp-tiles/2023/FBB_PLP_SHAPEWEAR_Desktop.jpg?yocs=j_m_",
"https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36c/on/demandware.static/-/Sites-oss-Library/default/dw77b00ba8/ca-images/plp-tiles/2023/FBB_PLP_SLIPS_Desktop.jpg?yocs=j_m_"
]

window.addEventListener("load", function () {

slideshow(slide)
// add event-listeners;
});