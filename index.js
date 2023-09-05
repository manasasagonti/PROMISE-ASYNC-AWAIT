 //question1
function greet(name, myFunction) {
    console.log('Hello world');

    myFunction(name);
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}
setTimeout(greet, 2000, 'John', sayName);

//question 2
function one(){
    setTimeout(()=>{
        console.log(1);
        setTimeout(()=>{
            console.log(2);
            setTimeout(()=>{
                console.log(3);
                setTimeout(()=>{
                    console.log(4);
                    setTimeout(()=>{
                        console.log(5);
                        setTimeout(()=>{
                            console.log(6);
                            setTimeout(()=>{
                                console.log(7);
                            },7000)
                        },6000)
                    },5000)
                },4000)
            },3000)
        },2000)
        
    },1000)
}
one()

//question3
function delay(t){
    return new Promise((resolve)=>{
        setTimeout(resolve,t)
    })
}
function print(){
    let promise=Promise.resolve();
    for(let i=1;i<=7;i++){
        promise=promise.then(()=>{
            console.log(i);
            }).then(()=>{
                delay(i*1000);
        })
    }
    return promise;
}
print();


// //question4
 function Promise(value){
     return new Promise((resolve,reject)=>{
         if(value=="yes"){
             resolve("Promise Resolved");
         }else{
             reject("Promise Rejected");
         }
     })
 }
 Promise("yes").then((response)=>{
     console.log(response);
 },(error)=>{
     console.log("Error:"+error);
})

//question5
function mainFunction(callback){
    console.log("performing operations");
    //using settimeout to simulate asynchronous operation
    setTimeout(function(){
        callback("operation complete")
    },1000);
}
//define the callback function
function callbackFunction(result){
    console.log("Result:"+result);
}
//call the main function with the callback function
mainFunction(callbackFunction);

//question6
getUser(function(user){
    getOrders(user.id,
        function(orders){

            getOrderDetails(order[0].id,
                function(orderDetails){

                    showOrderDetails(orderDetails);
                });
        });
});

//question7
new Promise((resolveOuter)=>{
    resolveOuter(
        new Promise((resolveInner)=>{
            setTimeout(resolveInner,1000);
        }),
    );
});

//question8
let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise resolved')
    },4000);
});
//async function
async function asyncFunc(){
    let result = await promise;
    console.log(result);
    console.log("hello javascript!!!");
}
asyncFunc();

//question9
const promise1=Promise.resolve(23);
const promise2=30;
const promise3=new Promsise((resolve,reject)=>{
    setTimeout(resolve,100,"ani");
});
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
});
