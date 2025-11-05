//async await

const URL = "https://jsonplaceholder.typicode.com/posts";
//aynchronous programming
console.log("Script start");
async function getData(){
    
        const response = await fetch(URL);
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
}

getData().then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log( `Error: ${error}`);
})
console.log("Script end");
