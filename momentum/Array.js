const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"];
 
//배열에서 요소 가져오기
console.log(daysOfWeek);

// 배열에서 특정 순서에 해당하는 요소 가져오기
// 첫 요소 순서는 번호가 0부터 부여된다. 제일 첫번째 요소는 0번째가 되는 것, (ex> 0 1 2 3 4 5) 
console.log(daysOfWeek[3]); //이 경우에는 4번째 요소인 thu가 호출되는 것

//배열에 요소 추가하기 (괄호안의 요소가 추가되어진 배열이 하나 더 만들어진다)
daysOfWeek.push("sun");
console.log(daysOfWeek);