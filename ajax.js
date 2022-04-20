const fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', clickHandler);

function clickHandler() {
    //making an XHR(XML Http Request) object
    let xhr = new XMLHttpRequest();
    //we will get data from our local text file i.e. learn.txt
    xhr.open("GET", "learn.txt", true); //true means we made it asynchronous

    //what to do on progress of fetching the data, this is optional
    xhr.onprogress = function () {
        console.log("on progress");
    }
    //when data is fetched
    xhr.onload = function () {
        //check whether we got the response or not
        if (xhr.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.log("Failed to get the data");
        }
    }
    //we also have to send the request
    xhr.send();
}



const popBtn = document.getElementById("popBtn");
popBtn.addEventListener('click', popHandler);

function popHandler(){
        let xhr = new XMLHttpRequest();
        //using dummy data
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true); //true means we made it asynchronous
    
        //when data is fetched
        xhr.onload = function () {
            //check whether we got the response or not
            if (xhr.status === 200) {
                //we used JSON.parse so we will get response as a string
                let obj= JSON.parse(this.responseText);
                console.log(obj)

                let list = document.getElementById('list');
                let str="";
                for (key in obj){
                    str += `<li>${obj[key].name}   </li>`;
                }
                list.innerHTML=str;
            }
            else {
                console.log("Failed to get the data");
            }
        }
        //we also have to send the request
        xhr.send();
}

