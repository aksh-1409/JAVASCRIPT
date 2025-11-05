const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");
const head3 = document.querySelector(".heading3");
const head4 = document.querySelector(".heading4");
const head5 = document.querySelector(".heading5");
const head6 = document.querySelector(".heading6");
//callback hell
setTimeout(()=>{
 head1.textContent = "one";
 head1.style.color = "red";
 setTimeout(()=>{
    head2.textContent = "two";
    head2.style.color = "blue";
    setTimeout(()=>{
        head3.textContent = "three";
        head3.style.color = "green";
        setTimeout(()=>{
            head4.textContent = "four";
            head4.style.color = "yellow";
            setTimeout(()=>{
                head5.textContent = "five";
                head5.style.color = "orange";
                setTimeout(()=>{
                    head6.textContent = "six";
                    head6.style.color = "purple";
                },2000)
            },2000)
        },2000)
    },2000)
 },2000)  
},1000);