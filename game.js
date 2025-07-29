const dice = document.getElementById('dice-btn');

function dicegame() {
    //DICE 1
    var randomDice = Math.floor((Math.random() * 6) + 1);
    var diceLocation =  "Dice-" + randomDice + ".png.png";
    //var diceLocation = `/Dice project/Numbers/ Dice-${randomDice}.png.png`;
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", diceLocation);

    //DICE 2
    var randomDice2 = Math.floor((Math.random() * 6) + 1);
    var diceLocation2 = "Dice-" + randomDice2 + ".png.png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", diceLocation2);

    if (randomDice > randomDice2){
        document.querySelector("h1").innerHTML="Player 1 Win!";
    }

    else if (randomDice < randomDice2){
        document.querySelector("h1").innerHTML="Player 2 Win!";
    }

    else if (randomDice = randomDice2){
        document.querySelector("h1").innerHTML="Match Draw!";
    }

    else{
        domcument.querySelector("h1").innerHTML=" Something Error..."
    }

        
}
