function sayHello(nameOfPerson, age) {
    console.log("Hi my name is " + nameOfPerson + " I'm " + age + " years old");
}
// function이란 반복해서 사용할 수 있는 코드조각이다.
// 실행할 때마다 블록 안에 작성된 코드가 실행되는것 

sayHello("Chloe", 22);
sayHello("Jason", 18);
sayHello("Dyke", 42); 
//sayHello()의 괄호( {} ) 안을 실행하게 만든다

function plus (a, b){
    console.log(a + b);
}
plus(2, 4);
