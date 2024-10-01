const displayTime = document.getElementById('display');
let [seconds,minutes,hours,milisecond] = [0,0,0,0];
let timer = null;

const stopWatch =() =>{
    milisecond++;
    if(milisecond == 60){   
        milisecond = 0; 
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
    }
    }
    let ms = milisecond < 10 ? "0" + milisecond : milisecond;
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    
    displayTime.innerHTML = h +":"+ m +":"+ s + ":" + ms;

}

function startWatch(){
        timer = setInterval(stopWatch,1000);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [seconds,minutes,seconds] = [0,0,0]
    displayTime.innerHTML = "00:00:00:00";
}