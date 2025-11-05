//setTimeout() clearTimeout()
//asynchronous programming -- means here want to demonstrate that even if the setTimeout callback function is not running it is not blocking the after line code since it should run after 1 sec(1000ms) jb tk neeche ka code run hogha
//or phir jb poora execution context stack empty ho jayega toh setTimeout callback function run hoga callback queue se call stack me ake , nhi to jb tk voh call stack empty hone ka wait karegha or callback queue me rukegha    
// console.log("script start")

// const id = setTimeout(()=>{
//     console.log("setTimeout")
// },1000);

// for(let i=0;i<1000;i++){
//     console.log("for loop");
// }

// console.log("script end");


//agar hum chae ki voh jo setTimeout me jo callback function hai voh baad mr run na ho to phir 
console.log("script start")

const id = setTimeout(()=>{
    console.log("setTimeout")
},1000);

for(let i=0;i<1000;i++){
    console.log("for loop");
}

console.log("script end");



clearTimeout(id);
console.log("setTimeout not run");
