const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');
let trafficLightArr = document.querySelectorAll('.trafficLight');

trafficLightArr.forEach(function(item) {
    item.addEventListener('click', makeGreen); 
    function makeGreen() {
        trafficLightEl1.style.background = ('green');
        trafficLightEl2.style.background = ('black');
        trafficLightEl3.style.background = ('black');
        item.removeEventListener('click', makeGreen);
        item.addEventListener('click', makeYellow);
    }
    function makeYellow() {
        trafficLightEl1.style.background = ('black');
        trafficLightEl2.style.background = ('yellow');
        trafficLightEl3.style.background = ('black');
        item.removeEventListener('click', makeYellow);
        item.addEventListener('click', makeRed);
    }
    function makeRed() {
        trafficLightEl1.style.background = ('black');
        trafficLightEl2.style.background = ('black');
        trafficLightEl3.style.background = ('red');
        item.removeEventListener('click', makeRed);
        item.addEventListener('click', makeGreen);
    }
});