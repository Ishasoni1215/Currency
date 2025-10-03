let marks = [67,56,84,94];
console.log(marks);
console.log(marks.length);

let heroes =["hulk","ironman","akshay"];
for(i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}

let cities =["delhi","mumbai","pune","ranchi"];
for(let city of cities){
    console.log(city.toUpperCase());
}

let arr=[1,2,3,4,5,6,7];
arr.splice(2,2,101,102,103);