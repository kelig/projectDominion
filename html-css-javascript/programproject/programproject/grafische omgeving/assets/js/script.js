/**
 * Created by Stijn on 22/03/2016.
 */



var startGame;
startGame=function(e){
    e.preventDefault();
    $("#firstpage").toggleClass('hide');
    $("#secondpage").toggleClass('hide');
    $("footer").toggleClass('hide');
};


var goToPlayers;
goToPlayers=function(e){
    e.preventDefault();
    $("#secondpage").toggleClass('hide');
    $('#thirdpageNewGame').toggleClass('hide')

};

var goToLoadGame;
goToLoadGame=function(e){
    e.preventDefault();
    $("#secondpage").toggleClass('hide');
    $('#pageSavedGame').toggleClass('hide')

};


var playerScreenFive;
playerScreenFive=function(e){
    e.preventDefault();
    $("#thirdpageNewGame").toggleClass('hide');
    $('#fourthpage').toggleClass('hide')
    $('#extraPlayerOne').toggleClass('hide')
    $('#extraPlayerTwo').toggleClass('hide')
    $('#extraPlayerThree').toggleClass('hide')

};
var playerScreenFour;
playerScreenFour=function(e){
    e.preventDefault();
    $("#thirdpageNewGame").toggleClass('hide');
    $('#fourthpage').toggleClass('hide')
    $('#extraPlayerOne').toggleClass('hide')
    $('#extraPlayerTwo').toggleClass('hide')

};
var playerScreenthree;
playerScreenthree=function(e){
    e.preventDefault();
    $("#thirdpageNewGame").toggleClass('hide');
    $('#fourthpage').toggleClass('hide')
    $('#extraPlayerOne').toggleClass('hide')
};

var playerScreentwo;
playerScreentwo=function(e){
    e.preventDefault();
    $("#thirdpageNewGame").toggleClass('hide');
    $('#fourthpage').toggleClass('hide')
};

var sendPlayers;
sendPlayers=function(e){
	e.preventDefault();
    $("#fourthpage").toggleClass('hide');
    $('#fifthpage').toggleClass('hide');
};


var goBack;
goBack=function(e){
	$("#pageSavedGame").toggleClass('hide');
    $('#secondpage').toggleClass('hide');
};

var startLoadedGame;
startLoadedGame=function(e){
	console.log('je moe nog altijd ajax doen');
};




var testJavascript=function(){
    alert('this website is now online');
};

//collection of functions for choosing players
var playerSelector;
playerSelector=function(){
    $('#twoPlayers').on('click',playerScreentwo);
    $('#threePlayers').on('click',playerScreenthree);
    $('#fourPlayers').on('click',playerScreenFour);
    $('#fivePlayers').on('click',playerScreenFive);
    
};



var chooseDeck;
chooseDeck=function(e){
	e.preventDefault();
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
		   $('#fifthpage').toggleClass('hide');
		   $('#buildOwnDeckPage').toggleClass('hide');
		   
		   break;
	   default:
	}
	
};
/**
 * Maximum 10 aanduiden met checkbox /START
 */

var $allChecked = $("input[type=checkbox]");
$("input[type=checkbox]").change(checkMaxNumber);

function checkMaxNumber() {
    var $ac = $(this),
        amount = $("input[type=checkbox]:checked").length;
    $("input[type=checkbox]:not(:checked)").prop("disabled", amount >= 10);

}

/**
 * Maximum 10 aanduiden met checkbox /END
 */

var startgame;
startgame=function(e){
	e.preventDefault();
	
};




$(document).ready(function(){
    testJavascript();
    $('#play').on('click',startGame);
    $('#newGame').on('click',goToPlayers);
    $('#loadGame').on('click',goToLoadGame);
    $('#goBack').on('click',goBack);
    $('#playGame').on('click',startLoadedGame);
    playerSelector();
    $('#sendPlayers').on('click',sendPlayers);
    $('a').on('click',chooseDeck);
    $('#buildOwnDeckPage a').on('click',addtodeck);
    $('#readyYes').on('click',startgame);

    /*Zoom the screen out to 80% */
    $('body').css('zoom','80%'); /* Webkit browsers */
    $('body').css('zoom','0.8'); /* Other non-webkit browsers */
    $('body').css('-moz-transform',scale(0.8, 0.8)); /* Moz-browsers */
});
