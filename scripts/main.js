// document.querySelector('img').onclick = function(){
//     alert("You have pet the dog!");
// }

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dog-1.jpg'){
        myImage.setAttribute('src', 'images/dog-2.jpg');
    } else if(mySrc === 'images/dog-2.jpg') {
        myImage.setAttribute('src', 'images/dog-3.jpg');
    } else if(mySrc === 'images/dog-3.jpg'){
        myImage.setAttribute('src', 'images/dog-1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//Function that prompts the user for a name to be entered and edits the heading based on what is entered
function setUserName(){
    let myName = prompt("Please enter your name.");
    if(!myName || myName === null){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'This Website Is About Dogs, ' + myName;
    }
}

//Check for a previous stored name and use it, or prompt for one if there isn't
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'This Website Is About Dogs, ' + storedName;
}

//Call the setUserName method on a click
myButton.onclick = function(){
    setUserName();
}