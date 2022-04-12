const age = parseInt (prompt ("how old are you?") );

// console.log( isNaN (age));  age가 NaN이 아니라는 뜻
// 숫자를 받으면 숫자로 표기하고, 숫자가 아닌 문자열을 받으면 NaN으로 표기한다

// console.log(typeof age, typeof parseInt("15") );    // typeof는 받은 값의 타입을 알려준다! parseInt는 string을 number로 바꿔준다!
// console.log(15, parseInt(age));

if(isNaN (age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18){
    console.log("You are too young");
}
  else if (age >= 18 && age <= 50){
    console.log("You can drink");
} 
  else if (age >= 50 && age <= 80){
    console.log("You should do exercise");
}  
   else if (age > 100) {
    console.log("Are you sure?...");
 } 
else {
    console.log("Thank you for writing your age");
}   

// 입력된 값이 숫자가 아니라면 (isNaN) if절을 실행, 
// 나이가 18세 미만이라면 else if절을 , 숫자가 맞다면 else 절을 실행하도록 함 