// var queryURL = 'https://eventful.com/events/&app_key=Vwxn85pQjddWRWhV';
// // Vwxn85pQjddWRWhV

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response){
//     console.log(response);
// });

var googleMapsContainer = $('.google-maps-container')

$(document).ready(function(){
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

foodBtn.on('click', function(){
    $('.category-btns-main').hide();
    $('.food-toggle-wrapper').show();
})
activitiesBtn.on('click', function(){
    $('.category-btns-main').hide();
    $('.activities-toggle-wrapper').show();
})
eventsBtn.on('click', function(){
    $('.category-btns-main').hide();
    $('.events-toggle-wrapper').show();
})
outdoorsBtn.on('click', function(){
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

homeBtn.on('click', function(){
    $('.main-container-p1').hide();
    mainContainerP2.show();
    googleMapsContainer.hide();
})

searchLocationBtn.on('click', function(){
    mainContainerP2.hide();

    mainContainerCategories.show();
    googleMapsContainer.hide();
    
})

// -------------Activity buttons---------------

var bowlingBtn = $('.bowling');
var racingBtn = $('.racing');
var arcadeBtn = $('.arcade');
var golfBtn = $('.golf');
var movieBtn = $('.movie');

// -------------food buttons---------------

var mexicanBtn = $('.mexican-food');
var italianBtn = $('.italian-food');
var chineseBtn = $('.chinese-food');
var japaneseBtn = $('.japanese-food');
var taiBtn = $('.tai-food');
var greekBtn = $('.greek-food');

mexicanBtn.on('click', function(){
    $('.food-toggle-wrapper').hide();
    googleMapsContainer.show();
    

})
