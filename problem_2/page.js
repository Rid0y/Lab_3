//initialising variables
var c_timer = new Date();
var t_date = null;

//show_count = null;
var show_count = Rx.Observable.interval(1000);
var my_timer = document.getElementById("show_count");
var begin_timer = document.getElementById("begin_timer");
var begin_timerClicked = Rx.Observable.fromEvent(begin_timer,"click");
begin_timerClicked.subscribe(() => timer_Info());

function timer_Info()
{
    my_timer.innerHTML = "";
    begin_timer.disabled = true;
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let second = document.getElementById("second").value;

    //setting up varaibles for timer setup
    let hour_validation = num_validation(hours) &&
                    !(e_string_test(hours)) && test_hour(hours);
    let hour_field = (hour_validation ? hours : 0);

    
    let minute_validation = num_validation(minutes) &&
                        !(e_string_test(minutes)) && 
                        test_min_sec(minutes);
    let minute_field = (minute_validation ? minutes : 0);


    let second_validation = num_validation(second) &&
                        !(e_string_test(second)) && 
                        test_min_sec(second);
    let second_field = (second_validation ? second : 0);

    if(hour_field == 0 && minute_field == 0 && second_field == 0){
        alert("Invalid input, please try again");
        begin_timer.disabled = false;
        return;
    }else{
        My_timer(hour_field,minute_field,second_field);
    }
}

//functions for validation and test cases
function num_validation(InputNumber){
    let NumberTest = /^[0-9]+$/
    return NumberTest.test(InputNumber);
}
function test_min_sec(InputNumber){
    return InputNumber < 60;
}
function test_hour(InputNumber){
    return InputNumber < 24;
}
function e_string_test(InputNumber){ 
    return InputNumber == "";
}
function single_d_test(Input){
    return (Number(Input) > 9 ? Input : "0" + Input);
}

//function to set the timer
function My_timer(Hour, Minute, Second){
    
    let t_date = new Date();
    let s_hour = Number(t_date.getHours()) + Number(Hour);
    let s_minute = Number(t_date.getMinutes()) + Number(Minute);

    //add 2 secs to timer as it's delayed
    let s_second = Number(t_date.getSeconds()) + Number(Second) + 2;

    c_timer = new Date(t_date.getFullYear(), t_date.getMonth(), 
                t_date.getDate(),s_hour,s_minute,s_second);

    show_count.subscribe(() => Show_time());
}



function Show_time(){
    let TimerToGetTo = c_timer.getTime();
    let currentTime = (new Date()).getTime();

    let timerLeft = TimerToGetTo - currentTime;
    var hours = Math.floor((timerLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timerLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timerLeft % (1000 * 60)) / 1000);
    let TimeDisplayString = "";

    if (hours > 0){
        TimeDisplayString = TimeDisplayString + single_d_test(hours) + ":";}

    if(minutes > 0){
        TimeDisplayString = TimeDisplayString + single_d_test(minutes) + ":";}

    if(seconds > -1){
        TimeDisplayString = TimeDisplayString + single_d_test(seconds);}

    my_timer.innerHTML = TimeDisplayString;
    if(timerLeft < 0){
        //clearInterval(show_count);
        my_timer.innerHTML = "Timer expired";
        begin_timer.disabled = false;
        show_count.unsubscribe();
    }
}
