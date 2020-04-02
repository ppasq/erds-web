mapboxgl.accessToken = 'pk.eyJ1IjoicGFvbG9wYXNxdWFsaSIsImEiOiJoVU9zSE9VIn0.O8Cehs_li5LA2aLurdEDJQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  zoom: 1,
  center: [20, 20]
});

var host = "erds.ithacaweb.org";
var port = "80";
var geoserver = "http://"+host+":"+port+"/geoserver/erds/wms";
var request = '?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=';

map.on('load', function() {
  map.addSource('gfs_apcp_accumulated_012h', {'type': 'raster','tiles': [geoserver+request+'erds:gfs_apcp_accumulated_012h'],'tileSize': 256});
  map.addSource('gfs_apcp_accumulated_024h', {'type': 'raster','tiles': [geoserver+request+'erds:gfs_apcp_accumulated_024h'],'tileSize': 256});
  map.addSource('gfs_apcp_accumulated_048h', {'type': 'raster','tiles': [geoserver+request+'erds:gfs_apcp_accumulated_048h'],'tileSize': 256});
  map.addSource('gfs_apcp_accumulated_072h', {'type': 'raster','tiles': [geoserver+request+'erds:gfs_apcp_accumulated_072h'],'tileSize': 256});
  map.addSource('gfs_apcp_accumulated_096h', {'type': 'raster','tiles': [geoserver+request+'erds:gfs_apcp_accumulated_096h'],'tileSize': 256});
  map.addLayer({'id': 'gfs_apcp_accumulated_012h','type': 'raster','source': 'gfs_apcp_accumulated_012h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'gfs_apcp_accumulated_024h','type': 'raster','source': 'gfs_apcp_accumulated_024h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'gfs_apcp_accumulated_048h','type': 'raster','source': 'gfs_apcp_accumulated_048h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'gfs_apcp_accumulated_072h','type': 'raster','source': 'gfs_apcp_accumulated_072h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'gfs_apcp_accumulated_096h','type': 'raster','source': 'gfs_apcp_accumulated_096h','layout': {'visibility': 'none'}});
  map.addSource('nrt_012h', {'type': 'raster','tiles': [geoserver+request+'erds:precip_012h'],'tileSize': 256});
  map.addSource('nrt_024h', {'type': 'raster','tiles': [geoserver+request+'erds:precip_024h'],'tileSize': 256});
  map.addSource('nrt_048h', {'type': 'raster','tiles': [geoserver+request+'erds:precip_048h'],'tileSize': 256});
  map.addSource('nrt_072h', {'type': 'raster','tiles': [geoserver+request+'erds:precip_072h'],'tileSize': 256});
  map.addSource('nrt_096h', {'type': 'raster','tiles': [geoserver+request+'erds:precip_096h'],'tileSize': 256});
  map.addLayer({'id': 'nrt_012h','type': 'raster','source': 'nrt_012h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'nrt_024h','type': 'raster','source': 'nrt_024h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'nrt_048h','type': 'raster','source': 'nrt_048h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'nrt_072h','type': 'raster','source': 'nrt_072h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'nrt_096h','type': 'raster','source': 'nrt_096h','layout': {'visibility': 'none'}});
  map.addSource('gfs_apcp_alerts_012h', {'type': 'raster','tiles': [geoserver+request+'erds:gfs_apcp_alerts_012h'],'tileSize': 256});
  map.addSource('gfs_apcp_alerts_024h', {'type': 'raster','tiles': [geoserver+request+'erds:gfs_apcp_alerts_024h'],'tileSize': 256});
  map.addSource('gfs_apcp_alerts_048h', {'type': 'raster','tiles': [geoserver+request+'erds:gfs_apcp_alerts_048h'],'tileSize': 256});
  map.addSource('gfs_apcp_alerts_072h', {'type': 'raster','tiles': [geoserver+request+'erds:gfs_apcp_alerts_072h'],'tileSize': 256});
  map.addSource('gfs_apcp_alerts_096h', {'type': 'raster','tiles': [geoserver+request+'erds:gfs_apcp_alerts_096h'],'tileSize': 256});
  map.addLayer({'id': 'gfs_apcp_alerts_012h','type': 'raster','source': 'gfs_apcp_alerts_012h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'gfs_apcp_alerts_024h','type': 'raster','source': 'gfs_apcp_alerts_024h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'gfs_apcp_alerts_048h','type': 'raster','source': 'gfs_apcp_alerts_048h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'gfs_apcp_alerts_072h','type': 'raster','source': 'gfs_apcp_alerts_072h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'gfs_apcp_alerts_096h','type': 'raster','source': 'gfs_apcp_alerts_096h','layout': {'visibility': 'none'}});
  map.addSource('alerts_012h', {'type': 'raster','tiles': [geoserver+request+'erds:alerts_012h'],'tileSize': 256});
  map.addSource('alerts_024h', {'type': 'raster','tiles': [geoserver+request+'erds:alerts_024h'],'tileSize': 256});
  map.addSource('alerts_048h', {'type': 'raster','tiles': [geoserver+request+'erds:alerts_048h'],'tileSize': 256});
  map.addSource('alerts_072h', {'type': 'raster','tiles': [geoserver+request+'erds:alerts_072h'],'tileSize': 256});
  map.addSource('alerts_096h', {'type': 'raster','tiles': [geoserver+request+'erds:alerts_096h'],'tileSize': 256});
  map.addLayer({'id': 'alerts_012h','type': 'raster','source': 'alerts_012h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'alerts_024h','type': 'raster','source': 'alerts_024h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'alerts_048h','type': 'raster','source': 'alerts_048h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'alerts_072h','type': 'raster','source': 'alerts_072h','layout': {'visibility': 'none'}});
  map.addLayer({'id': 'alerts_096h','type': 'raster','source': 'alerts_096h','layout': {'visibility': 'none'}});
});

var toggleableLayerIds = ['gfs_apcp_accumulated_012h','gfs_apcp_accumulated_024h','gfs_apcp_accumulated_048h','gfs_apcp_accumulated_072h','gfs_apcp_accumulated_096h','nrt_012h','nrt_024h','nrt_048h','nrt_072h','nrt_096h','gfs_apcp_alerts_012h','gfs_apcp_alerts_024h','gfs_apcp_alerts_048h','gfs_apcp_alerts_072h','gfs_apcp_alerts_096h','alerts_012h','alerts_024h','alerts_048h','alerts_072h','alerts_096h'];

for (var i = 0; i < toggleableLayerIds.length; i++) {
  var id = toggleableLayerIds[i];

  var link = document.createElement('a');
  link.href = '#';
  link.className = ''; // link.className = 'active';
  link.textContent = id;

  link.onclick = function(e) {
    var clickedLayer = this.textContent;
    e.preventDefault();
    e.stopPropagation();

    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

    if (visibility === 'visible') {
      map.setLayoutProperty(clickedLayer, 'visibility', 'none');
      this.className = '';
    } else {
      this.className = 'active';
      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
    }
  };

  var layers = document.getElementById('menu');
  layers.appendChild(link);
}

map.addControl(new mapboxgl.NavigationControl());
map.touchZoomRotate.disable();
