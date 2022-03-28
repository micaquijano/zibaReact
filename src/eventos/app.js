const btn_1 = document.querySelector("#btn_1");
const input = document.querySelector("input");
const link = document.querySelector("a");

const hacerClick = (e) => {};
console.log(e.target);

btn_1.addEventListener("click", hacerClick());
link.addEventListener("click",(e)=>{
    console.log(e)
})
input.addEventListener("keyup",(e)=>{
    console.log(e.key)
})
document.addEventListener("mouseover",(e)=>{
    console.log({x : e.clientX, y : e.clientY})
})
