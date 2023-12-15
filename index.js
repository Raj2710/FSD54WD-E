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



// fetch('https://restcountries.com/v3.1/all',{method:'GET'})
// .then(req=>req.json())//string buffer to json
// .then(data=>createCards(data))//using the data
// .catch(error=>console.error(error))

// function createCards(data)
// {
//     data.forEach((e)=>{
//         console.log(e)

//         let div = document.getElementById('root')
//         let card = document.createElement('div')
//         card.innerHTML=`<div class='card-wrapper'>
//                             <h1>${e.name.common}</h1>
//                             <img src="${e.flags.png}" />
//                         </div>`
//         div.appendChild(card)   
//     })
// }


//Promise Day 2
//Promise Chaining

// let promise1 = new Promise((resolve,reject)=>{
//         resolve("Promise 1 is Success")
// })

// let promise2 = new Promise((resolve,reject)=>{
//         resolve("Promise 2 is success")
// })

// let promise3 = new Promise((resolve,reject)=>{
//         resolve("Promise 3 is success")
// })

// let promise4 = new Promise((resolve,reject)=>{
//         reject("Promise 4 is Rejected")
// })

// let promise5 = new Promise((resolve,reject)=>{
//         resolve("Promise 5 is success")
// })

// promise1.then((values)=>{
//     console.log(values)// Promise 1 outcome
//     promise2.then(values=>{
//         console.log(values)//promise 2 outcome
//         promise3.then(values=>{
//             console.log(values)//promise 3 outcome
//             promise4.then(values=>{
//                 console.log(values)//promise 4 outcome
//                 promise5.then(values=>{
//                     console.log(values)//promise 5 outcome
//                 })
//                 .catch(reason=>console.error(reason)) //Promise 5 Catch
//             })
//             .catch(reason=>console.error(reason)) //Promise 4 Catch
//         })
//         .catch(reason=>console.error(reason))//Promise 3 Catch
//     })
//     .catch(reason=>console.error(reason))//Promise 2 catch
// })
// .catch(reason=>console.error(reason))//Promise 1 catch


//Disadvantages of Promise
//1. It add or increase complexity to our code
//2. Does not support in old browsers
//3. Error handling is difficult as we need to handle for every indivudual promise we create.



//Async Await

async function getWeather(e) {
    let {lat,lng} = e.currentTarget
    console.log(lat,lng)

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1df01ea2c0ed525b7685b8d43188acfd`)
    let data = await res.json()
    
    let celcius = data.main.temp - 273.15
    console.log(data.main.temp, celcius.toFixed(2))
}

function createCards(data)
{
    data.forEach((e)=>{
        // console.log(e)

        let div = document.getElementById('root')
        let card = document.createElement('div')
        let [lat,lng] = e.latlng
        card.lat = lat
        card.lng = lng
        card.addEventListener('click',getWeather,false)
        card.innerHTML=`<div class='card-wrapper'>
                            <h1>${e.name.common}</h1>
                            <img src="${e.flags.png}" />
                        </div>`
        div.appendChild(card)
    })
}

async function loadData(){
   try {
        let res = await fetch('https://restcountries.com/v3.1/all',{method:'GET'})
        let data = await res.json()
        createCards(data)
   } catch (error) {
    console.error(error)
   }
}

loadData()