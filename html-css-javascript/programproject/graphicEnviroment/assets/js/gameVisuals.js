/**
 * Created by Zeger on 04/04/2016.
 */

var coins = 0;
var buys = 1;
var actions = 1;

var actionButtons = function(){
    document.getElementById('#coins').innerHTML=coins;
    document.getElementById('#buys').innerHTML=buys;
    document.getElementById('#actions').innerHTML=actions;

};



//Gekozen kaarten komen hier
var Deck = ["Cellar","Market","Militia","Mine","Moat","Remodel","Smithy","Village","Woodcutter","Workshop"];
var Coins = ["Curse","Estate","Copper","Duchy","Silver","Province","Gold"];
var Hand = ["Estate","Estate","Copper","Copper","Copper"];


//de gekozen kaarten worden op de juiste plaats gezet
var generateDeck = function(){

    for (var i = 0, len = Deck.length; i < len; i++) {

        var src = 'images/' + Deck[i] + '.jpg';

        var html = '<div class="card"><img alt="' + Deck[i] + '"  title="' + Deck[i] + '" src="' + src + '"/>';
        html += '<span class="counter">10</span>';
        html += '<span class="buy" data-card="'+Deck[i]+'">+</span>';

        $("#left-cards").append(html);
    }
};



//de coins kaarten worden ingevoegd en  ook op de juiste plaats gezet
var generateCoins = function(){

    for (var i = 0, len = Coins.length; i < len; i++) {

        var src = 'images/' + Coins[i] + '.jpg';

        var html = '<div class="card"><img alt="' + Coins[i] + '"  title="' + Coins[i] + '" src="' + src + '"/>';
        html += '<span class="counter">15</span>';

        html += '<span class="buy" data-card="' + Coins[i] + '">+</span>';

        $("#right-cards").append(html);
    }

};


var generateHand = function(){

    for (var i = 0, len = Hand.length; i < len; i++) {

        var src = 'images/' + Hand[i] + '.jpg';

        var html = '<div class="card" data-card="' + Hand[i] + '">';
        html+='<img alt="' + Hand[i] + '"  title="' + Hand[i] + '" src="' + src + '"/></div>';

        $("#cards-hand").append(html);
    }
};

var cardToPlayfield = function() {
    var CardUrl = $(this).attr('src');

    var Cardhtml = '<div class="card"><img src="'+CardUrl+'"/>';
    // waarde van de card bij coins tellen
    switch($(this).parent().data('card')){
        case "Copper":
            coins+=1;
            break;
        case "Silver":
            coins += 3;
            break;
        case "Gold":
            coins += 6;
    }
    console.log(coins);

    $("#playfield .card").css('left', '+=40%');

    $( Cardhtml).appendTo( $( ".playfield" ) );

    $(this).closest('.card').remove();
    var html = '<p>Coins:</p>';
    html += '<span id="coins">' + coins +  '</span>';
    $(".info .coins").html(html);


};



//als je op een kaart klikt dat je kan kopen (links boven), dan komt die in de midden van het scherm, met een overlay er rond
var showBigCard = function(){
    var CardUrl = $(this).attr('src');
    $('#cardBoxedAr').removeClass('hide');
    $('#overlay').removeClass('hide');
    $('#overlay').css({"background-color" : "#000000 ", "opacity":"0.5"});

    var Cardhtml = '<img src="'+CardUrl+'"/>';
    $('#showCard').append(Cardhtml);

};
//de grote kaart van het scherm doen
var hideBigCard = function(){
    $('#cardBoxedAr').addClass('hide');
    $('#overlay').addClass('hide');

    $('#showCard').empty();
};


//tutorial op het scherm tonen
var showTutorialOverlay = function(){

    $('#overlayTutorial').removeClass('hide');
    $('#overlay').removeClass('hide').css({"background-color" : "#F0F0F0 ", "opacity":"0.2"});

    console.log("hallo");

};
//tutorial van het scherm
var hideTutorialOverlay = function(){

    $('#overlayTutorial').addClass('hide');
    $('#overlay').addClass('hide');

    console.log("hallo2");
};

$(document).ready(function(){
    console.log("Ok!");
    generateDeck();
    generateCoins();
    generateHand();
    $('#cards-hand img').on('click',cardToPlayfield);
    $('#left-cards img').on('click',showBigCard);
    $('#cardBoxedAr').on('click', hideBigCard);
    $('#overlay').on('click', hideBigCard );

    $('#tutorial').on('click', showTutorialOverlay);
    $('#overlay').on('click', hideTutorialOverlay);


});
//Disable f5 & f6 key & drag
$(document).on("keydown", function (e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); });
$(document).on("keydown", function (e) { if ((e.which || e.keyCode) == 117) e.preventDefault(); });
$('html').on('dragstart', function(event) { event.preventDefault(); });
