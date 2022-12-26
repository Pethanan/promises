const user = {user: "Peth", lastActiveTime: new Date().getTime() }
const posts = [{title: "Post 1", body: "post 1 body", createdAt: new Date().getTime()}, {title: "Post 2", body: "post 2 body", createdAt: new Date().getTime()} ];

const displayPost = () => 
{ 
  setTimeout(() => 
    {
    let output = ""; 
    posts.forEach((post, index) => {output += `<li>${post.title} - User was active ${Math.floor((Date.now() - post.createdAt))} secs ago</li>`});
    document.body.innerHTML = output;
    }, 0);
  
}


function updateLastActiveTime()
{
  return new Promoise((resolve, reject)=> {
    setTimeout(()=>{
      user.lastActiviTime = new Date().getTime();
      let err = false
      if(!err)
        resolve();
      else reject();
      
    }, 1000)
  })
}

function createPost(post)
{
  posts.push(post);
  return new Promise ((resolve, reject)=>{
    
    let err = false
    if(!err)
      resolve();
    else reject();
      
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

const prom = Promise.all([createPost({title: "Post 3", body: "post 1 body", createdAt: new Date().getTime()}),updateLastActiveTime]).then(([cpResolve, UTResolve])=>
{
 displayPost();
 console.log("User post has been created, last active time has been modified")
}).catch(err=> {console.log(err)});

          
deletePost().then(deletedEl => {console.log(deletedEl); displayPost();});
