const reverseString = function(string) {
    if (string === "")
        return ""

    let stringLen = string.length-1;
    let reversed = "";
    while (stringLen){
        reversed += string[stringLen];
        --stringLen;
    }
    reversed += string[0];
    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
