/**
 * Created by Stijn on 12/05/2016.
 */


function buyCall(){
    card=$(this).data('card');
    var request = $.ajax({ cache: false,
        url: "/DominionServer/DominionServlet",
        data: { operation: 'buy',
            card: card
        }
    });

    request.done(function (data) {
        console.log(card)
    });
    request.fail(function (jqXHR, textStatus) {
        alert('an error occurred while communicating with the server, please reload the page and try again')
    });


}


function handCall(){
    card=$(this).data('card');
    var request = $.ajax({ cache: false,
        url: "/DominionServer/DominionServlet",
        data: { operation: 'hand',
            card: card
        }
    });

    request.done(function (data) {
        console.log(card)
    });

    request.fail(function (jqXHR, textStatus) {
        alert('an error occurred while communicating with the server, please reload the page and try again')
    });


}

function endTurn(){
    var request = $.ajax({ cache: false,
        url: "/DominionServer/DominionServlet",
        data: { operation: 'endTurn',

        }
    });

    request.done(function (data) {
        console.log(card)
    });
    request.fail(function (jqXHR, textStatus) {
        alert('an error occurred while communicating with the server, please reload the page and try again')
    });


}


$(document).ready(function(){
    $('.buy').on('click',buyCall);
    $("#cards-hand").find(".card").on('click',handCall);
    $('#endTurn').on('click',endTurn);
});
