/**
 * Created by Stijn on 22/03/2016.
 */



// als je op een link drukt zal je naar de volgende pagina gaan

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


var goToPlayersFromSavedGame;
goToPlayersFromSavedGame=function(e){
    e.preventDefault();
    $("#savedGame").toggleClass('hide');
    $('#fourthpage').toggleClass('hide')

};


var goToLoadGame;
goToLoadGame=function(e){
    e.preventDefault();
    $("#secondpage").toggleClass('hide');
    $('#savedGame').toggleClass('hide')

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
    $("#fourthpage").toggleClass('hide');
    $('#fifthpage').toggleClass('hide');
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




$(document).ready(function(){
    testJavascript();
    $('#play').on('click',startGame);
    $('#newGame').on('click',goToPlayers);
    $('#loadGame').on('click',goToLoadGame);
    $('#makeOwnDeck').on('click',goToPlayersFromSavedGame);

    playerSelector();
    $('#sendPlayers').on('click',sendPlayers);

});

