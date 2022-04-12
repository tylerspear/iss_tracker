let coords
const url = 'http://api.open-notify.org/iss-now'
const coordinateEl = document.getElementById('coordinates')

async function getCoords() {
  const response = await fetch(url)
  if(!response.ok){
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  let data = await response.json()
  return data
}

getCoords().then(data => {
  coords = [data.iss_position.longitude, data.iss_position.latitude]
}).then(updateMap)


function updateMap() {
  updateCoords()
  const iconFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat(coords)),
    name: 'Internation Space Station',
  });
  
  const map = new ol.Map({
    target: 'map',
    layers: [
    new ol.layer.Tile({
    source: new ol.source.OSM(),
    }),
    new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [iconFeature]
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: 'img/iss.png'
      })
    })
    })
    ],
    view: new ol.View({
    center: ol.proj.fromLonLat(coords),
    zoom: 5
    })
  });
}

function updateCoords() {
  coordinateEl.innerHTML = `Latitude: ${coords[1]} </br> Longitude: ${coords[0]}`
}

setTimeout(function(){
  window.location.reload(1);
}, 5000);
