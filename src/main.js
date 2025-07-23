import "mapbox-gl/dist/mapbox-gl.css"
import mapboxgl from "mapbox-gl"

mapboxgl.accessToken = "pk.eyJ1IjoibmFqaW1vdiIsImEiOiJjbWRmazhzdG0wZHVzMmlzOGdrNHFreWV6In0.ENVcoFkxKIqNeCEax2JoFg"


const map = new mapboxgl.Map( {
	container: "map",
	attributionControl: false,
	logoPosition: "bottom-right",
	center: [69.244, 41.3205 ],
	zoom: 10
})

map.on( "load", async () =>{

	const geoJSON = await ( await fetch("/data.geojson") ).json()

	console.log(geoJSON )
	map.addSource( "me", { type: "geojson", data: geoJSON})
	map.addLayer( {
		id: "me",
		source: "me",
		type: "circle"
	})
})



