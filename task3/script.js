const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');
let trafficLightArr = document.querySelectorAll('.trafficLight');

trafficLightArr.forEach(function(item) {
    item.addEventListener('click', makeGreen); 
    function makeGreen() {
        trafficLightEl1.style.background = ('green');
        trafficLightEl3.style.background = ('black');
        item.removeEventListener('click', makeGreen);
        item.addEventListener('click', makeYellow);
    }
    function makeYellow() {
        trafficLightEl2.style.background = ('yellow');
        trafficLightEl1.style.background = ('black');
        item.removeEventListener('click', makeYellow);
        item.addEventListener('click', makeRed);
    }
    function makeRed() {
        trafficLightEl3.style.background = ('red');
        trafficLightEl2.style.background = ('black');
        item.removeEventListener('click', makeRed);
        item.addEventListener('click', makeGreen);
    }
});