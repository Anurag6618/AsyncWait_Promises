const posts=[{title:'Post One',body:'This is Post one'},
{title:'Post Two',body:'This is Post Two'},
{title:'Post Three',body:'This is Post Three'}];



function getposts(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post)=>{
            output=output+`<li>${post.title}</li>`
        })

        document.body.innerHTML=output;

    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 2000);
    })
}

async function printpost(){
    await createPost({title:'Post three',body:'This is Post three'})
    await getposts();
    await createPost({title:'Post Four',body:'This is Post Four'})
    await getposts();
    

}

printpost()