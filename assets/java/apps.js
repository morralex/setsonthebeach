// var map;
// var service;
// var infowindow;

// function initialize() {
//   var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

//   map = new google.maps.Map(document.getElementById('map'), {
//       center: pyrmont,
//       zoom: 15
//     });

//   var request = {
//     location: pyrmont,
//     radius: '500',
//     query: 'restaurant'
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.textSearch(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//         //
//       $("#places").append(results[i]);

//     }
//   }

// }
// //initialize();
// console.log(results);
// var queryURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD9O71-BgSQgYf-GpnfbYgSTJP3XAx0rok&libraries=places";





// $.ajax({
//     url: queryURL,
//     dataType: "jsonp",
//     jsonpCallback: "logResults"
// }).then(function (response) {
//     //console.log(response);

//     var map;
//     var service;
//     var infowindow;

//     function initialize() {
//         var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

//         map = new google.maps.Map(document.getElementById('map'), {
//             center: pyrmont,
//             zoom: 15
//         });

//         var request = {
//             location: pyrmont,
//             radius: '500',
//             query: 'restaurant'
//         };

//         service = new google.maps.places.PlacesService(map);
//         service.textSearch(request, callback);
//     }

//     function callback(results, status) {
//         if (status == google.maps.places.PlacesServiceStatus.OK) {
//             for (var i = 0; i < results.length; i++) {
//                 var place = results[i];
//                 createMarker(results[i]);
//                 console.log(results);
//                 //$("#places").append(results[i]);

//             }
//         }

//     }
//     initialize();

// })

// function logResults(json) {
//     console.log(json);
// }




// console.log(results);

// new google.maps.places.Autocomplete(document.getElementById('autocomplete'));

//var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters&key=AIzaSyD9O71-BgSQgYf-GpnfbYgSTJP3XAx0rok";
var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyD9O71-BgSQgYf-GpnfbYgSTJP3XAx0rok"
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    
  })

  //google places api key: AIzaSyD9O71-BgSQgYf-GpnfbYgSTJP3XAx0rok