//callback function

function myfunc2(){
    console.log("myfunc2");
}

function myfunc(callback){
    console.log("myfunc");
    callback();
}
myfunc(myfunc2);
