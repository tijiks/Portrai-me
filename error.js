'use strict'
function changeColor(element, color){
	element.style.backgrounColor=color;
}
const div1=document.getElementById("divvv");
try{

changeColor(div1, "black")
}
catch(err){
	console.log(err);
};

let ii=prompt("What is your name?");
alert("Hello "+ii+"!");