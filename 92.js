//Promise 


const bucket =['coffee','chips','vegetables','salt','rice'];

const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
        resolve("fried rice");
    }else{
        reject("not found");
    }
})

friedRicePromise.then(
    //jab promise se resolve hogha toh
    (resolve)=>{ 
        console.log(resolve);
}, 
//jab promise se reject hogha toh
(reject)=>{
    console.log(reject)
})

//other way of writing 

friedRicePromise.then((resolve)=>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject)
});

//or haan promise hamesha poora code context end ho jaane ke baad jb tk call stack empty na ho jaye tb tk run nhi hogha, or tb tk voh mircotask queue me rkh jayega 
//also agr setTimeout bhi code me likha ho gloabl ececution context me or promise bhi  ho to kaun sa phele  run hogha callback queue se setTiemout wla callback function ya phir mircotask queue se promise to
//answer hai ki priority pehle promise ko di jayghi event loop dwara
