//optional chaining 


const user = {
    name:"hasrshit",
    // address:{
    //     city:"jaipur",
    //     state:"rajasthan"
    // }
}

console.log(user?.name);
// console.log(user.address.city); gives error since we are calling the property of undefined (address) that why 
console.log(user?.address?.city); //but here since it works on chainig that is user exists then ok then address exists no then return undefined without go to the city property and also it is not throw error since kyunki aise hi kaam karta hai

//used for nested objects
