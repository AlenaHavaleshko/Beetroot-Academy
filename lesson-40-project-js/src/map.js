// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  // const position = { lat: -25.344, lng: 131.031 };
  const position = { lat: 40.68226181455182, lng: -73.90313535949483 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "5519e39e0f79e572",
  });

  // The marker, positioned at Uluru
  // const marker = new AdvancedMarkerElement({
  //   map: map,
  //   position: position,
  //   title: "Uluru",
  // });
  var marker = new google.maps.Marker({
  position: position,
  map: map,
  icon: './images/map-marker.svg'
});
}



export default initMap;

  