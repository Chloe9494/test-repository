// const playerName = "chloe";
// const playerPoints = "1994";
// const playerTall = true;
// const playerFat = "little bit";

const player = {
    name: "chloe",
    points: 10,
    fat: true,
};
console.log(player);
player.fat = false;
//이 경우엔 constant가 수정된 것이 아니라(CUZ constant는 수정될 수 없기 때문)
//Object 안의 정보를 수정하게 되는 것이다.

// console.log(player.name); 
// console.log(player["name"]);  
// 둘은 같은 결과값을 반환한다

console.log(player);
player.lastName ="potato";  //plyer.property
player.points = 15;
console.log(player);


console.log(player);
player.points = player.points +15;
console.log(player.po);

console.log(player);
player.height = player.points +20;
console.log(player.po);