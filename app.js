var latitude;
var longitude;

function starttaa(){
    var nappula = document.createElement("button");
    nappula.innerHTML ="Näytä sijainti";
    document.body.appendChild(nappula);
    nappula.addEventListener("click", naytaSijainti)
    if(navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            function(position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
            }


        )

    }
    else {
        alert("Geolocation ei ole tuettu")
    }
}
function naytaSijainti(){
    alert("Koordinaattisi ovat " + latitude + " leveysastetta ja " + longitude + " pituusastetta");
    window.location.href = "https://maps.google.com/?q="+latitude+","+longitude;
}
window.addEventListener("load", starttaa);
