function app(){
    const myfunc = ()=>{
        console.log("myfunc");
    }

    const addTwo = (num1,num2)=>{
        return num1+num2;
    }

    const mulTwo = (num1,num2)=> num1*num2;

    myfunc();
    console.log(addTwo(2,3));
    console.log(mulTwo(2,3));
}

 app();