const clock = document.querySelector("h2#clock");
const subtext = document.querySelector(".subtext");

function showClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = hour +":"+  min + ":" + sec;

    if( hour >=22 ){
        subtext.innerText = "It's time to go to bed!";
    }else if(hour<12){
        subtext.innerText = " Good Morning   !"
    }else if(hour>=12 || hour < 18){
        subtext.innerText = "Good Afternoon";
    }else{
        subtext.innerText = " Good evening !"
    }
}

showClock();
setInterval(showClock, 1000);


