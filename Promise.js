console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifebringingtickets= new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve('ticket');
        
    },3000 )
})

const getpopcorn=promiseWifebringingtickets.then((res)=>{
    console.log('husband: we should go in');
    console.log('wife: no I am hungry')
    return new Promise((resolve, reject)=>resolve(`${res} popcorn`))
})


const getButter=getpopcorn.then((res)=>{
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: No I need butter');
    return new Promise((resolve, reject)=>resolve(`${res} butter`))
})

const getColdDrinks =getButter.then((res)=>{
    console.log("husband: I got the Butter,let's finally go in");
    console.log('Wife:No No, first coldrinks')
    
})
getColdDrinks.then((res)=>res)

console.log('person4: shows ticket');
console.log('person5: shows ticket');