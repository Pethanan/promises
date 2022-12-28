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

async function createPost(post)
{
  await posts.push(post);
  displayPost();
}
     

async function deletePost()
{
  
let deletedEl = await posts.pop();
  displayPost();
    
}



createPost({title: "post 3", body: "post 3", createdAt: new Date().getTime()});
deletePost();
