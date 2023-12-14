// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//resolve - to make the promise fulfilled
//reject - to reject the promise

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(100>10)
//             resolve("X is greater than 10")
//         else
//             reject("X is smaller than 10")
//     },3000)
// })
// promise1
// .then(value => console.log(`Success: ${value}`))
// .catch(error=>console.log(`Error: ${error}`))


// function maxValue(x){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(x>10)
//                 resolve(`${x} is greater than 10`)
//             else
//                 reject(`${x} is smaller than 10`)
//         },3000)
//     })
//     }
    
    
//     maxValue(5)
//     .then(success)//resolve - fullfilled promise
//     .catch(failure)//reject - rejected
    
//     function success(value)
//     {
//         console.log(`Success: ${value}`)
//     }
    
//     function failure(error)
//     {
//         console.log(`Error: ${error}`)
//     }


// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Promise 1")
//         reject("Promise 1 is success")
//     },500)
// })

// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Promise 2")
//         reject("Promise 2 is success")
//     },1500)
// })

// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Promise 3")
//         reject("Promise 3 is success")
//     },1000)
// })

// let promise4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Promise 4")
//         reject("Promise 4 is success")
//     },3000)
// })

// let promise5 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Promise 5")
//         resolve("Promise 5 is success")
//     },2000)
// })

// Fulfills when all of the promises fulfill; rejects when any of the promises rejects.
// Promise.all([promise1,promise2,promise3,promise4,promise5])
// .then(value => console.log(`Success: ${value}`))
// .catch(error => console.error(`Error: ${error}`))

//This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value
// Promise.any([promise1,promise2,promise3,promise4,promise5])
// .then(value => console.log(`Success: ${value}`))
// .catch(error => console.error(`Error: ${error}`))

//Will return the first fulfillment or error value
// Promise.race([promise1,promise2,promise3,promise4,promise5])
// .then(value => console.log(`Success: ${value}`))
// .catch(error => console.error(`Error: ${error}`))
// .finally(()=>console.log("Finally"))

// Promise.allSettled([promise1,promise2,promise3,promise4,promise5])
// .then(value => {
//     value.forEach(e=>console.log(`${e.status} - ${e.status==='fulfilled'?e.value:e.reason}`))
// })
// .catch(error => console.error(error))