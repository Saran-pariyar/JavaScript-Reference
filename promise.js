let p = new Promise((resolve,reject)=>{
    let a=2;
    if(a==2){
        resolve("success");
    }
    else{
        reject("failed");
    }
})
// .then = resolve()
p.then((message)=>{
    console.log(message);
    //.catch = reject
}).catch((message)=>{
    console.log(message);
})