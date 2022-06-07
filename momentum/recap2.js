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
}; //계산기 

calculator.plus(2,3);
calculator.minus(2,3);
calculator.times(2,3);
calculator.divide(2,3);
calculator.power(2,3);

//각각 정해져있는 공식을 실행하게 함


const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);



const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult, 10); 
const timesResult = calculator.times(10, minusResult);
const divedeResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divedeResult, minusResult);