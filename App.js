
var Sea = document.getElementById('sea')

var SeaAni = Sea.animate([
    {transform: 'translate(0,0)'},
    {transform: 'translate(0,10px)'},
    // {transform: 'translate(0,0)'},
    {transform: 'translate(0,-10px)'},
],{
    duration:5000,
    iterations:Infinity,
    
})

var Person = document.getElementById('person')

var PersonAnimate = Person.animate([
    {transform: 'translate(0,-1000px)'},
    {transform: 'translate(0,0)'},
    
],{
    duration:3000,
    // iterations:Infinity,
})


var Boat = document.getElementById('boat')


var boatAnimate = Boat.animate([
    {transform: 'translate(0,-1000px)'},
    // {transform: 'translate(0,0px)'},
    {transform: 'translate(0,80px)'},
    // {transform: 'translate(0,110px)'},
    {transform: 'translate(0,0)'},
    {transform: 'translate(-500px,0)'},
    {transform: 'translate(500px,0)'},
],{
    duration:10000,
    // delay:3000,      
    iterations:Infinity,
})

var Birds = document.getElementById('birds')

var BirdAni= Birds.animate([
    {transform:'translate(0,0)'},
    {transform:'translate(-1000%,0)'},
    // {transform:'translate(-100%,0)'},
],{
    duration:10000,
    iterations:Infinity
})