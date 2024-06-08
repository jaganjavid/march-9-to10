
// Item controller, UI controller, Storage Controller


// Item controller

const StorageCtrl = (function(){

}());

// UI controller

const ItemCtrl = (function(){

    // Item Construtor

    const Item = function(id, name, money){
        this.id = id;
        this.name = name;
        this.money = money;
    }

    const data = {
        items:[
            {id:0, name:"Clothes", money:1000},
            {id:1, name:"Food", money:2000},
            {id:2, name:"Recharge", money:500},
        ],
        currentItem:null,
        totalMoney:0
    }

    return {
        getItem: function(){
            return data.items;
        }
    }
    

}());



// Storage Controller

const UICtrl = (function(){


    return{
        populateItemList:function(items){
            
            let html = "";

            items.forEach(function(item){

               html += `<li class="collection-item" id=${item.id}>
                <strong>${item.name} : <em>${item.money}</em></strong>
                <a href="#" class="secondary-content">
                    <i class="fa-solid fa-pencil edit-item"></i>
                </a>
            </li>`

            });

            document.querySelector("#item-list").innerHTML = html;
        },
        clearEditState: function(){
            document.querySelector(".add-btn").style.display = "inline";
            document.querySelector(".update-btn").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
        },
        showEditState: function(){
            document.querySelector(".add-btn").style.display = "none";
            document.querySelector(".update-btn").style.display = "inline";
            document.querySelector(".delete-btn").style.display = "inline";
            document.querySelector(".back-btn").style.display = "inline";
        }
    }

}());

// App Controller

const App = (function(){


    const loadEventListeners = function(){


        // Add Event

        // Clear Event

        // Back Event

  
        // Edit Icon Click Event
        document.querySelector("#item-list").addEventListener("click", itemEditClick);


    }

    // Item to Edit

    const itemEditClick = function(e){
        e.preventDefault();

        if(e.target.classList.contains("edit-item")){
            
            UICtrl.showEditState(); // Invoke or call
        }
    }

    


   
 

    return {
        init: function(){

            UICtrl.clearEditState();

            // console.log("Hello im app");
            const items = ItemCtrl.getItem(); // Array

            if(items.length > 0){
                UICtrl.populateItemList(items);
            }

            loadEventListeners();
        }
    }

}())

App.init();