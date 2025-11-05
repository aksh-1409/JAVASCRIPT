const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");
const head3 = document.querySelector(".heading3");
const head4 = document.querySelector(".heading4");
const head5 = document.querySelector(".heading5");
const head6 = document.querySelector(".heading6");

function changeText(element,text,color,time,onSuccess,onFailure){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            onSuccess();
        }else{
            onFailure();
        }
    },time)
}
//callback hell / pyramid of doom
changeText(head1,"one","red",1000,()=>{
changeText(head2,"two","blue",1000,()=>{ 
     changeText(head3,"three","green",1000,()=>{
        changeText(head4,"four","yellow",1000,()=>{
            changeText(head5,"five","orange",1000,()=>{
                changeText(head6,"six","purple",1000,()=>{
                    // console.log("heading6 not exists")
                },()=>{
                    console.log("heading6 not exists")
                })
            },()=>{
                console.log("heading5 not exists")
            })
        },()=>{
            console.log("heading4 not exists")
        })
    },()=>{
        console.log("heading3 not exists")
    })
},()=>{
    console.log("heading2 not exists")
})
},()=>{console.log("heading1 not exists")})