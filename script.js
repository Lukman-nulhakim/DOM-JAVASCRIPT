const parralax = document.getElementById("data");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset; // ini membuat paralax menggunakan javascript
    console.log('titik koordinat : ' + offset);
    console.log('titik koordinat + 0.7 : ' + offset  * 0.7);
    parralax.style.backgroundPositionY = offset * 0.7 + "px";
})