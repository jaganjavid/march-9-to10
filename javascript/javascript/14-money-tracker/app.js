
// Item controller, UI controller, Storage Controller


// Item controller

// const StorageCtrl = (function(){

// }());

// UI controller

const ItemCtrl = (function(){

    // Item Construtor


    // Private

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

    // public

    
    return {
        getItem: function(){
            return data.items;
        },
        addItem: function(name, money){
           
            let ID;

            // Create a ID

            if(data.items.length > 0){

                ID = data.items[data.items.length - 1].id + 1;

                console.log(ID);

            }else{
                ID = 0;
            }

            money = parseInt(money);

            // Create a new item
            let newItem = new Item(ID, name, money);

            // Add to Item Array
            data.items.push(newItem);

            return newItem;

        },
        getTotalMoney: function(){

            let total = 0;

            if(data.items.length > 0){
                data.items.forEach(function(item){
                    total += item.money;

                    data.totalMoney = total;
                })
            }else{
                return data.totalMoney = 0;
            }

            return total;
        }
    }
    

}());



// UICtrl Controller

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
            document.querySelector("#add-btn").style.display = "inline";
            document.querySelector("#update-btn").style.display = "none";
            document.querySelector("#delete-btn").style.display = "none";
            document.querySelector("#back-btn").style.display = "none";
        },
        showEditState: function(){
            document.querySelector("#add-btn").style.display = "none";
            document.querySelector("#update-btn").style.display = "inline";
            document.querySelector("#delete-btn").style.display = "inline";
            document.querySelector("#back-btn").style.display = "inline";
        },
        getItemInput: function(){
            return {
                name:document.querySelector("#item-name").value,
                money:document.querySelector("#item-money").value,
            }
        },
        addListItem: function(item){
            
            // Create a li element
            const li = document.createElement("li");

            // Add Class to li
            li.className = "collection-item";

            // Add ID
            li.id = `item-${item.id}`;

            // Insert HTML
            li.innerHTML = `<strong>${item.name} : <em>${item.money}</em></strong>
            <a href="#" class="secondary-content">
                <i class="fa-solid fa-pencil edit-item"></i>
            </a>`;

            // Insert Item to UL
            document.querySelector(".collection").appendChild(li);

        },
        showTotalMoney:function(total){
            document.querySelector("#total-money").innerText = total;
        },
        clearInputState:function(){
            document.querySelector("#item-name").value = "";
            document.querySelector("#item-money").value = "";
        }
        
    }

}());

// App Controller

const App = (function(){


    const loadEventListeners = function(){


        // Add Event
        document.querySelector("#add-btn").addEventListener("click", itemAddsubmit);

        // Clear Event

        // Back Event

  
        // Edit Icon Click Event
        document.querySelector("#item-list").addEventListener("click", itemEditClick);


    }

    // Add Item
    const itemAddsubmit = function(e){
        
        e.preventDefault();

        // Get the form input 
        const input = UICtrl.getItemInput(); // object

       // Validation
       if(input.name === "" || input.money === ""){
        alert("Please fill the fields");
       }else{ 
         
        // Add item
        const newItem = ItemCtrl.addItem(input.name, input.money);

        // Add Item to UI List
        UICtrl.addListItem(newItem);

        // Add Total Money
        const totalMoney = ItemCtrl.getTotalMoney();

        // console.log(totalMoney);
        
        // Add total money to ui
        UICtrl.showTotalMoney(totalMoney);

        // Clear a ui input
        UICtrl.clearInputState();

       }

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

                const totalMoney = ItemCtrl.getTotalMoney();
                
                UICtrl.showTotalMoney(totalMoney);
            }

            loadEventListeners();
        }
    }

}())

App.init();