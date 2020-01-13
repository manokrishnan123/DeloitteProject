// AOS.init({
//   duration: 1200,
// })
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("headerPart").style.display = "block";
  document.getElementById("main-description").style.display = "block";
  document.getElementById("content1").style.display = "block";
  document.getElementById("content2").style.display = "block";
  document.getElementById("content3").style.display = "block";
  document.getElementById("map").style.display = "block";
  document.getElementById("footer").style.display = "block";
}
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
$(".animated").addClass("delay-1s");
