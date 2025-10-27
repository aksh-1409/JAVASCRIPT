//function returning function

function myFunc(){
    function hello(){
        console.log("Hello");
    }
    return hello;
}

const ans = myFunc();
console.log(ans);
ans();