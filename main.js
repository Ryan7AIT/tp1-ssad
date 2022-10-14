// decalre constantes

const  allMethods = ["miroir", "affine", "decalage", "cesar"];


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

var sc = document.getElementById("sumbiteCrypt"); // button to crypt a message
var sdc = document.getElementById("sumbiteDeCrypt"); // button to decrypt a demessage


methods

var inp = document.getElementById("searchTxt"); // the original message
var inpA = document.getElementById("valueOfa"); // the original message
var inpB = document.getElementById("valueOfb"); // the original message
var inpN = document.getElementById("valueOfn"); // the original message

var inpl = document.getElementById("methods");
var result = document.getElementById("resultTxt"); // the descryptes label
var originalWord = document.getElementById("originalWord"); // the original label


var decryptedMessage = ""
originalWord.value = ""


result.value = decryptedMessage



// a function to show addtion inputs depend on the button


function yesnoCheck() {
    if (inpl.value == 1) {
        document.getElementById("invalueOfn").classList.add("hidden")
        document.getElementById("valueOfaAndb").classList.remove("hidden")
    } else if (inpl.value == 3) {
        document.getElementById("valueOfaAndb").classList.add("hidden")
        document.getElementById("invalueOfn").classList.remove("hidden")
    } else {
        document.getElementById("valueOfaAndb").classList.add("hidden")
        document.getElementById("invalueOfn").classList.add("hidden")
    }
}

sc.addEventListener('click', function() {
    // console.log("you choosed the methode: ");
    // console.log(allMethods[parseInt(inpl.value)]);
    // console.log("you choosed the text: ");
    // console.log(inp.value);

    if(inpl.value == 0) {
        decryptedMessage =  miroir(inp.value);
        originalWord.value = ""
        

    }else if(inpl.value == 1) {
        decryptedMessage =  affine(inp.value,inpA.value,inpB.value);
        originalWord.value = ""

    } else if(inpl.value == 2) {
        decryptedMessage =  decalage(inp.value);
        originalWord.value = ""
        
    } else {
        decryptedMessage =  cesar(inp.value,inpN.value);
        originalWord.value = ""


    }

    

    result.value = decryptedMessage


})

sdc.addEventListener('click', function() {
    // console.log("you choosed the methode: ");
    // console.log(allMethods[parseInt(inpl.value)]);
    // console.log("you choosed the text: ");
    // console.log(inp.value);

    if(inpl.value == 0) {
        decryptedMessage =  dmiroir(inp.value);
        

    }else if(inpl.value == 1) {
        decryptedMessage =  daffine(inp.value,inpA.value,inpB.value);
    } else if(inpl.value == 2) {
        decryptedMessage =  ddecalage(inp.value);
    } else {
        decryptedMessage =  dcesar(result.value,inpN.value);

    }

    

    originalWord.value = decryptedMessage


})


function miroir(message) {
    return "this is the resulat of crypting " +  message + " using MIROIR method"
}

function affine(message,a,b) {
    return "this is the resulat of crypting " +  message + " using affine| a and b:  " + a + "," + b
}

function decalage(message) {
    return "this is the resulat of crypting " +  message + " using DECALAGE  method"
}

function cesar(message,k) {

    dict = {}
    c1 = 0;
    c2 = 0;
    c=[];
    alphabet = ["a","b","c","d","e","f","g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];

    for(let i=0; i< alphabet.length; i++) {
        dict[alphabet[i]] = i

    }

    for(let n=0; n< message.length; n++) {
        c1 = Math.abs( parseInt(dict[message[n]]) + parseInt(k))
        
        c2 = c1 % 26
        c =  c + alphabet[c2]
    }

    return c

}



function dmiroir(message) {
    return "this is the resulat of decrypting " +  message + " using MIROIR method"
}

function daffine(message,a,b) {
    return "this is the resulat of decrypting " +  message + " using affine| a and b:  " + a + "," + b
}

function ddecalage(message) {
    return "this is the resulat of decrypting " +  message + " using DECALAGE  method"
}

function dcesar(message,k) {
    

    dict = {}
    c1 = 0;
    c2 = 0;
    c=[];
    alphabet = ["a","b","c","d","e","f","g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];

    for(let i=0; i< alphabet.length; i++) {
        dict[alphabet[i]] = i

    }

    for(let n=0; n< message.length; n++) {
        c1 = Math.abs( parseInt(dict[message[n]]) - parseInt(k))
        c2 = c1 % 26
        c =  c + alphabet[c2]
    }

    return c

}