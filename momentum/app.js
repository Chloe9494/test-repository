const calculator = {
    plus : function(a, b){
        console.log(a + b)
    }, 
    minus : function(a, b){
        console.log(a - b)
    },
    times : function(a, b){
        console.log(a * b)
    },
    divide : function(a, b){
        console.log(a / b)
    },
    power : function(a, b){
        console.log(a ** b)
    },
};

calculator.plus(2,3);
calculator.minus(2,3);
calculator.times(2,3);
calculator.divide(2,3);
calculator.power(2,3);




const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

const calculator = {
    plus: function (2, 3){
        return 5;
    },
};

const plusResult = calculator.plus(2,3);
console.log(plusResult);