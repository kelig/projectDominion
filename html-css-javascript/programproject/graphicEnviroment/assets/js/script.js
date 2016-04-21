/**
 * Created by Stijn on 22/03/2016.
 */


// je vangt het klik event op
//wat is de waarde van het data atrribuut
//op basis van de waarde zal je hide of niet toevoegen
var goToPAge;
goToPAge=function(){
    var getId = $(this).attr('id');
    switch (getId)
    {
        case "play":
            $("#firstPage").toggleClass('hide');
            $("#secondPage").toggleClass('hide');
            break;

        case "loadGame":
            $("#secondPage").toggleClass('hide');
            $("#loadGamePage").toggleClass('hide');
            searchGame();
            break;
        case "goBackSecondPage":
            $("#loadGamePage").toggleClass('hide');
            $("#secondPage").toggleClass('hide');
            deleteFoundGame();

            break;
        case "setUpNewGame":
            $("#secondPage").toggleClass('hide');
            $("#thirdPageNewGame").toggleClass('hide');
            break;
        case "twoPlayers":
            $("#thirdPageNewGame").toggleClass('hide');
            $("#fourthPageNewGame").toggleClass('hide');
            addplayers(2);
            break;
        case "threePlayers":
            $("#thirdPageNewGame").toggleClass('hide');
            $("#fourthPageNewGame").toggleClass('hide');
            addplayers(3);
            break;

        case "fourPlayers":
            $("#thirdPageNewGame").toggleClass('hide');
            $("#fourthPageNewGame").toggleClass('hide');
            addplayers(4);
            break;

        case "sendPlayers":
            $("#fourthPageNewGame").toggleClass('hide');
            $("#fifthPageNewGame").toggleClass('hide');
            break;

        case "submitNewDeck":
            $("#buildOwnDeckPage").toggleClass('hide');
            $("#sixtPageNewGame").toggleClass('hide');
            break;

        case "goBack":
            $("#buildOwnDeckPage").toggleClass('hide');
            $("#fifthPageNewGame").toggleClass('hide');
            break;

        case "changeConfig":
            location.reload();
            break;

    }

};





var sendPlayers;
sendPlayers = function(e){
    e.preventDefault();
    $("#fourthPageNewGame").toggleClass('hide');
    $("#fifthPageNewGame").toggleClass('hide');
};


//spelers worden automatisch toegevoegd naar wat je hebt gekozen
function addplayers(number){
    var amount=number;
    var html='';
    for(var i=1; i < amount+1; i++){
        html += '<label for="player'+i+'">';
        html += 'player'+i+'</label>';
        html += '</br>';
        html += '<input type="text" id="player'+i+'" placeholder="name">';
        html += '</br>';
    }

    $(".amountPlayers").append(html);

}

// kies het deck waarmee je zal spelen
var chooseDeck;
chooseDeck=function(){

    var getId = $(this).attr('id');
    switch (getId)
    {
        case "firstGame":
            alert('firstGame');
            break;
        case "bigMoney":
            alert('bigMoney');
            break;
        case "interaction":
            alert('interaction');
            break;
        case "villageSquare":
            alert('villageSquare');
            break;
        case "sizeDistortion":
            alert('sizeDistortion');
            break;
        case "makeOwnDeck":
            $('#fifthPageNewGame').toggleClass('hide');
            $('#buildOwnDeckPage').toggleClass('hide');

            break;
        

    }

};


//check hoeveel kaarten je hebt geselecteerd
var $allChecked = $("input[type=checkbox]");
$($allChecked).change(checkMaxNumber);

function checkMaxNumber() {
    var $ac = $(this),
        amount = $("input[type=checkbox]:checked").length;
    $("input[type=checkbox]:not(:checked)").prop("disabled", amount >= 10);

}



// een opgeslagen spel zoeken en tonen er kan maar 1 opgeslagen spel zijn
function searchGame(){
    var hello=0;
    if(hello >= 1){
        alert('dit is nog te doen met ajax')
    }
    else{
        var html2='<h2 class="noGame">';

        html2 += 'there was no saved game found';
        html2 += '</h2>';


        //html +='<input type="submit" value="next" id="sendPlayers">';
        $(".foundGame").append(html2);

    }

}
// delete de toegevoegde html als je terug gaat
function deleteFoundGame(){
    $(".noGame").remove();
}

$(document).ready(function(){

    $('button').on('click',goToPAge);
    $('#fifthPageNewGame').find('button').on('click',chooseDeck);


});
