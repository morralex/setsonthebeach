// var queryURL = 'https://eventful.com/events/&app_key=Vwxn85pQjddWRWhV';
// // Vwxn85pQjddWRWhV

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response){
//     console.log(response);
// });

var googleMapsContainer = $('.google-maps-container')

$(document).ready(function () {
    mainContainerP2.hide()
    mainContainerCategories.hide();
    googleMapsContainer.hide();
    $('.food-toggle-wrapper').hide();
})




var mainContainerP1 = $('.main-container-p1');
var mainContainerP2 = $('.main-container-p2');

var mainContainerCategories = $('.main-container-categories')

var foodBtn = $('#foodBtn');
var activitiesBtn = $('#activitiesBtn');
var eventsBtn = $('#eventsBtn');
var outdoorsBtn = $('#outdoorsBtn');

foodBtn.on('click', function () {
    $('.category-btns-main').hide();
    $('.food-toggle-wrapper').show();
})
activitiesBtn.on('click', function () {
    $('.category-btns-main').hide();
    $('.activities-toggle-wrapper').show();
})
eventsBtn.on('click', function () {
    $('.category-btns-main').hide();
    $('.events-toggle-wrapper').show();
})
outdoorsBtn.on('click', function () {
    $('.category-btns-main').hide();
    $('.outdoors-toggle-wrapper').show();
})

//-------- DATE: Today ---------
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

var searchLocationBtn = $('#locationSearchBtn');
var homeBtn = $('#homeBtn');

homeBtn.on('click', function () {
    $('.main-container-p1').hide();
    mainContainerP2.show();
    googleMapsContainer.hide();

})

searchLocationBtn.on('click', function () {
    mainContainerP2.hide();
    $('.main-preference-wrapper').show();
    $('.select-preference-page').show();
    mainContainerCategories.show();
    googleMapsContainer.hide();

    setTimeout(function () {
        $('.dot-1').show();
    }, 500)
    setTimeout(function () {
        $('.dot-2').show();
    }, 1000)
    setTimeout(function () {
        $('.dot-3').show();
    }, 1500)

    setTimeout(function () {

        mainContainerCategories.show();
        $('.select-preference-page').hide();
    }, 2300);

})

// -------------Activity buttons---------------

var bowlingBtn = $('.bowling');
var racingBtn = $('.racing');
var arcadeBtn = $('.arcade');
var golfBtn = $('.golf');
var movieBtn = $('.movie');

bowlingBtn.on('click', function () {
    $('.activities-toggle-wrapper').hide();
    googleMapsContainer.show();
})
racingBtn.on('click', function () {
    $('.activities-toggle-wrapper').hide();
    googleMapsContainer.show();
})
arcadeBtn.on('click', function () {
    $('.activities-toggle-wrapper').hide();
    googleMapsContainer.show();
})
golfBtn.on('click', function () {
    $('.activities-toggle-wrapper').hide();
    googleMapsContainer.show();
})
movieBtn.on('click', function () {
    $('.activities-toggle-wrapper').hide();
    googleMapsContainer.show();
})

// -------------food buttons---------------

var mexicanBtn = $('.mexican-food');
var italianBtn = $('.italian-food');
var chineseBtn = $('.chinese-food');
var japaneseBtn = $('.japanese-food');
var taiBtn = $('.tai-food');
var greekBtn = $('.greek-food');
var americanBtn = $('.american-food')

mexicanBtn.on('click', function () {
    $('.food-toggle-wrapper').hide();
    googleMapsContainer.show();


})
italianBtn.on('click', function () {
    $('.food-toggle-wrapper').hide();
    googleMapsContainer.show();

})
chineseBtn.on('click', function () {
    $('.food-toggle-wrapper').hide();
    googleMapsContainer.show();

})
japaneseBtn.on('click', function () {
    $('.food-toggle-wrapper').hide();
    googleMapsContainer.show();

})
taiBtn.on('click', function () {
    $('.food-toggle-wrapper').hide();
    googleMapsContainer.show();

})
greekBtn.on('click', function () {
    $('.food-toggle-wrapper').hide();
    googleMapsContainer.show();

})
americanBtn.on('click', function () {
    $('.food-toggle-wrapper').hide();
    googleMapsContainer.show();

})

// -------------- Event Buttons --------------

var concertsBtn = $('.concerts');
var festivalsBtn = $('.festivals');
var fairsBtn = $('.fairs');

concertsBtn.on('click', function () {
    $('.events-toggle-wrapper').hide();
    googleMapsContainer.show();

})
festivalsBtn.on('click', function () {
    $('.events-toggle-wrapper').hide();
    googleMapsContainer.show();

})
fairsBtn.on('click', function () {
    $('.events-toggle-wrapper').hide();
    googleMapsContainer.show();

})

// -------------- Outdoor Buttons --------------

var beachesBtn = $('.beaches');
var parksBtn = $('.parks');
var trailsBtn = $('.trails');

beachesBtn.on('click', function () {
    $('.outdoors-toggle-wrapper').hide();
    googleMapsContainer.show();

})
parksBtn.on('click', function () {
    $('.outdoors-toggle-wrapper').hide();
    googleMapsContainer.show();

})
trailsBtn.on('click', function () {
    $('.outdoors-toggle-wrapper').hide();
    googleMapsContainer.show();

})

//---------------- Ticketmaster API-------------//


$("#locationSearchBtn").on("click", function () {

    userCity = $('#userCity').val().trim();
    console.log(userCity)

    axios.get("https://app.ticketmaster.com/discovery/v2/events.json?city=" + userCity + "&apikey=63AhjiOX3qg0isIkjNClj7n4zzj0XsPl")
        .then(function (response) {

            // console.log(response.data._embedded.events[0, ].name);


            $('#eventsBtn').on('click', function () {

                var eventDiv = $('<div>');
                console.log(response.data)
                for (var i = 0; i < response.data._embedded.events.length; i++) {
                    var eventList = response.data._embedded.events;

                    console.log(response.data._embedded.events[i].name)
                    var test = $('<div>')
                    eventDiv.append(response.data._embedded.events[i].name);

                }

                // for (var i = 0; i < eventList.length; i++) {
                //     console.log(eventList[i].name)
                // }

                //  var pOne = $('<p>').html(JSON.stringify(eventList));

                // console.log(pOne)



                $('.concerts').prepend(eventDiv)






            })
        })

    // var apiLoopThru = function(){
    //     for(var i = 0; i < )
    // }

})


// function displayEvents() {
//     userCity = $('#userCity').val().trim();
//     console.log(userCity)

//     axios.get("https://app.ticketmaster.com/discovery/v2/events.json?city=" + userCity + "&apikey=63AhjiOX3qg0isIkjNClj7n4zzj0XsPl")
//         .then(function (response) {
//             console.log(response)
//         })
// }