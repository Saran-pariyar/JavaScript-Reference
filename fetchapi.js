let myBtn= document.getElementById('myBtn');
let content= document.getElementById('content');


function getData (){
    //in fetch, we have to use two '.then' because we are using promise and the fetch also returns promise
    fetch('learn.txt').then((response)=>{
        console.log("Inside first then");
        return response.text();
    }).then((data)=>{
        console.log("Inside second then");
        console.log(data);
    })
}
console.log("Before running the func")
getData();
//the below code will be executed first become fetch is asynchronous
console.log("After running the func")
