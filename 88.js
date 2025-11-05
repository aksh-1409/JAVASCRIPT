//setInterval same as setTimeout but voh repeat krta hai jo time diya hai ussi time me baar baar call hota rhrgha jb tk usse stop na kare means clearInterval se --

console.log("script start")

const id = setInterval(()=>{
    console.log("setInterval")
},1000);

for(let i=0;i<1000;i++){
    console.log("for loop");
}

console.log("script end");

//agar hum chae ki voh jo setInterval me jo callback function hai voh baad mr run na ho to phir 
clearInterval(id);
console.log("setInterval not run");

