const url = 'http://api.open-notify.org/iss-now'

function getCoords() {
  const response = fetch(url)

  if(!response.ok){
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  let coords = response.json()
  console.log(cords)
  return coords
}

// function updateMap() {
//   console.log(coords)
//   const iconFeature = new ol.Feature({
//     geometry: new ol.geom.Point(ol.proj.fromLonLat(coords)),
//     name: 'Somewhere near Nottingham',
//   });
  
//   const map = new ol.Map({
//     target: 'map',
//     layers: [
//     new ol.layer.Tile({
//     source: new ol.source.OSM(),
//     }),
//     new ol.layer.Vector({
//     source: new ol.source.Vector({
//       features: [iconFeature]
//     }),
//     style: new ol.style.Style({
//       image: new ol.style.Icon({
//       anchor: [0.5, 46],
//       anchorXUnits: 'fraction',
//       anchorYUnits: 'pixels',
//       src: 'https://openlayers.org/en/latest/examples/data/icon.png'
//       })
//     })
//     })
//     ],
//     view: new ol.View({
//     center: ol.proj.fromLonLat(coords),
//     zoom: 5
//     })
//   });
// }

let loop = async function() {
    // getCoords()
    // await updateMap()
    setTimeout(loop, 3000)
}
loop()