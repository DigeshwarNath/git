var hr = 0;  // initially assigning a variable hour to 0 
var min = 0;  // initially assign a variable Minute to 0
var sec = 0;  // initially assign a variable Second to 0
var count = 0; // initially assign a varriable count to 0
var timer = false; // initially timer is false when we start the stopwatch then it will true

function start(){    // we have created a function name start()
   timer = true;
   stopwatch1();     // call function stopwatch1()
}

function stop(){    // another function name stop()
    timer=false;
}

function reset(){   // another function name reset()
     timer=false;
     hr=0;
     min=0;
     sec=0;
     count=0;
     document.getElementById("hr").innerHTML = "00";
     document.getElementById("min").innerHTML = "00";
     document.getElementById("sec").innerHTML = "00";
     document.getElementById("count").innerHTML = "00";
}
function stopwatch1(){
    if(timer == true){
        count = count+1;  //whenever timer is true count is incremented to count+1 

        if(count == 100){  //when count is achived their hundreth part then it become zero and second in increse to sec+1
            sec = sec+1;
            count = 0;
        }
        if(sec == 60){     //when second is achived to 60 then it will become zero and minute is increse to min+1
            min = min+1;
            sec=0;
        }
        if(min == 60){    //when min is achived to 60 then it will become zero and hour is increase to hr+1
            hr = hr+1;
            min = 0;
            sec = 0;
        }
       // take a 4variables as hrString, minString, secString, countString to store the value of Hour, Minute, Second and Count
        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if(hr < 0){
            hrString = "0" + hrString;
        }
        if(min < 10){
            minString = "0" + minString;
        }
        if(sec < 10){
            secString = "0" + secString;
        }
        if(count < 10){
            countString = "0" + countString;
        }
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
        setTimeout("stopwatch1()", 10);
    }
}
