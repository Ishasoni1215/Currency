function myFunction(){
    console.log("welcome to college");
    console.log("we are learning JS:");
}
myFunction();
myFunction();
myFunction();
myFunction();


/*function sum
function sum(X,Y){
    console.log(X+Y);
} */

/*arrow function
const arrowsum=(a,b)=>{
    console.log(a+b);
};*/

//forEach method
/*let arr=[1,2,3,4,5,6];
arr.forEach(function printVal(val){
    console.log(val);
});*/


/*let arr=[1,2,3,4,5,6];
arr.forEach((val)=>{
    console.log(val);
})*/

let array=["pune","delhi","mumbai"];
array.forEach((val,idx,array)=>{
    console.log(val.toUpperCase(),idx,array);
});

//practice que
let nums=[2, 3,4,5,6];
nums.forEach((nums)=>{
    console.log(nums*nums);
})

//filer
let arr=[1,2,3,4,5,6,7,8,9];
let evenArr=arr.filter((val)=>{
    return val%2!==0;
})
console.log(evenArr);

//reduce
let sum=[2,3,4,5,6,7,8];
const output=sum.reduce((result,currnetvalue)=>{
    return result+currnetvalue;
});
console.log(output);
