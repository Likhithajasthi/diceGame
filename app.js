var total=0;
document.getElementById('name').textContent='0';
document.getElementById('totalscore').textContent='0';
function myName(){
    var dice= Math.floor(Math.random()*6)+1;
    console.log("the score is"+dice);
    /* document.querySelector('#name').textContent=dice;*/
    document.getElementById('name').innerHTML=dice;
    //adding the score
    if(dice!==1){
        //add elements
        total+=dice;
        document.getElementById('totalscore').textContent=total;
    }
    else{
        console.log("Invalid");
        nextPlayer();
    }
}