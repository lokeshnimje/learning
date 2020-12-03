var btn_start = document.getElementById("start")
var btn_stop = document.getElementById("stop")
var btn_reset = document.getElementById("reset")
var hr = document.getElementById("hours")
var min = document.getElementById("minutes")
var sec = document.getElementById("seconds")
var ms = document.getElementById("milisec")
var stopWatch = null
var mili=0;
var second = 0;
var minutes = 0;
var hour = 0;

btn_start.addEventListener('click', start)
btn_stop.addEventListener('click', stop_watch)
btn_reset.addEventListener('click', reset_watch)

function start_watch(){
    stopWatch = setInterval(function(){
        mili++;
        ms.innerHTML = mili;
        if(mili > 99){
            mili = 0;
            second++;
        }
        sec.innerHTML = second;
        if(second == 60){
            second = 0;
            minute++;
        }
        min.innerHTML = minute;
        if(minute == 60){
            minute = 0;
            hour++;
        }
        hr.innerHTML = hour
    },10);
}

function stop_watch(){
    clearInterval(stopWatch)
}

function reset_watch(){
    stop_watch()
    mili = 0;
    second = 0;
    minute = 0;
    hour = 0;
    ms.innerHTML = mili;
    sec.innerHTML = second;
    min.innerHTML = minute;
    hr.innerHTML = hour
}

function start(){
    reset_watch()
    start_watch()
}