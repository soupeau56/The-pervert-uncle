function Events(){

    var eventCondList = {
        "haveTF": function() {
            return twineVars().player.tf && Object.keys(twineVars().player.tf).length != 0;
        },
        "punish_masturb": function() {
            return twineVars().loic.pref.punish_masturb && twineVars().player.event.masturbated;
        },
        "loicWorkDay": function() {
            return twineVars().clock.daysWeek < 5;
        },
        "loicShower": function() {
            return twineVars().clock.hour == 6 && twineVars().clock.minute >= 15 && twineVars().clock.minute <= 30;
        },
        "loicBreakfast": function() {
            return twineVars().clock.hour == 6 && twineVars().clock.minute >= 0 && twineVars().clock.minute <= 14;
        },
        "breakFastTime": function() {
            return twineVars().clock.hour >= 6 && twineVars().clock.hour <= 9;
        },
        "LoicSomthingToSay": function () {
            return twineVars().loic.somethingToSay.length != 0;
        },
        "PlayerHaveToSetTable": function() {
            return twineVars().loic.somethingToSay.length != 0;
        },
        "friday": function() {
            return twineVars().clock.daysWeek == 4;
        },
        "haveDildo": function() {
            return twineVars().player.item.dildo >= 1;
        },
    };
    
    this.event = function(string) {
        return eventCondList[string]();
    };
    
    this.canWorkAs = function (string, clock) {
        if (!twineVars().player.workList.includes(string)) return false
        var toTestWork = twineVars().player.work[string];
        console.log("toTestWork", toTestWork)
        for (var planing in toTestWork.planing) {
            var planing = toTestWork.planing[planing];
            var workHour = planing.workHour
            console.log("planing", planing)
            console.log("(planing.workdayList.includes(clock.day)", planing.workdayList.includes(clock.day))
            console.log("workHour.begin -2", (workHour.begin - 2))
            console.log(" workHour.end ", workHour.end)
            console.log("clock.daysWeek", clock.daysWeek)
    
            if (planing.workdayList.includes(clock.daysWeek) && ((workHour.begin - 2) <= clock.hour && clock.hour <= workHour.end)) {
                console.log("return true")
                return true;
    
            }
        }
        return false;
    };


    var actionList = {
        "loicTakeDildo" : function(twineVars){
            twineVars.loic.domination++;
            twineVars.player.item.dildo--;
            if (twineVars.loic.item.dildo) twineVars.loic.item.dildo++;
            else twineVars.loic.item.dildo = 1
        },
        "loicSpankPlayer" : function(twineVars){
            twineVars.loic.domination++;
            twineVars.player.cry ++;
        },
        "loicPutChastyBeltPlayer" : function(twineVars){
            twineVars.loic.domination++;
            twineVars.player.clothing.chastityBelt = "chastity_belt";
        }

    }

    this.action = function(string,twineVars){
        return actionList[string](twineVars);
    }
    

}
