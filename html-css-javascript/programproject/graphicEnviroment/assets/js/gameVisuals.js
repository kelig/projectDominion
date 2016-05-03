/** Created by Zeger on 04/04/2016. */

//Gekozen kaarten komen hier
var Deck = ["Cellar","Market","Militia","Mine","Moat","Remodel","Smithy","Village","Woodcutter","Workshop"];


//het deck wordt gemaakt en NORMAAL GEZIEN :p ook op de juiste plaats gezet, om de een of andere reden doet ie dat niet
var generateDeck = function(){

    for (var i = 0, len = Deck.length; i < len; i++) {
        var html = '<img>';

        var src = 'images/' + Deck[i].toLowerCase() + '.jpg';
        console.log(src);

        html += '<img alt="' + Deck[i] + '"  title="' + Deck[i] + '" src="' + src + '"/>';
        html += '<span class="counter">10</span>';
        html += '</img>';
        $("#left-card.card").append(html);

    }



};


//als je op een kaart klikt dat je kan kopen (links boven), dan komt die in de midden van het scherm. Deze code is nog niet af
var showBigCard = function(){
    var CardUrl = $(this).attr('src');
    $('#cardBoxedAr').removeClass('hide');

    var Cardhtml = '<img src="'+CardUrl+'"/>';



    $('#showCard').append(Cardhtml);

};
//de grote kaart van het scherm doen
var hideBigCard = function(){
    $('#cardBoxedAr').addClass('hide');
    $('#showCard').empty();

};




$(document).ready(function(){
    console.log("Ok!");
    generateDeck();
    $('#left-cards img').on('click',showBigCard);
    $('').on('click', hideBigCard)

});
