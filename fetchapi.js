let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');


function getData() {
    console.log("Inside first then");
    fetch('https://api.github.com/users').then((response) => {
        return response.json();//now it will return the data as json because we will get data as string and it will change it into json if the data has correct json syntax
    }).then((data) => {
        console.log(data);
    })
}
// getData();

//for post request
function postData() {
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harry123","salary":"123","age":"23"}';
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response => response.json()).then(data =>
        console.log(data)
    )
}

postData();
