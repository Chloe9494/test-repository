const a = 5;
let isChloefat = true;

isChloefat = false;
//const와 let의 차이 = let은 업데이트를 할 수 있다는 것
//variable을 수정할 때는 앞에 let을 붙일 필요는 없다.(생성하는 것이 아니고 수정하는 것이기 때문에)

//var는 최대한 사용하지 않는 것이 좋다. 

const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy[2]);
toBuy[2] = "water";            // 배열의 2번 인덱스에 water로 값을 설정한 것 
console.log(toBuy[2]);
toBuy.push("one");             // 배열에 새로운 요소를 추가
                               // 배열에 새롭게 추가된 요소는 제일 마지막으로 들어간다.



const player = {
    name: "chloe",
    age: 22
}

console.log(player); 
player.name = "chloela"     //player에서 특정 item을 가져오는 법
console.log(player);
player.sexy= "soon";
console.log(player);