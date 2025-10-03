/*let btn1=document.querySelector("#btn1");
btn1.onclick=(evt)=>{
    console.log(evt);
     console.log(evt.type);
     console.log(evt.target);
       console.log(evt.clientX, evt.clientY);

}*/


//practice Q1::
btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked");
});

let mode=document.querySelector("#mode");
let currmode="light";
mode.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currmode);

})