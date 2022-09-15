const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 || num2 < 0)
        return "ERROR";
    else if (typeof num1 !== "number" || typeof num2 !== "number") 
        return "ERROR";
    else{
        let i = num1;
        let j = num2;
        if (num1 > num2){
            i = num2;
            j = num1;
        }

        for (;i<=j; ++i)
            sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
