/**
 * Created by Stijn on 22/03/2016.
 */



// als je op een link drukt zal je naar de volgende pagina gaan
var nextpage;
nextpage=function(e){
    e.preventDefault();


};


$(document).ready(function(){
    $('a').on('click',nextpage);


});