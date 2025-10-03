/*console.dir(document.body);
console.log(document.body);
 let heading=document.getElementById("heading");
 console.dir(heading);*/

/* let headings=document.getElementsByClassName("headings");
 console.dir(headings);
 console.log(headings)

 let para=document.getElementsByTagName("p");
 console.dir(para);
 console.log(para);
 console.dir(document.body.firstChild);*/

/*let h2=document.querySelector("h2");
 console.dir(h2.innerText);
 h2.innerText=h2.innerText+"from apna college";

 let divs=document.querySelectorAll(".box");
 console.log(divs[0]);
 divs[0].innerText="newunique value1";*/

let para = document.querySelector("p");
console.log(para.getAttribute("class"));


let newBtn=document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);
 let div=document.querySelector("div");
 div.append(newBtn);
  div.prepend(newBtn);
