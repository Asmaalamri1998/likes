var count = 3;
var countElement = document.querySelector("#count");
console.log( countElement);

function add(){
    count++;
    countElement.innerHTML = count + "  like(s)";
    console.log(count);
}