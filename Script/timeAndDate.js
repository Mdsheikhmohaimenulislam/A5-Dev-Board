// Current Date section..

const date = new Date().toDateString();

let storDate = document.getElementById('dates');

const currentDate = document.createElement("dcurrentDate");


 currentDate.innerText = `${date}`;

 storDate.appendChild(currentDate);





