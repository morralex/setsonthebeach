var mainContainerP1 = $('.main-container-p1');
var mainContainerP2 = $('.main-container-p2');
var mainContainerDisplayedInput = $('.main-container-displayed-input');

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
})

searchLocationBtn.on('click', function(){
    mainContainerP2.hide();
    mainContainerDisplayedInput.show();
})
axios({
    method: 'GET',
    url: "https://api.predicthq.com/v1/events/?category=concerts&country=US&active.gte=" + today,
    headers: { 'authorization': `Bearer xqrA7HkCAsqljfvckEzJDNROaaYKDw` }
}) .then(function(response){
    console.log(response)
})
