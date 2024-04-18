var x, y, z;
var l = 0;
var e, f, g, h, i, j;
var range = 3;


function disabledButton(){
    const y2 = document.querySelector("#bt4");
    y2.disabled = true;
}

document.querySelector("#bt3").onclick = function () {
    var x = parseInt(Math.random() * range + 1);
    document.querySelector("#third").textContent = x;
    const y1 = document.querySelector("#bt3");
    y1.disabled = true;
    const y3 = document.querySelector("#bt4");
    y3.disabled = false;

};

document.querySelector("#bt4").onclick = function () {
    var y = parseInt(Math.random() * range + 1);
    document.querySelector(".four").textContent = y;
    l++;
    document.querySelector(".count1").textContent = l;

    z = document.querySelector("#third").textContent;
    e = parseInt(document.querySelector(".count").textContent);
    f = parseInt(document.querySelector(".count1").textContent);
    g = "Player 1 is winner   ";
    h = "Player 2 is winner   ";
    i = "Tie   ";
    if (f < e) {
        if (z == y) {
            disabledButton();

            console.log("Player 1 count = " + e);
            console.log("Player 2 count = " + f);
            document.querySelector(".res").textContent = h;
            document.querySelector(".res").classList.add("green");
        }
    
    }else if (e==f && y==z){
        disabledButton();
        document.querySelector(".res").textContent = i;
        document.querySelector(".res").classList.add("green");
    }
     else {
        disabledButton();
        document.querySelector(".res").textContent = g;
        document.querySelector(".res").classList.add("green");
    }

};