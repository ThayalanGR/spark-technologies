// alert(0)
$('body').scrollspy({
    target: '.scrollspy'
});




//google maps api function  
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map-box'), {
    center: {lat: 10.761089, lng: 79.118668},
    zoom: 8
  });
}