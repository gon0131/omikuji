let userName;
let userResult;

userName = prompt("名前を教えてください")

if(userName == ""){
    userName = "名無し"
}

document.getElementById("name").innerHTML = userName;

let rand = Math.floor(Math.random()*5)

if (rand === 0){
    userResult = "大吉"
} else if (rand === 1){
    userResult = "中吉"
} else if (rand === 2){
    userResult = "小吉"
} else if (rand === 3){
    userResult = "吉"
} else if (rand === 4){
    userResult = "凶"
}

document.getElementById("result").innerHTML = userResult;

