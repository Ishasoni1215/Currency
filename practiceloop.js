//practice lecture 3 
//que 1
/*for(let num=0;num<=100;num++){
    if(num%2==0){
        console.log("num=",num);
    }
}
 
//practice Q no.2

let gameNum = 15;
let userNum = prompt("guess  a game num");
while(userNum != gameNum){
    userNum = prompt("You entered a wrong num,enter again");
}
console.log("congratulationn,You entered correct num");


//lecture3 
let fullname =prompt("enter your fullname without space");
let userName="@"+fullname+fullname.length;
console.log(userName);*/


//lecture 4
//Q no.1
/*let marks = [56,85,98,99,55];
let sum=0;
for(let val of marks){
    sum+=val;
}
let avg=sum / marks.length;
console.log(`avg marks of the class=${avg}`);*/

//Q No.2
let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    console.log(`value at index ${i}=${val}`);
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer =${items[i]}`);
    i++;
}

// Q no.3
let companies=[ "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//companies.shift();
//companies.splice(2,1,"Ola");
companies.push("Amozan");


//lecture 5 Q no.1
function countVowels(str){
    let count=0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    console.log(count);
}

//lecture 5 Q no.2
/*let arr=[89,90,95,94,95,99,44];
let marks=arr.filter((val)=>{
    return val>90;
});
console.log(marks);*/

//lecture 5 Q no.3
let n=prompt("enter a number");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(sum);
