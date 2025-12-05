mapboxgl.accessToken = 'pk.eyJ1IjoiYW9sdmVyYXQiLCJhIjoiY21oOWNjYW9qMDRvMzJpb2phdjE2OGtyZCJ9.-R05P39FkM885a1f4s53Sg';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: 'mapbox://styles/aolverat/cmh9cjrvl009i01ra1e8yawx9',
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });