// start active Link

var btns = document.getElementsByClassName("btn");

 var currentLocation = location.href;

// console.log(btns[0].href);


// console.log(btns.length );
for (let i=0; i< btns.length; i++) {
    if(btns[i].href === currentLocation) {

        btns[i].className="text-blue-500"
    }    
}


// finish active link


// start crypatge

var s = document.getElementById("sumbiteCrypt");

methods

var inp = document.getElementById("searchTxt");
var inpl = document.getElementById("methods");


s.addEventListener('click', function() {
    console.log(inpl.value);
    console.log(inp.value);
})