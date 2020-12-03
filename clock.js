function clock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    var half = "";
    if(hours >= 12){
        half = "PM";
    } else {
        half = "AM";
    }
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("half").innerHTML = half;

    setTimeout(clock, 1000);
}
clock()