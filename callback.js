console.log("one");
console.log("two");
console.log("three");

//callbacks Hell
/*function getData(dataId,getNextData){
    setTimeout( ()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);

    }
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>[
            getData(4)
        ]);
    });
});*/


//promises
/* let promise=new Promise((resolve,reject)=>{
    console.log("i am a promsie");
    resolve(123);
 });*/

//promises
/* function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
        console.log("data",dataId);
        resolve("success");
        if(getNextData){
            getNextData();
        }
    },5000);

    });
    
    }*/
//promise chaining
    /*function asyncFunc1() {
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
        console.log("data1");
        resolve("success");
        
        },5000)

    });
    }
    function asyncFunc2() {
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
        console.log("data2");
        resolve("success");
        
        },5000)

    });
    }
    console.log("fetching data1...");
    let p1=asyncFunc1();
    p1.then((res)=>{
        console.log("fetching data2...");
        let p2=asyncFunc2();
        p2.then((res)=>{});
    });*/

    //async await
async function hello(){
    console.log("hello");
}

function api() {
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
        console.log("weather data");
        resolve("200");
        
        },2000)

    });
    }
    async function getWeatherData(){
        await api();
    }



/*function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
        console.log("data",dataId);
        resolve("success");
                
    },2000);

    });
    
    }
    async function getAllData(){
        console.log("getting data1...");
        await getData(1);
        console.log("getting data2...");
        await getData(2);
        console.log("getting data3...");
        await getData(3);

    }*/


        //IIFE
        function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
        console.log("data",dataId);
        resolve("success");
                
    },2000);

    });
    
    }
(async function (){
        console.log("getting data1...");
        await getData(1);
        console.log("getting data1...");
        await getData(2);
        console.log("getting data1...");
        await getData(3);})();