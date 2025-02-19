// Check if there is an uppercase,lowercase, and a number
function validation(str){
    if(str !== str.toLowerCase()===true){
        if(str !== str.toUpperCase()===true){
            array1 = str.split("");
            if(array1.some(Number)===true){
            return true
            }
        }
    }
}

//Checks if strings are equal and the length is valid
function validatePassword(x,y){
    if(validation(x) === true && x===y && x.length>=8){
        return true;
    }else{
        return false;
    }
}

// Function to reverse the string
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}