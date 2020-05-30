"use strict";
let closeBasket = document.querySelector(".close-basket"); 
let basketBtn = document.querySelector(".basket")
let basket = document.querySelector(".basket-window");
let basketProducts = document.querySelector(".products-in-basket");
let sumPay = document.querySelector(".sum");
let prodAll = document.querySelector(".products");
let products = document.querySelectorAll(".product");
let productsName = document.querySelectorAll(".product-name");
let productsImage = document.querySelectorAll(".product-img");
let productsPrice = document.querySelectorAll(".price");
let clearBasket = document.querySelector(".clear-basket");

basketBtn.addEventListener("click", function(){
    basket.style.display = "block";
})

closeBasket.addEventListener("click", function(){
    basket.style.display = "none";
})

prodAll.addEventListener("click", addProd);

clearBasket.addEventListener("click", function(){
    basketProducts.innerHTML = "";
    sumPay.innerHTML = "0";
})

//добаляет продукт в корзину
function addProd(event){
    let target = event.target.parentNode;
    let targetBtn = event.target;
    if(targetBtn == target.querySelector(".btn-buy")){
        let productDiv = document.createElement('div');
        productDiv.classList.add("product-basket");
        //название товара
        let productName = target.querySelector(".product-name").cloneNode(true);
        productName.classList.add("product-basket-name");
        productDiv.append(productName);
        //картинка
        let productImg = target.querySelector(".product-img").cloneNode(true);
        productImg.classList.add("products-img-for-buing")
        productImg.classList.remove("product-img")
        productDiv.append(productImg);
        //цена
        let productPrice = target.querySelector(".price").cloneNode(true);
        productPrice.classList.add("product-basket-price");
        productDiv.append(productPrice);

        basketProducts.append(productDiv);
    }

    getIdEl();
    // Чтобы при записи суммы товаров не возникало конкатинации чисел 
    if(sumPay.innerHTML != ""){
        sumPay.innerHTML = "";
        sumPay.append(getSumProd());
    } else {
        sumPay.append(getSumProd());
    }
}


//Добавляет номер товара в корзине
function getIdEl(){
    let IdElements = basketProducts.querySelectorAll(".product-basket");
    IdElements.forEach(function(idEl, key){
        let idElDiv = document.createElement('div');
        idElDiv.classList.add('id-el');
        if(idEl.querySelector("div") && 
        idEl.querySelector("div").classList.contains("id-el")){
            return;
        } else{
            idElDiv.innerHTML = key + 1;
            idEl.prepend(idElDiv);
        }
    })
}


//считает сумму цен товаров
function getSumProd(){
    let prodCollection = basketProducts.querySelectorAll(".product-basket-price");
    let sum = 0;
    prodCollection.forEach(function(item, key){
        sum = Number(item.innerHTML) + sum
    })
    console.log(sum);
    return sum;
}




