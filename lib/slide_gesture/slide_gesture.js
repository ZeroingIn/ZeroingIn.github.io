var myElement = document.getElementById('main_page');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// listen to events...
mc.on("pan panstart panend pancancel panleft panright", function(ev) {
    console.log(ev);
    if(ev.type == "panright" && ev.distance >= 100) {
        history.go(-1);
    }
    // myElement.textContent = ev.type +" gesture detected.";
});