const age = parseInt (prompt ("how old are you?") );

console.log( isNaN (age));  // age가 NaN이 아니라는 뜻
// 숫자를 받으면 숫자로 표기하고, 숫자가 아닌 문자열을 받으면 NaN으로 표기한다

// console.log(typeof age, typeof parseInt("15") );    // typeof는 받은 값의 타입을 알려준다! parseInt는 string을 number로 바꿔준다!
// console.log(15, parseInt(age));
