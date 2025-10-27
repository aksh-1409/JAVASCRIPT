//lexical scope 
const myVar = "value1";

function myApp(){

    function func(){
    const func2 = ()=>{
        console.log('inside myfunc2' , myVar);
    }
    func2();
    }
    console.log('inside myApp' , myVar);
    func();

    return func;
}

myApp();
