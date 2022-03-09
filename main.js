let n1 =document.querySelector("#frist");
let n2 =document.querySelector("#secound");
let n3 =document.querySelector("#third");
let n4 =document.querySelector("#forth");

document.querySelector("#button").addEventListener("click" , function(e){
  e.preventDefault();
let result1 =Math.max(n1.value,n2.value,n3.value,n4.value);
console.log(result1)
document.querySelector("h1").innerHTML= "The Max Number is " + result1;
})