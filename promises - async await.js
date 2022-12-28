//promise

console.log("person 1 shows ticket");
console.log("person 2 shows ticket");

const promiseWifeBringingTicks = new Promise ((resolve, reject)=>{
  setTimeout(()=>{resolve("ticket");}, 2000)
});

const getPopcorn = promiseWifeBringingTicks.then((t)=>{
  console.log(`wife: I have the tickets`);
  console.log(`Husband: we should go in`);
  console.log(`Wife: no, i'm hungry`);
  return new Promise((resolve, reject) => { resolve(`${t} popcorn`);});
});

const getButter = getPopcorn.then((t)=>{
  console.log(`Husband: I got some popcorn, we should go in`);
  console.log(`Wife: I need butter on my popcorn`); 
return new Promise((resolve, reject)=> {resolve(`${t} butter`)});
});

const getColdDrinks = getButter.then((t)=>{
  console.log(`Husband: I have got Butter, we should go in`);
  console.log(`Wife: I like some cold drinks`); 
return new Promise((resolve, reject)=> {resolve(`${t} cold drinks`)});
});

getColdDrinks.then((t)=>{(console.log(t))});

console.log("person 4 shows ticket");
console.log("person 5 shows ticket");

//async await

console.log("person 1 shows ticket");
console.log("person 2 shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTicks = new Promise ((resolve, reject)=>{
  setTimeout(()=>{resolve("ticket");}, 2000)
});
      let ticket = await promiseWifeBringingTicks;
  
  let getPopcorn = new Promise((resolve, reject) => { resolve(`popcorn`);});
  let addButter = new Promise((resolve, reject) => { resolve(`Butter`);});
  let getColdDrink = new Promise((resolve, reject)=>{resolve('Cold drinks')})
  

  
  console.log(`wife: I have ${ticket} `);
  console.log(`Husband: we should go in`);
  console.log(`Wife: no, i'm hungry`);
  
    let popcorn = await getPopcorn;
  
  console.log(`Husband: I got some ${popcorn}, we should go in`);
  console.log(`Wife: I need butter on my popcorn`); 
  
  let butter = await addButter;
  
  console.log(`Husband: I got some ${butter}, we should go in`);
  console.log(`Wife: I would like some cold drinks`); 
  
  let coldDrinks = await getColdDrink;
  
  console.log(`Husband: I got some ${coldDrinks}, we should go in`);
  console.log(`Wife: yes let's go`); 
  
  return ticket; 
};

preMovie().then(m => {console.log(`person 3: shows ${m}`)})

console.log("person 4 shows ticket");
console.log("person 5 shows ticket");


