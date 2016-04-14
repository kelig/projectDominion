/**
 * Created by Stijn on 11/01/2016.
 */

var toppings = ['beef', 'cheddar', 'cucumber', 'emmentaler', 'salad', 'tomato'];
var toppinglist = ' ';
//buttons toevoegen voor toppings
var toppingkeuze;
toppingkeuze=function() {
    for (var i = 0, len = toppings.length; i < len; i++) {
        var html = '<a class="';
        html += toppings[i]+'">';
        html +=toppings[i];
        html +='</a>';
        $(".buttons").append(html);
    }
};

//topping toegoegen aan de hamburger
var toppingtoevoegen;
toppingtoevoegen=function(){
    var topping = $(this).attr('class');
    console.log(topping);
    var html2 = '<img src="images/';
    html2+=topping;
    html2+='.svg"';
    html2+='alt="' +topping +'" title="'+topping+'"';
    html2+='/>';
    $(".toppings").append(html2);

    toppinglist+=topping+' ';
};

//als je op enter your details klikt wordt de volgende stap weergegeven
var next;
next=function(e){
    e.preventDefault();
    $('.cf').removeClass('first');
    $('#second').addClass('first').addClass('cf');

};


// het versturen van de gegevens
var versturen;
versturen=function(e) {
    e.preventDefault();
    //ga naar de volgende pagina
    $('.cf').removeClass('first');
    $('#third').addClass('first').addClass('cf');
    storage();

};

//opslaan gegevens
var storage;
storage=function(){
    // welk soort hamburger is het
var id=$('input[type="radio"]').attr('id');
    switch (id) {
        case 'Regular':
            soort='Regular';
            break;
        case 'Organic':
            soort='Organic';
            break;
        case 'Supersize':
            soort='Supersize';
    }
// zet alle gegevens in een item
    var item = {
        naam: $('#Name').val(),
        email: $('#email').val(),
        adres: $('#address').val(),
        naamHamburger: $('#naamhamburger').val(),
        typeHamburger: soort,
        toppings: toppinglist

    };
    // steek de hamburger in localstorage
    naamstorage=item.naamHamburger;
    console.log(item);
    if (typeof(Storage) !== "undefined") {

        localStorage.setItem(naamstorage, JSON.stringify(item));

    }
    else {
        window.alert('Sorry! No Web Storage support...');
    }
};

/**
var GemaakteHamburgers;
GemaakteHamburgers=function(){
// hamburger uit localstorage halen

    var hamburger = JSON.parse(localStorage.getItem());
    // hamburgers toevoegen onderaan
    console.log(hamburger);
    var klasse;
    if( hamburger.typehamburger == Organic){
        klasse='o'
    }
    if (hamburger.typehamburger == Supersize) {
            klasse = 's'
    }
    else{
    klasse=""
    }

    var html3='<li class="'+klasse+'">';
    html3+=hamburger;
    html3+='</li>';
    $('aside ul').append(html3);


};
**/

$(document).ready(function(){
    toppingkeuze();
    //GemaakteHamburgers();
    $('.buttons a').on('click',toppingtoevoegen);
    $('.next').on('click',next);
    $("#versturen").on('click',versturen);

});
