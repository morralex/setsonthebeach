var mainContainerP1 = $('.main-container-p1');
var mainContainerP2 = $('.main-container-p2');
var mainContainerDisplayedInput = $('.main-container-displayed-input');


var searchLocationBtn = $('#locationSearchBtn');
var homeBtn = $('#homeBtn');

homeBtn.on('click', function(){
    $('.main-container-p1').hide();
})

searchLocationBtn.on('click', function(){
    mainContainerP2.hide();
    mainContainerDisplayedInput.show();
})