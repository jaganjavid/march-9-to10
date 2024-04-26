let val;

const list = document.querySelector(".collection");

val = list;
val = list.childNodes;

// Get the children element node
val = list.children; // ***
val = list.children[0];
val = list.children[1];
val = list.children[1].innerText = "Hello";

console.log(val);