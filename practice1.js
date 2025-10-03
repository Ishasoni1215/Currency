const product={
    name:"Ball pen",
    isdeal:true,
    rating:4,
    offer:5,
    price:270,
};
console.log(product);


//que 2 practice

const profile={
    userName:"Isha soni",
    followers: 141,
    following:143,
    isFollow: true
};
console.log(profile);
console.log( typeof profile["followers"]);
// que 3 practice 1 lecture 2 

let num=prompt("enter a number:");
if(num%5===0){
   console.log(num,"is a multiple of 5");
}
else{
     console.log(num,"is not multiple of 5");

}

//practice 2
let score = prompt("0-100");
let grade ;
if(score>=80 && score<=100){
    Grade="A";
}
else if(score>=70 && score<=89){
    Grade="B";
}
else if(score>=60 && score<69){
    Grade="C";
}
else if(score>=50 && score<=59){
    Grade="D";
}
console.log("According to your score and grade was:",Grade);





