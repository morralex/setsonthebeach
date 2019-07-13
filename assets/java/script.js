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
var stuffPlanned = [];
var stuffCounter = 0;

var mapquestContainer = $('.mapquest-container');
var mainContainerP1 = $('.main-container-p1');
var mainContainerP2 = $('.main-container-p2');
var itineraryContainer = $('.itinerary-container');
var ticketmasterContainer = $('.ticketmastert-Container');
ticketmasterContainer.hide();

$(document).ready(function () {
    mainContainerP2.hide();
    mainContainerCategories.hide();
    mapquestContainer.hide();
    $('.food-toggle-wrapper').hide();
    itineraryContainer.hide();
})




var mainContainerCategories = $('.main-container-categories')

var foodBtn = $('#foodBtn');
var activitiesBtn = $('#activitiesBtn');
var eventsBtn = $('#eventsBtn');
var doneBtn = $('#doneBtn');

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
doneBtn.on('click', function () {
    $('.category-btns-main').hide();
    itineraryContainer.show();
    mainContainerCategories.hide();
    $('#itinerary').show();
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
    //mainContainerCategories.show();
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

var restaurantsCode = 581208;

//desssert
var donutsCode = 546105;
var iceCream = 581203;
//var cafeCode = 581214;

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
var eventBtn = $('.events');
var bowlingBtn = $('.bowling');
var barBtn = $('.bar');
//var parkBtn = $('.park');
var arcadeBtn = $('.arcade');
//var danceClubBtn = $('.danceClub');
var billiardBtn = $('.billiard');
eventBtn.on('click', function(){
    ticketmasterContainer.show();
    $('#eventsList').show();
})
bowlingBtn.on('click', function () {
    $('.activities-toggle-wrapper').hide();
    mainContainerCategories.hide();
    mapquestContainer.show();
    axios({
        url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + bowlingCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
        console.log(response.data)
        console.log(response.data.searchResults[0].name)
        for (var i = 0; i < response.data.searchResults.length; i++) {
            $("#activitiesList").append(response.data.searchResults[i].name + "<br>");
            $("#activitiesList").append(response.data.searchResults[i].fields.address + " " + response.data.searchResults[i].fields.city + ", " + response.data.searchResults[i].fields.state + "<br>");
            $("#activitiesList").append(response.data.searchResults[i].fields.phone + "<br>")

            var addButton = $("<button>");
            addButton.addClass("addBowling");
            addButton.attr("indexNum", i);
            addButton.text("Add to Itinerary");
            $("#activitiesList").append(addButton);
            $("#activitiesList").append("<br>"  + "<br>");
        }


        // .catch(function (err) {
        //         console.error(err)
        //     })
    })

})
barBtn.on('click', function () {
    $('.activities-toggle-wrapper').hide();
    mainContainerCategories.hide();
    mapquestContainer.show();
    axios({
        url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + barsCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
        console.log(response.data)
        console.log(response.data.searchResults[0].name)
        for (var i = 0; i < response.data.searchResults.length; i++) {
            $("#activitiesList").append(response.data.searchResults[i].name + "<br>");
            $("#activitiesList").append(response.data.searchResults[i].fields.address + " " + response.data.searchResults[i].fields.city + ", " + response.data.searchResults[i].fields.state + "<br>");
            $("#activitiesList").append(response.data.searchResults[i].fields.phone + "<br>")

            var addButton = $("<button>");
            addButton.addClass("addBar");
            addButton.attr("indexNum", i);
            addButton.text("Add to Itinerary");
            $("#activitiesList").append(addButton);
            $("#activitiesList").append("<br>"  + "<br>");
        }


        // .catch(function (err) {
        //         console.error(err)
        //     })
    })
})
// parkBtn.on('click', function () {
//     $('.activities-toggle-wrapper').hide();
//     mainContainerCategories.hide();
//     mapquestContainer.show();
//     axios({
//         url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + parksCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
//         method: "GET"
//     }).then(function (response) {
//         console.log(response.data)
//         console.log(response.data.searchResults[0].name)
//         for (var i = 0; i < response.data.searchResults.length; i++) {
//             //$("#restaurantList").append(JSON.stringify(response.data.searchResults[i].name));
//             $("#activitiesList").append(response.data.searchResults[i].name + "<br>");
//             $("#activitiesList").append(response.data.searchResults[i].fields.address + " " + response.data.searchResults[i].fields.city + ", " + response.data.searchResults[i].fields.state + "<br>");
//             $("#activitiesList").append(response.data.searchResults[i].fields.phone + "<br>")
//             //$("#restuarantList").append($("<button></button>").text("Add").attri('id', i));
//             var addButton = $("<button>");
//             addButton.addClass("add");
//             addButton.attr("indexNum", i);
//             addButton.text("Add to Itinerary");
//             $("#activitiesList").append(addButton);
//             $("#activitiesList").append("<br>");
//         };


//         // .catch(function (err) {
//         //         console.error(err)
//         //     })
//     })
// })
arcadeBtn.on('click', function () {
    $('.activities-toggle-wrapper').hide();
    mainContainerCategories.hide();
    mapquestContainer.show();
    axios({
        url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + arcadeCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
        console.log(response.data)
        console.log(response.data.searchResults[0].name)
        for (var i = 0; i < response.data.searchResults.length; i++) {
            $("#activitiesList").append(response.data.searchResults[i].name + "<br>");
            $("#activitiesList").append(response.data.searchResults[i].fields.address + " " + response.data.searchResults[i].fields.city + ", " + response.data.searchResults[i].fields.state + "<br>");
            $("#activitiesList").append(response.data.searchResults[i].fields.phone + "<br>")

            var addButton = $("<button>");
            addButton.addClass("addArcade");
            addButton.attr("indexNum", i);
            addButton.text("Add to Itinerary");
            $("#activitiesList").append(addButton);
            $("#activitiesList").append("<br>"  + "<br>");
        }


        // .catch(function (err) {
        //         console.error(err)
        //     })
    })
})
// danceClubBtn.on('click', function () {
//     $('.activities-toggle-wrapper').hide();
//     mainContainerCategories.hide();
//     mapquestContainer.show();
//     axios({
//         url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + danceClubCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
//         method: "GET"
//     }).then(function (response) {
//         console.log(response.data)
//         console.log(response.data.searchResults[0].name)
//         for (var i = 0; i < response.data.searchResults.length; i++) {
//             //$("#restaurantList").append(JSON.stringify(response.data.searchResults[i].name));
//             $("#activitiesList").append(response.data.searchResults[i].name + "<br>");
//             $("#activitiesList").append(response.data.searchResults[i].fields.address + " " + response.data.searchResults[i].fields.city + ", " + response.data.searchResults[i].fields.state + "<br>");
//             $("#activitiesList").append(response.data.searchResults[i].fields.phone + "<br>")
//             //$("#restuarantList").append($("<button></button>").text("Add").attri('id', i));
//             var addButton = $("<button>");
//             addButton.addClass("add");
//             addButton.attr("indexNum", i);
//             addButton.text("Add to Itinerary");
//             $("#activitiesList").append(addButton);
//             $("#activitiesList").append("<br>");
//         };


//         // .catch(function (err) {
//         //         console.error(err)
//         //     })
//     })
// })
billiardBtn.on('click', function () {
    $('.activities-toggle-wrapper').hide();
    mainContainerCategories.hide();
    mapquestContainer.show();
    axios({
        url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + billiardCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
        console.log(response.data)
        console.log(response.data.searchResults[0].name)
        for (var i = 0; i < response.data.searchResults.length; i++) {
            $("#activitiesList").append(response.data.searchResults[i].name + "<br>");
            $("#activitiesList").append(response.data.searchResults[i].fields.address + " " + response.data.searchResults[i].fields.city + ", " + response.data.searchResults[i].fields.state + "<br>");
            $("#activitiesList").append(response.data.searchResults[i].fields.phone + "<br>")

            var addButton = $("<button>");
            addButton.addClass("addBilliard");
            addButton.attr("indexNum", i);
            addButton.text("Add to Itinerary");
            $("#activitiesList").append(addButton);
            $("#activitiesList").append("<br>"  + "<br>");
        }
        // .catch(function (err) {
        //         console.error(err)
        //     })
    })
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
        url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + restaurantsCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
        console.log(response.data)
        //console.log(response.data.searchResults[0].name)
        for (var i = 0; i < response.data.searchResults.length; i++) {
            //$("#restaurantList").append(JSON.stringify(response.data.searchResults[i].name));
            $("#restaurantList").append(response.data.searchResults[i].name + "<br>");
            $("#restaurantList").append(response.data.searchResults[i].fields.address + " " + response.data.searchResults[i].fields.city + ", " + response.data.searchResults[i].fields.state + "<br>");
            $("#restaurantList").append(response.data.searchResults[i].fields.phone + "<br>")

            //$("#restuarantList").append($("<button></button>").text("Add").attri('id', i));
            var addButton = $("<button>");
            addButton.addClass("addRestaurant");
            addButton.attr("indexNum", i);
            addButton.text("Add to Itinerary");
            $("#restaurantList").append(addButton);
            $("#restaurantList").append("<br>"  + "<br>");
        };


        // .catch(function (err) {
        //         console.error(err)
        //     })
    })

})
$(document).on("click", ".addRestaurant", function (event) {
    var index = $(this).attr("indexNum")
    console.log(index)

    mapquestContainer.hide();
    mainContainerP2.hide();
    mainContainerCategories.show();
   
    $("#restaurantList").html('');
    $("#activitiesList").html('');

    $('.category-btns-main').show();
    // $('.food-toggle-wrapper').hide();
    // $('.activities-toggle-wrapper').show();
    axios({
        url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + restaurantsCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
        console.log(response.data)
        //console.log(response.data.searchResults[0].name)

        //$("#restaurantList").append(JSON.stringify(response.data.searchResults[i].name));
        $("#itinerary").append(response.data.searchResults[index].name + "<br>");
        $("#itinerary").append(response.data.searchResults[index].fields.address + " " + response.data.searchResults[index].fields.city + ", " + response.data.searchResults[index].fields.state + "<br>");
        $("#itinerary").append(response.data.searchResults[index].fields.phone + "<br>")
        $("#itinerary").append("<br>"  + "<br>");


        // .catch(function (err) {
        //         console.error(err)
        //     })
    })
})
$(document).on("click", ".addBowling", function (event) {
    var index = $(this).attr("indexNum")
    console.log(index)

    mapquestContainer.hide();
    mainContainerP2.hide();
    mainContainerCategories.show();
   
    $("#restaurantList").html('');
    $("#activitiesList").html('');

    $('.category-btns-main').show();
    // $('.food-toggle-wrapper').hide();
    // $('.activities-toggle-wrapper').show();
    axios({
        url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + bowlingCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
        console.log(response.data)
        //console.log(response.data.searchResults[0].name)

        //$("#restaurantList").append(JSON.stringify(response.data.searchResults[i].name));
        $("#itinerary").append(response.data.searchResults[index].name + "<br>");
        $("#itinerary").append(response.data.searchResults[index].fields.address + " " + response.data.searchResults[index].fields.city + ", " + response.data.searchResults[index].fields.state + "<br>");
        $("#itinerary").append(response.data.searchResults[index].fields.phone + "<br>")
        $("#itinerary").append("<br>"  + "<br>");


        // .catch(function (err) {
        //         console.error(err)
        //     })
    })
})
$(document).on("click", ".addBilliard", function (event) {
    var index = $(this).attr("indexNum")
    console.log(index)

    mapquestContainer.hide();
    mainContainerP2.hide();
    mainContainerCategories.show();
   
    $("#restaurantList").html('');
    $("#activitiesList").html('');

    $('.category-btns-main').show();
    // $('.food-toggle-wrapper').hide();
    // $('.activities-toggle-wrapper').show();
    axios({
        url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + billiardCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
        console.log(response.data)
        //console.log(response.data.searchResults[0].name)

        //$("#restaurantList").append(JSON.stringify(response.data.searchResults[i].name));
        $("#itinerary").append(response.data.searchResults[index].name + "<br>");
        $("#itinerary").append(response.data.searchResults[index].fields.address + " " + response.data.searchResults[index].fields.city + ", " + response.data.searchResults[index].fields.state + "<br>");
        $("#itinerary").append(response.data.searchResults[index].fields.phone + "<br>")
        $("#itinerary").append("<br>"  + "<br>");


        // .catch(function (err) {
        //         console.error(err)
        //     })
    })
})
$(document).on("click", ".addBar", function (event) {
    var index = $(this).attr("indexNum")
    console.log(index)

    mapquestContainer.hide();
    mainContainerP2.hide();
    mainContainerCategories.show();
   
    $("#restaurantList").html('');
    $("#activitiesList").html('');

    $('.category-btns-main').show();
    // $('.food-toggle-wrapper').hide();
    // $('.activities-toggle-wrapper').show();
    axios({
        url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + barsCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
        console.log(response.data)
        //console.log(response.data.searchResults[0].name)

        //$("#restaurantList").append(JSON.stringify(response.data.searchResults[i].name));
        $("#itinerary").append(response.data.searchResults[index].name + "<br>");
        $("#itinerary").append(response.data.searchResults[index].fields.address + " " + response.data.searchResults[index].fields.city + ", " + response.data.searchResults[index].fields.state + "<br>");
        $("#itinerary").append(response.data.searchResults[index].fields.phone + "<br>")
        $("#itinerary").append("<br>"  + "<br>");


        // .catch(function (err) {
        //         console.error(err)
        //     })
    })
})
$(document).on("click", ".addArcade", function (event) {
    var index = $(this).attr("indexNum")
    console.log(index)

    mapquestContainer.hide();
    mainContainerP2.hide();
    mainContainerCategories.show();
   
    $("#restaurantList").html('');
    $("#activitiesList").html('');

    $('.category-btns-main').show();
    // $('.food-toggle-wrapper').hide();
    // $('.activities-toggle-wrapper').show();
    axios({
        url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + arcadeCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
        console.log(response.data)
        //console.log(response.data.searchResults[0].name)

        //$("#restaurantList").append(JSON.stringify(response.data.searchResults[i].name));
        $("#itinerary").append(response.data.searchResults[index].name + "<br>");
        $("#itinerary").append(response.data.searchResults[index].fields.address + " " + response.data.searchResults[index].fields.city + ", " + response.data.searchResults[index].fields.state + "<br>");
        $("#itinerary").append(response.data.searchResults[index].fields.phone + "<br>")
        $("#itinerary").append("<br>"  + "<br>");



        // .catch(function (err) {
        //         console.error(err)
        //     })
    })
})
$(document).on("click", ".addEvent", function (event) {
    var index = $(this).attr("indexNum")
    console.log(index)

    mapquestContainer.hide();
    mainContainerP2.hide();
    mainContainerCategories.show();
    ticketmasterContainer.hide();
   
    $("#restaurantList").html('');
    $("#activitiesList").html('');
    $("#eventsList").html('');

    $('.category-btns-main').show();
    // $('.food-toggle-wrapper').hide();
    // $('.activities-toggle-wrapper').show();
    axios({
        url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + arcadeCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
        method: "GET"
    }).then(function (response) {
        console.log(response.data)
        //console.log(response.data.searchResults[0].name)

        //$("#restaurantList").append(JSON.stringify(response.data.searchResults[i].name));
        $("#itinerary").append(response.data.searchResults[index].name + "<br>");
        $("#itinerary").append(response.data.searchResults[index].fields.address + " " + response.data.searchResults[index].fields.city + ", " + response.data.searchResults[index].fields.state + "<br>");
        $("#itinerary").append(response.data.searchResults[index].fields.phone + "<br>")
        $("#itinerary").append("<br>"  + "<br>");



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
        url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + iceCreamCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
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

// var beachesBtn = $('.beaches');
// var parksBtn = $('.parks');
// var trailsBtn = $('.trails');

// beachesBtn.on('click', function () {
//     $('.outdoors-toggle-wrapper').hide();
//     mapquestContainer.show();

// })
// parksBtn.on('click', function () {
//     $('.outdoors-toggle-wrapper').hide();
//     mapquestContainer.show();

// })
// trailsBtn.on('click', function () {
//     $('.outdoors-toggle-wrapper').hide();
//     mapquestContainer.show();

// })

//---------------- Ticketmaster API-------------//


$("#eventsBtn").on("click", function () {

    userCity = $('#userCity').val().trim();
    console.log(userCity)

    axios.get("https://app.ticketmaster.com/discovery/v2/events.json?city=" + userCity + "&apikey=63AhjiOX3qg0isIkjNClj7n4zzj0XsPl")
        .then(function (response) {
            for(var i=0; i<5; i++){
            $("#eventsList").append(response.data._embedded.events[i].name + "<br>");
            $("#eventsList").append(response.data._embedded.events[i].url + "<br>");

            var addButton = $("<button>");
            addButton.addClass("addEvent");
            addButton.attr("indexNum", i);
            addButton.text("Add to Itinerary");
            $("#eventsList").append(addButton);
            $("#eventsList").append("<br>"  + "<br>");
            }
            console.log(response.data._embedded.events)
            console.log(response.data._embedded.events[1].name)
            //response.data._embedded.events[1].url;
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

var mapquestURL = "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + restaurantsCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm";
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
//var cafeCode = 581214;

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


var mapquestURL = "https://www.mapquestapi.com/search/v2/radius?origin=" + userCity + ",+" + userState + "&radius=" + userRadius + "&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|" + restaurantsCode + "&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm";
var restaurantsCode = 581208;
axios({
    //url: "http://www.mapquestapi.com/search/v2/radius?key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm&maxMatches=4&origin=39.750307,-104.999472",
    //url: mapquestURL,
    url: "https://www.mapquestapi.com/search/v2/radius?origin=irvine,+ca&radius=10&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581208&outFormat=json&key=k7p1YS52pNJs9TkBAFlr26nXS2EOKNGm",
    method: "GET"
}).then(function (response) {
    console.log(response.data)

        .catch(function (err) {
            console.error(err)
        })
})