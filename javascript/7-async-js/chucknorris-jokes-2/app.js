

const buttonArray = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];


document.addEventListener("DOMContentLoaded", function(){


    const btnWrapper = document.querySelector(".all-btn");


    buttonArray.forEach(function(item){
        
        const btn = document.createElement("button");
        
        btn.className = "btn btn-dark";

        btn.innerText = item;

        btnWrapper.appendChild(btn);

    })



})