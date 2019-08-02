var Clock = (function () {
    var instance = {}
    var dayList = ["Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // clock = {
    //     "day" : 6,
    //     "daysWeek": 0,
    //     "month" : 6,
    //     "hour" : 17,
    //     "minute" : 0,
    // }

    instance.clockToString = function clockToString(clock) {
        var minute = clock.minute < 10 ? "0" + clock.minute : clock.minute;
        var hour = clock.hour < 10 ? "0" + clock.hour : clock.hour;
        return monthList[clock.month] + " " + clock.day + ", " + dayList[clock.daysWeek] + " " + hour + ":" + minute;
    };  
    
    var nextDay = function nextDay(clock) {
        updatePlayerWork(clock)
        clock.dayEvent = {};
        clock.day++;
    
        if (clock.day >= daysMonth[clock.month]) {
            clock.month++;
            clock.day = 1;
        }
    
        clock.daysWeek++;
        if (clock.daysWeek >= 7) {
            clock.daysWeek = 0;
            clock.weekNumber++;
        }
    };
    
    var updatePlayerWork = function (clock) {
        var workList = twineVars().player.workList
    
        for (var workString in workList) {
            for (var planingString in workList[workString].planing) {
                var planing = workList[workString].planing[planingString]
                if (planing.activated && planing.dayList.includes(clock.daysWeek)) {
                    if (planing.worked == false) {
                        workList[workString].absent++;
                        workList[workString].punish = true;
                    } else {
                        planing.worked = false;
                    }
                }
            }
        }
    }
    
    instance.timeGoes = function timeGoes(clock, hour, minute) {
        clock.minute += minute;
    
        while (clock.minute >= 60) {
            clock.minute -= 60;
            clock.hour++;
        }
    
        clock.hour += hour;
    
        while (clock.hour >= 24) {
            clock.hour -= 24;
            nextDay(clock);
        }
    };
    
    instance.timeSleep = function timeSleep(clock, hour) {
        if (clock.hour >= hour) nextDay(clock);
        clock.hour = hour;
        clock.minute = 0;
    };    

    instance.inPeriod = function(clock,hourMin,minuteMin,hourMax,minuteMax){
        if(hourMin <= clock.hour <= hourMax){
            if(clock.hour == hourMin)
                return minuteMin <= clock.minute 
            else if(clock.hour == hourMax)
                return clock.minute <= minuteMax
            else
                return true
        }
        else return false
    }

    return {
        instance
    }

})().instance;


