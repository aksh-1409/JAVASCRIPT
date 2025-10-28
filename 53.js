// console.log(this);//window object
// console.log(window);//window object variable

//this is used to access the global object

function myfunc(){
    "use strict" //it is used to prevent/stop the access of global object window when we are calling function without using window keyword
    //without use strict it will print window object
    //so it can also be intrepreted as ki agr globl object access karna hai to window. keyword use karna padega
    console.log(this);
}
myfunc();
