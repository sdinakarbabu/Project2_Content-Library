// ---------------------------Category Section -----------------------------------------
function createCategoryContainer(){
    //     <div class="categoryEachContainer">
    //          <h1 class="categoryName">Category</h1>
    //      </div>
    let categorySectionEle = document.getElementById("categorySection");


    let divEle = document.createElement("div");
    divEle.classList.add("categoryEachContainer");
    categorySectionEle.appendChild(divEle);

    let h1Ele = document.createElement("h1");
    h1Ele.classList.add("categoryName");
    h1Ele.innerText = "Category";
    divEle.appendChild(h1Ele)

                                   
    
}

function createProductContainer(){
//      <div class="productEachContainer">
//          <img src="../../public/assests/icons/online-library.png" class="bookImage">
//          <div class="productBlock">
//              <h1 class="bookName">Name</h1>
//              <button class="readMoreBtn">Read more</button>
//          </div>
//      </div>
    let productsSectionEle = document.getElementById("productsSection");


    let divEle = document.createElement("div");
    divEle.classList.add("productEachContainer");
    productsSectionEle.appendChild(divEle);

    let imgEle = document.createElement("img");
    imgEle.classList.add("bookImage");
    imgEle.src="../../public/assests/icons/online-library.png"
    imgEle.alt = "Product Image";
    divEle.appendChild(imgEle); 

    let insideDivEle = document.createElement("div");
    insideDivEle.classList.add("productBlock");
    divEle.appendChild(insideDivEle);

    let insideh1Ele = document.createElement("h1");
    insideh1Ele.classList.add("bookName");
    insideh1Ele.innerText = "Name";
    insideDivEle.appendChild(insideh1Ele);

    let insideButtonEle = document.createElement("button");
    insideButtonEle.classList.add("readMoreBtn");
    insideButtonEle.innerText = "Read more";
    insideButtonEle.addEventListener('click',()=>{
        insideButtonEle.classList.toggle("pulse");
    })
    insideDivEle.appendChild(insideButtonEle);
                                   
    
}

for(let i=0;i<15;i++){
   
    createCategoryContainer()
    createProductContainer()
}


// ---------------------------Products Section -----------------------------------------
