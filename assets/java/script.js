// var queryURL = 'https://eventful.com/events/&app_key=Vwxn85pQjddWRWhV';
// // Vwxn85pQjddWRWhV

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response){
//     console.log(response);
// });

var userCity;
var userState;
var userRadius;

var mapquestContainer = $('.mapquest-container');

var mainContainerP1 = $('.main-container-p1');
var mainContainerP2 = $('.main-container-p2');

$(document).ready(function () {
    mainContainerP2.hide();
    mainContainerCategories.hide();
    mapquestContainer.hide();
    $('.food-toggle-wrapper').hide();
})




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
    mapquestContainer.hide();

})

searchLocationBtn.on('click', function () {

    userCity = $('#userCity').val().trim();
    console.log(userCity)
    userState = $('#userState').val().trim();
    console.log(userState)
    userRadius = $('#userRadius').val().trim();
    console.log(userRadius)

    mainContainerP2.hide();
    $('.main-preference-wrapper').show();
    $('.select-preference-page').show();
    mainContainerCategories.show();
    mapquestContainer.hide();

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
    mapquestContainer.show();
})
racingBtn.on('click', function () {
    $('.activities-toggle-wrapper').hide();
    mapquestContainer.show();
})
arcadeBtn.on('click', function () {
    $('.activities-toggle-wrapper').hide();
    mapquestContainer.show();
})
golfBtn.on('click', function () {
    $('.activities-toggle-wrapper').hide();
    mapquestContainer.show();
})
movieBtn.on('click', function () {
    $('.activities-toggle-wrapper').hide();
    mapquestContainer.show();
})

// -------------food buttons---------------

var restaurantBtn = $('.restaurant');
var dessertBtn = $('.dessert');

restaurantBtn.on('click', function () {
    $('.food-toggle-wrapper').hide();
    mainContainerCategories.hide();
    mapquestContainer.show();
    var restaurantsCode = 581208;
    axios({
        url: "https://www.mapquestapi.com/search/v2/radius?origin="+userCity+",+"+userState+"&radius="+userRadius+"&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|"+restaurantsCode+"&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
            console.log(response.data)
            console.log(response.data.searchResults[0].name)
            for(var i = 0; i<response.data.searchResults.length; i++){
                //$("#restaurantList").append(JSON.stringify(response.data.searchResults[i].name));
                $("#restaurantList").append(response.data.searchResults[i].name + "<br>");
                $("#restaurantList").append(response.data.searchResults[i].fields.address+" "+response.data.searchResults[i].fields.city+", "+response.data.searchResults[i].fields.state + "<br>");
                $("#restaurantList").append(response.data.searchResults[i].fields.phone + "<br>")
                $("#restaurantList").append("<br>");
            };
           
    
            // .catch(function (err) {
            //         console.error(err)
            //     })
        })

})
dessertBtn.on('click', function () {
    var iceCreamCode = 581203;
    $('.food-toggle-wrapper').hide();
    mapquestContainer.show();
    axios({
        url: "https://www.mapquestapi.com/search/v2/radius?origin="+userCity+",+"+userState+"&radius="+userRadius+"&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|"+iceCreamCode+"&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
            console.log(response.data)
            console.log(response.data.searchResults[0].name)
    
                .catch(function (err) {
                    console.error(err)
                })
        })
})


// -------------- Event Buttons --------------

var concertsBtn = $('.concerts');
var festivalsBtn = $('.festivals');
var fairsBtn = $('.fairs');

concertsBtn.on('click', function () {
    $('.events-toggle-wrapper').hide();
    mapquestContainer.show();

})
festivalsBtn.on('click', function () {
    $('.events-toggle-wrapper').hide();
    mapquestContainer.show();

})
fairsBtn.on('click', function () {
    $('.events-toggle-wrapper').hide();
    mapquestContainer.show();

})

// -------------- Outdoor Buttons --------------

var beachesBtn = $('.beaches');
var parksBtn = $('.parks');
var trailsBtn = $('.trails');

beachesBtn.on('click', function () {
    $('.outdoors-toggle-wrapper').hide();
    mapquestContainer.show();

})
parksBtn.on('click', function () {
    $('.outdoors-toggle-wrapper').hide();
    mapquestContainer.show();

})
trailsBtn.on('click', function () {
    $('.outdoors-toggle-wrapper').hide();
    mapquestContainer.show();

})

//---------------- Ticketmaster API-------------//


$("#locationSearchBtn").on("click", function () {

    userCity = $('#userCity').val().trim();
    console.log(userCity)

    axios.get("https://app.ticketmaster.com/discovery/v2/events.json?city=" + userCity + "&apikey=63AhjiOX3qg0isIkjNClj7n4zzj0XsPl")
        .then(function (response) {
            console.log(response.data._embedded.events)
        })

})
// function displayEvents() {
//     userCity = $('#userCity').val().trim();
//     console.log(userCity)

//     axios.get("https://app.ticketmaster.com/discovery/v2/events.json?city=" + userCity + "&apikey=63AhjiOX3qg0isIkjNClj7n4zzj0XsPl")
//         .then(function (response) {
//             console.log(response)
//         })
// }

//------------- Mapquest API-------------//

var mapquestURL = "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + restaurantsCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm";
// axios({
//     //url: "http://www.mapquestapi.com/search/v2/radius?key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm&maxMatches=4&origin=39.750307,-104.999472",
//     url: mapquestURl,
//     method: "GET"
// }).then(function (response) {
//         console.log(response.data)

//             .catch(function (err) {
//                 console.error(err)
//             })
//     })

    //mapquest api key: k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm
   //group sic codes: 
   //restaurant
   var restaurantsCode = 581208;

   //desssert
   var donutsCode = 546105;
   var iceCream = 581203;
   var cafeCode = 581214;

   //activities
   var karaokeCode = 581309;
   var barsCode = 581301;
   var bowlingCode = 793301;
   var parksCode = 799951;
   var museumCode = 841201;
   var beachCode = 901006;
   var animalShelterCode = 75203;
   var arcadeCode = 799303;
   var billiardCode = 799912;
   var aboretumCode = 842203;
   var danceClubCode = 869921;
   var aquariumCode = 842205;
    

   var mapquestURL = "https://www.mapquestapi.com/search/v2/radius?origin="+userCity+",+"+userState+"&radius="+userRadius+"&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|"+restaurantsCode+"&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm";
    var restaurantsCode = 581208;
    axios({
        //url: "http://www.mapquestapi.com/search/v2/radius?key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm&maxMatches=4&origin=39.750307,-104.999472",
        //url: mapquestURL,
        url: "https://www.mapquestapi.com/search/v2/radius?origin=irvine,+ca&radius=10&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581208&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
            console.log(response.data)
    
                .catch(function (err) {
                    console.error(err)
                })
        })