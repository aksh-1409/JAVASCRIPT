//now to modfiy th code of 90.js and 91.js thorgh promise

const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");
const head3 = document.querySelector(".heading3");
const head4 = document.querySelector(".heading4");
const head5 = document.querySelector(".heading5");
const head6 = document.querySelector(".heading6");
function changeText(element,text,color,time){
    return new Promise((resolve,reject)=>{
        if(element){
            setTimeout(()=>{
                element.textContent = text;
                element.style.color = color;
                resolve();
            },time)
        }else{
            reject();
        }
    })
}

const promise = changeText(head1,"one","red",1000);
promise.then(()=>{
    console.log("done");
})
