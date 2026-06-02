let player1 = "X";
let player2 = "O";
let player = true;
let gamewin = "player1";
const w = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let mention = document.querySelector(".playerchoise");
let disable = document.querySelectorAll(".chbtn button");
let choiceRemove = document.querySelector(".choice");
let layoutDisplay = document.querySelector(".layout1");
let buttons=document.querySelectorAll(".inbtn");
function selected(btn) {
    player1 = btn.innerText;
    if (player1 === "O") {
        player2 = "X";
    }
    else {
        player2 = "O";
    }
    mention.children[0].innerText = mention.children[0].innerText + " " + player1;
    mention.children[1].innerText = mention.children[1].innerText + " " + player2;
    for (d of disable) {
        d.disabled = true;
    }
    choiceRemove.style.display = "none";
    layoutDisplay.classList.remove("layout1");
    layoutDisplay.classList.add("layout");
}
function play(btn) {
    let div = btn.querySelector(".inbtn");
    if (div.innerHTML !== "") {
        return;
    }
    let p = document.createElement("p");
    if (player) {
        p.innerText = player1;
        gamewin = "player1";
        player = false;
    }
    else {
        p.innerText = player2;
        gamewin = "player2";
        player = true;
    }
    div.appendChild(p);
    win(p.innerText);
}
function win() {
    let div = document.querySelectorAll(".inbtn");
    for (list of w) {
        let v1 = div[list[0]].innerText;
        let v2 = div[list[1]].innerText;
        let v3 = div[list[2]].innerText;
        if (v1 !== "" && v2 !== "" && v3 !== "") {
            if (v1 === v2 && v2 === v3) {
                console.log("winner", v1);
                let gamescreen = document.querySelector(".layout");
                let winscreen = document.querySelector(".winner");
                winscreen.children[1].innerText = gamewin;
                gamescreen.classList.toggle("layout1");
                winscreen.classList.toggle("show");
                if(gamewin=== "player1")
                {
                    winscreen.style.color="red";
                }
                else{
                    winscreen.style.color="green";
                }
            }
        }
    }
}
function reset() {
    player = true;
    let gamescreen = document.querySelector(".layout");
    let winscreen = document.querySelector(".winner");
    if (winscreen.classList.value === "winner show") {
        winscreen.classList.toggle("show");
    }
    else {
        gamescreen.classList.toggle("layout1");
    }
    choiceRemove.style.display = "flex";
    mention.children[0].innerText = mention.children[0].innerText.replace(player1,"");
    mention.children[1].innerText = mention.children[1].innerText.replace(player2,"");
    for (let d of disable) {
        d.disabled = false;
    }
    
    for(let btn of buttons)
    {
        btn.innerHTML="";
    }
}


