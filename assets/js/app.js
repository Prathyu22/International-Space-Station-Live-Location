console.log(L)
var map = L.map('map').setView([0, 0], 1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

var myIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/International_Space_Station.svg/1280px-International_Space_Station.svg.png',
    iconSize: [38, 32],
});

var pathIcon = L.icon({
    iconUrl: 'https://www.svgrepo.com/show/344736/dot.svg',
    iconSize: [20, 20],
});

let marker = L.marker([0, 0], {icon: myIcon }).addTo(map)

const fetchSpaceStationDetails = async () => {
        const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
        const data = await res.json()
        const {latitude, longitude} = data
        console.log( latitude, longitude)
        marker.setLatLng([latitude, longitude])
        L.marker([latitude, longitude], {icon: pathIcon}).addTo(map)
}
    
setInterval(fetchSpaceStationDetails,1000) // This gives the location of the
//space station every second.

/* const fetchSSDetails = sync () => {
    const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
    const data = await res.json()
    //plotting the co-ordinates of ISS
        const latitude = data.latitude;
        const longitude = data.longitude;
        const velocity = data.velocity;
        document.getElementById("lon").innerHTML = longitude.toFixed(4);
        document.getElementById("lat").innerHTML = latitude.toFixed(4);
        document.getElementById("vel").innerHTML = velocity.toFixed(0) + " Km/Hr";
        console.log(data);
}

setInterval(fetchSSDetails,1000) */

