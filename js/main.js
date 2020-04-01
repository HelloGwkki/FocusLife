var LeaveSeconds = 0;
var LeaveMinutes = 0;
var LeaveHours = 0;
var LeaveDays = 0;
var LeaveMouths = 0;
var LeaveYears = 0;
console.log(`%c FOCUS YOU LIFE `,"color:#FFFFFF; background:black; font-size:50px")
function ChangeTime(){
    var GetTime = new Date();
    var Hour = String(GetTime.getHours());
    var Minute = String(GetTime.getMinutes());
    var Second = String(GetTime.getSeconds());
    if (Hour.length==1){
        Hour = "0"+Hour;
    };
    if (Minute.length==1){
        Minute = "0"+Minute;
    };
    if (Second.length==1){
        Second = "0"+Second;
    };
    Time=Hour + " : " + Minute+" : " + Second;
    $("#time").text(Time);
};
setInterval(function(){ChangeTime();}, 500);
setInterval(function(){
    LeaveSeconds = LeaveSeconds+1;
    if (LeaveSeconds>=60){
        LeaveSeconds = LeaveSeconds-60;
        LeaveMinutes = LeaveMinutes+1;
    }
    if (LeaveMinutes>=60){
        LeaveMinutes = LeaveMinutes-60;
        LeaveHours = LeaveHours+1;
    }
    if (LeaveHours>=24){
        LeaveHours = LeaveHours-24;
        LeaveDays = LeaveDays+1;
    }
    if (LeaveDays>=30){
        LeaveDays = LeaveDays-30;
        LeaveMouths = LeaveMouths+1;
    }
    if (LeaveMouths>=12){
        LeaveMouths = LeaveMouths-12;
        LeaveYears = LeaveYears+1;
    }
    if (LeaveSeconds!=0 && LeaveMinutes==0 && LeaveHours==0 && LeaveDays==0 && LeaveMouths==0 && LeaveYears==0){
        $("#leave").text("Leaving "+LeaveSeconds+" Second(s)");
    } else if(LeaveSeconds!=0 && LeaveMinutes!=0 && LeaveHours==0 && LeaveDays==0 && LeaveMouths==0 && LeaveYears==0){
        $("#leave").text("Leaving "+LeaveMinutes+" Minute(s),"+LeaveSeconds+" Second(s).");
    } else if(LeaveSeconds!=0 && LeaveMinutes!=0 && LeaveHours!=0 && LeaveDays==0 && LeaveMouths==0 && LeaveYears==0){
        $("#leave").text("Leaving "+LeaveHours+" Hour(s),"+LeaveMinutes+" Minute(s),"+LeaveSeconds+" Second(s).");
    } else if(LeaveSeconds!=0 && LeaveMinutes!=0 && LeaveHours!=0 && LeaveDays!=0 && LeaveMouths==0 && LeaveYears==0){
        $("#leave").text("Leaving "+LeaveDays+" Day(s),"+LeaveHours+" Hour(s),"+LeaveMinutes+" Minute(s),"+LeaveSeconds+" Second(s).");
    } else if(LeaveSeconds!=0 && LeaveMinutes!=0 && LeaveHours!=0 && LeaveDays!=0 && LeaveMouths!=0 && LeaveYears==0){
        $("#leave").text("Leaving "+LeaveMouths+" Mouth(s),"+LeaveDays+" Day(s),"+LeaveHours+" Hour(s),"+LeaveMinutes+" Minute(s),"+LeaveSeconds+" Second(s).");
    } else if(LeaveSeconds!=0 && LeaveMinutes!=0 && LeaveHours!=0 && LeaveDays!=0 && LeaveMouths!=0 && LeaveYears!=0){
        $("#leave").text("Leaving "+LeaveMouths+" Year(s),"+LeaveMouths+" Mouth(s),"+LeaveDays+" Day(s),"+LeaveHours+" Hour(s),"+LeaveMinutes+" Minute(s),"+LeaveSeconds+" Second(s).");
    };
}, 1000);