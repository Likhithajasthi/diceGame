
/*
var total;
total=0;
document.getElementById('name').textContent='0';
document.getElementById('totalscore').textContent='0';
document.getElementById('player2').textContent='0';
document.getElementById('score2').textContent='0';

function myName() {
    var dice = Math.floor(Math.random() * 6) + 1;
    console.log("the score is" + dice);
    /!* document.querySelector('#name').textContent=dice;*!/
    document.getElementById('name').innerHTML = dice;
    /!*diceDOM.style.display='block';*!/
    //adding the score
    if (dice !== 1) {
        //add elements
        total += dice;
        document.querySelector('tscore').textContent = total;
    } else {

    }


}*/
var total,scores,activeplayer;
    scores[0,0];
    total=0;
    activeplayer=0;
    document.getElementById('name').textContent='0';
    document.getElementById('totalscore').textContent='0';
    function myName() {
        var dice = Math.floor(Math.random() * 6) + 1;
        console.log("the score is" + dice);
        document.getElementById('name').innerHTML = dice;
        if (dice !== 1) {
            //add elements
            total += dice;
            document.getElementById('totalscore').textContent=total;
        } else {
           console.log("invalid")
        }

    }