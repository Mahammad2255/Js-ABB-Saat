

setInterval(()=>{
const time = document.querySelector("#time");
    var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var hours = date.getHours();
var seconds = date.getSeconds();
var gun = "AM";
if(hours>12){
    gun = "PM";
    hours = hours - 12;
}
if(hours<10){
   hours = "0" + hours;
}
if(minutes<10){
    minutes = "0" + minutes;
 }
 if(seconds<10){
    seconds = "0" + seconds;
 }
time.textContent = hours + ":" + minutes + ":" +  seconds + " " + gun;

})