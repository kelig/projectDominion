/**
 * Created by Zeger on 04/04/2016.
 */


var divGameView;
$('#divGame').show();
var coins = 0;
var buys = 1;
var actions = 1;

var actionButtons = function(){
    document.getElementById('coins').innerHTML=coins;
    document.getElementById('buys').innerHTML=buys;
    document.getElementById('actions').innerHTML=actions;

};

//Gekozen kaarten komen hier
var Deck = ["Cellar","Market","Militia","Mine","Moat","Remodel","Smithy","Village","Woodcutter","Workshop"];
var Coins = ["Curse","Estate","Copper","Duchy","Silver","Province","Gold"];
var Hand = ["Estate","Estate","Copper","Copper","Copper"];


//de gekozen kaarten worden op de juiste plaats gezet
var generateDeck = function(){

    for (var i = 0, len = Deck.length; i < len; i++) {

        var src = 'images/' + Deck[i].toLowerCase() + '.jpg';
        console.log(src);

        var html = '<div class="card"><img alt="' + Deck[i] + '"  title="' + Deck[i] + '" src="' + src + '"/>';
        html += '<span class="counter">10</span></class>';
        html += '<span class="buy">+</span></class>';

        //html += '</img>';
        console.log(html);
        $("#left-cards").append(html);

    }

};


//de coins kaarten worden ingevoegd en  ook op de juiste plaats gezet
var generateCoins = function(){

    for (var i = 0, len = Coins.length; i < len; i++) {

        var src = 'images/' + Coins[i].toLowerCase() + '.jpg';
        console.log(src);

        var html = '<div class="card"><img alt="' + Coins[i] + '"  title="' + Coins[i] + '" src="' + src + '"/>';
        html += '<span class="counter">15</span></class>';
        html += '<span class="buy">+</span></class>';

        //html += '</img>';
        console.log(html);
        $("#right-cards").append(html);
    }

};

var generateHand = function(){

    for (var i = 0, len = Hand.length; i < len; i++) {

        var src = 'images/' + Hand[i].toLowerCase() + '.jpg';
        console.log(src);

        var html = '<div class="card"><img alt="' + Hand[i] + '"  title="' + Hand[i] + '" src="' + src + '"/>';

        //html += '</img>';
        console.log(html);
        $("#cards-hand").append(html);

    }

};

//als je op een kaart klikt dat je kan kopen (links boven), dan komt die in de midden van het scherm, met een overlay er rond
var showBigCard = function(){
    var CardUrl = $(this).attr('src');
    $('#cardBoxedAr').removeClass('hide');
    $('#overlay').removeClass('hide');

    var Cardhtml = '<img src="'+CardUrl+'"/>';
    $('#showCard').append(Cardhtml);

};
//de grote kaart van het scherm doen
var hideBigCard = function(){
    $('#cardBoxedAr').addClass('hide');
    $('#overlay').addClass('hide');

    $('#showCard').empty();
};




$(document).ready(function(){
    console.log("Ok!");
    generateDeck();
    generateCoins();
    generateHand();
    $('#left-cards img').on('click',showBigCard);
    $('#cardBoxedAr').on('click', hideBigCard);
    $('#overlay').on('click', hideBigCard);
    actionButtons();

});
//Disable f5 & f6 key & drag
$(document).on("keydown", function (e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); });
$(document).on("keydown", function (e) { if ((e.which || e.keyCode) == 117) e.preventDefault(); });
$('html').on('dragstart', function(event) { event.preventDefault(); });
