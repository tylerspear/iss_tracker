const positionFeature = new ol.Feature()

async function updateISSPosition() {
  const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
  const data = await res.json()
  .then(data => {
    let ISSPosition = [data.longitude, data.latitude]
    let ISSMarker = ol.proj.fromLonLat(ISSPosition)
    //update the ISS image layer to be new coords from API
    positionFeature.setGeometry(new ol.geom.Point(ISSMarker))
    //center the view on the ISS point
    map.getView().setCenter(ISSMarker)
  })
}
//paint new map
const map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: "map",
  view: new ol.View({
    center: [0, 0],
    zoom: 4
  })
})

//iss image layer
positionFeature.setStyle(
  new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: 'img/iss.png'
      })
  })
)

new ol.layer.Vector({
  map: map,
  source: new ol.source.Vector({
    features: [positionFeature]
  })
});

//initial map rendering
updateISSPosition()
//continually update ISS layer position
setInterval(updateISSPosition, 3000)