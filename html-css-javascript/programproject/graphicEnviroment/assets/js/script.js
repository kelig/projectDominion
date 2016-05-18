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
            sendPlayers();
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




/*
$('#sendPlayers').click(function(){
if($.trim($('#player').val()) == ''){
    alert('Input can not be left blank');
}
});
*/


// met ajax de spelers verzenden naar de servlet.
var sendPlayers;
sendPlayers = function(){

    var request = $.ajax({ cache: false,
        url: "/DominionServer/DominionServlet",
        data: { operation: 'sendPlayers',
            player1:$('#player1').val(),
            player2:$('#player2').val(),
            player3:$('#player3').val(),
            player4:$('#player4').val()
        }
    });

    request.done(function (data) {
        console.log( 'players are now sent');
    });
    request.fail(function (jqXHR, textStatus) {
        alert('Unfortunatly the server is down. Please reload the page and try again');
    });



};

var SendDeck;
SendDeck = function(deck){

    var request = $.ajax({ cache: false,
        url: "/DominionServer/DominionServlet",
        data: { operation: 'SendDeck',
            deck: deck
        }
    });

    request.done(function (data) {
        console.log('send deck: '+ deck)
    });
    request.fail(function (jqXHR, textStatus) {
        alert(xhr.status);
        alert(throwError)
    });



};

var startGame;
startGame=function(){
    var request = $.ajax({ cache: false,
        url: "/DominionServer/DominionServlet",
        data: { operation: 'startGame',
            deck: deck
        }
    });

    request.done(function (data) {
        console.log(deck)
    });
    request.fail(function (jqXHR, textStatus) {
        alert(xhr.status);
        alert(throwError)
    });


};




//spelers worden automatisch toegevoegd naar wat je hebt gekozen
function addplayers(number){
    var amount=number;
    var html='';
    for(var i=1; i < amount+1; i++){
        html += '<label for="player'+i+'">';
        html += 'player'+i+'</label>';
        html += '</br>';
        html += '<input type="text" id="player'+i+'" autocomplete="off" maxlength="20"  placeholder="Name" >';
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
            SendDeck(getId);
            goToLastPage();
            break;
        case "bigMoney":
            SendDeck(getId);
            goToLastPage();

            break;
        case "interaction":
            SendDeck(getId);
            goToLastPage();

            break;
        case "villageSquare":
            SendDeck(getId);
            goToLastPage();

            break;
        case "sizeDistortion":
            SendDeck(getId);
            goToLastPage();

            break;
        case "makeOwnDeck":
            SendDeck(getId);

            $('#fifthPageNewGame').toggleClass('hide');
            $('#buildOwnDeckPage').toggleClass('hide');

            break;


        }

};



//zorgt ervoor dat er niet meer dan tien kaarten kan selecteren
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


        $(".foundGame").append(html2);

    }

}

var goToLastPage;
goToLastPage = function(){
            $('#fifthPageNewGame').toggleClass('hide');
            $('#sixtPageNewGame').toggleClass('hide');
};

// delete de toegevoegde html als je terug gaat
function deleteFoundGame(){
    $(".noGame").remove();
}

var showChoices = function showMyChoices() {
        $(":checkbox").change(function(){
            var checkboxIDs = [];
            $(":checkbox:checked").each(function(index){
                checkboxIDs.push($(this).attr('id'));
            });

            console.log(checkboxIDs);

        });

};

//Na 7,5 seconden verdwijnt de footer
setTimeout(function() {
    $('footer').fadeOut('fast');
}, 7500); // <-- time in milliseconds


$(document).ready(function(){

    $('button').on('click',goToPAge);
    $('#fifthPageNewGame').find('button').on('click',chooseDeck);
    $('input').attr('autocomplete','off');
    showChoices();

});

//Disable f5 & f6 key & drag
$(document).on("keydown", function (e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); });
$(document).on("keydown", function (e) { if ((e.which || e.keyCode) == 117) e.preventDefault(); });
$('html').on('dragstart', function(event) { event.preventDefault(); });
