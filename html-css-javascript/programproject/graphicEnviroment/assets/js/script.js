/**
 * Created by Stijn on 22/03/2016.
 */



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
	    alert(JSON.stringify(data));
	});
	request.fail(function (jqXHR, textStatus) {
	    alert(xhr.status);
	    alert(throwError)
	});
	
	
 
};


//met ajax deck naar servlet zenden

var SendDeck;
SendDeck = function(deck){
	
	var request = $.ajax({ cache: false,
	    url: "/DominionServer/DominionServlet",
	    data: { operation: 'SendDeck',
	    		deck: deck
	          }
	});

	request.done(function (data) {
	    alert(JSON.stringify(data));
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
        	SendDeck('First Game');
        	goToLastPage();
            break;
        case "bigMoney":
        	SendDeck('Big Money');
        	goToLastPage();

            break;
        case "interaction":
        	SendDeck('Interaction');
        	goToLastPage();

            break;
        case "villageSquare":
        	SendDeck('Village Square');
        	goToLastPage();

            break;
        case "sizeDistortion":
        	SendDeck('Size distortion');
        	goToLastPage();

            break;
        case "makeOwnDeck":
        	SendDeck(getId);
        	
            $('#fifthPageNewGame').toggleClass('hide');
            $('#buildOwnDeckPage').toggleClass('hide');

            break;
        

    }

};
// ga naar de laatste pagina

var goToLastPage;
goToLastPage = function(){
    $('#fifthPageNewGame').toggleClass('hide');
    $('#sixtPageNewGame').toggleClass('hide');
}



//zorgt ervoor dat er niet meer dan tien karten kan selecteren
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
// delete de toegevoegde html als je terug gaat
function deleteNoFoundGame(){
    $(".noGame").remove();
}

$(document).ready(function(){

    $('button').on('click',goToPAge);
    $('#fifthPageNewGame').find('button').on('click',chooseDeck);


});
