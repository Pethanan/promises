const posts = [{title: "Post 1", body: "post 1 body", createdAt: new Date().getTime()}, {title: "Post 2", body: "post 2 body", createdAt: new Date().getTime()} ];

const displayPost = () => 
{ 
  setTimeout(() => 
    {
    let output = ""; 
    posts.forEach((post, index) => {output += `<li>${post.title} - posted ${Math.floor((Date.now() - post.createdAt)/1000)} secs ago</li>`});
    document.body.innerHTML = output;
    }, 0);
  
}

function createPost(post)
{
return new Promise((resolve, reject)=>{
  setTimeout(()=> {
posts.push(post);
let error = false;
    if(!error)
      resolve();
    else
      reject("Error: something went wrong");
}, 0);
})
}
          

function deletePost()
{
  return new Promise((resolve, reject)=>
   {
    setTimeout(() =>     {
      if(posts.length>0) 
        {
          let deletedEl = posts.pop();
          resolve(deletedEl);
        }
      else
        {
          reject("arr is empty");
        }
   
    }, 1000)
   
  });
}



createPost({title: "post 3", body: "post 3", createdAt: new Date()}, displayPost).then(()=>
                                                                                      
{
  displayPost(); 
  deletePost().then((deletedEl)=> { console.log(deletedEl)
      displayPost(); 
deletePost().then((deletedEl) => { console.log(deletedEl)
  displayPost();
  deletePost().then((deletedEl)=>{ console.log(deletedEl); displayPost(); 
                        deletePost().then(()=>{}).catch((err)=>{console.log(err)
});
}).catch((err)=>{console.log(err)})
}).catch((err)=>{console.log(err)})
}).catch((err)=>{console.log(err)})
});


          
