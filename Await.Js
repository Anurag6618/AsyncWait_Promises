console.log('person1: shows ticket');
console.log('person2: shows ticket');

const premovie=async()=>{
    const promiseWifebringingtickets=new Promise((resolve,reject)=>{
        setTimeout(()=>
            resolve('ticket')
        ,3000);
    })

    const getpopcorn=new Promise((resolve,reject)=>resolve('popcorn'))
    const getbutter=new Promise((resolve,reject)=>resolve('butter'))
    let ticket= await promiseWifebringingtickets;

    console.log(`husband: I have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');
    
    let popcorn=await getpopcorn;
    
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: No I need butter');

    let butter=await getbutter;
    console.log(`We got the ${butter}`)
    
    return ticket

}

premovie().then((m)=>console.log(`person3: shows ${m}`))

console.log('person4: shows ticket');
console.log('person5: shows ticket');