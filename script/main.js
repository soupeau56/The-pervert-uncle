
var FOLDER_CHARACTER = "Image/Character/";
var FOLDER_OBJECT = "Image/Object/";
var FOLDER_PLACE = "Image/Place/";
window.src = {
    "Clara": FOLDER_CHARACTER + "Clara/Clara.jpg",
    "Collar": FOLDER_OBJECT + "Collar.jpg",
    "NakedCooking": FOLDER_CHARACTER + "Clara/nakedCooking.gif",
    "blowjob": FOLDER_CHARACTER + "Clara/blowjob.gif",
    "blowjob2": FOLDER_CHARACTER + "Clara/blowjob2.gif",
    "blowjob3": FOLDER_CHARACTER + "Clara/blowjob3.gif",
    "nakedWalk": FOLDER_CHARACTER + "Clara/nakedWalk.gif",
    "nakedWalk2": FOLDER_CHARACTER + "Clara/nakedWalk2.gif",
    "spanking": FOLDER_CHARACTER + "Clara/spanking.gif",
    "spanking2": FOLDER_CHARACTER + "Clara/spanking2.gif",
    "chastity_belt": FOLDER_CHARACTER + "Clara/Chastity_Belt.gif",
    "blank": "Image/Outfit/blank.png",
    "open_suitcase": FOLDER_OBJECT + "open_suitecase.jpg",
    "cocaine_bag": FOLDER_OBJECT + "cocaine_bag.jpg",
    "dildo": FOLDER_OBJECT + "dildo.jpg",
    "shower": FOLDER_CHARACTER + "Clara/shower.gif",
    "france_map": FOLDER_OBJECT + "france_map.jpg",
    "masturbation": FOLDER_CHARACTER + "Clara/masturbation.gif",
    "Clara_Bedroom": FOLDER_PLACE + "Clara_Bedroom.jpg",
    "Loic_Bedroom": FOLDER_PLACE + "Loic_Bedroom.jpg",
    "Kitchen": FOLDER_PLACE + "Kitchen.jpg",
    "Bathroom": FOLDER_PLACE + "Bathroom.jpg",
    "WC": FOLDER_PLACE + "WC.jpg",
    "Livingroom": FOLDER_PLACE + "Livingroom.jpg",
    "Garden": FOLDER_PLACE + "Garden.jpg",
    "Naxxremis": FOLDER_CHARACTER + "Naxxremis/Naxxremis.jpg",
    "fairyIcon": FOLDER_OBJECT + "icon/fairy_icon.jpg",
    "collarIcon": FOLDER_OBJECT + "icon/collar_icon.jpg",
    "Town": FOLDER_PLACE + "Town.jpg",
    "Countryside_Road": FOLDER_PLACE + "Countryside_Road.jpg",
    "Bathroom_Door": FOLDER_PLACE + "Bathroom_Door.jpg",
    "Lily" : FOLDER_CHARACTER + "Lily/Lily.jpg",
    "Doctor_Office" : FOLDER_PLACE+"Doctor_Office.jpg",
    "Doctor_Office_Door" : FOLDER_PLACE+"Doctor_Office_Door.jpg"
};

window.importScripts("script/Utility.js", "script/Side-bar.js", "script/Events.js", "script/Transforms.js", "script/Clock.js", "script/Wardrobe.js")
    .then(function () {

        console.log("Events",Events)
        var menu = document.getElementById('menu');
        var outfitWindow = SideBar.newOutfitWindow(window.src);
        var clockWindow = document.createElement('span');
        menu.prepend(outfitWindow);
        menu.prepend(clockWindow);


        window.showSideBar = function () {
            twineVars().sideBar.visibility = "visible";
        };

        window.hideSideBar = function () {
            twineVars().sideBar.visibility = "hidden";
        };

        window.updateWindowClothing = function () {
            SideBar.updateWindowClothing(outfitWindow, twineVars().sideBar);
        };

        window.playerGetNaked = function (clothes) {
            Wardrobe.playerGetNaked(clothes, twineVars().player);
            window.updateWindowClothing();
        }

        window.playerWear = function (clothes) {
            Wardrobe.playerWear(clothes, twineVars().player);
            window.updateWindowClothing();
        }

        window.timeGoes = function (hour, minute) {
            Clock.timeGoes(twineVars().clock, hour, minute);
        };

        window.timeSleep = function (hour) {
            Clock.timeSleep(twineVars().clock, hour);
        };

        window.inPeriod = function(hourMin,minuteMin,hourMax,minuteMax){
            return Clock.inPeriod(twineVars().clock,hourMin,minuteMin,hourMax,minuteMax)
        }

        window.event = function (string) {
            return Events.event(string);
        };

        window.action = function(string) {
            Events.action(string,twineVars());
        }

        window.canWorkAs = function (string) {
            return Events.canWorkAs(string, twineVars().clock);
        };

        window.playerTF = function () {
            Transforms.playerTF(twineVars().player);
        };

        window.pushTF = function (newTF) {
            Transforms.pushTF(twineVars().player.tf, newTF);
        };

        window.addTF = function (tf) {
            Transforms.addTF(tf, twineVars().player);
        };

        window.toSpeak = function (characterString) {
            return Utility.toSpeak(twineVars()[characterString]);
        };

        window.addWork = function (string) {
            Utility.addWork(string, twineVars().player);
        };

        window.firstLoad = function () {
            Utility.firstLoad(twineVars());
        }

        window.getNameClothing = function (string) {
            return Wardrobe.getNameClothing(string);
        }

        window.getIdDayOutfit = function (string) {
            return Wardrobe.getIdDayOutfit(string, twineVars().clock.daysWeek);
        }

        window.twineWardrobe = function () {
            return Wardrobe.twineWardrobe(twineVars().wardrobe, twineVars().clock.daysWeek);
        }

        window.consoleTest = function (toTest) {
            if(toTest)
               console.log("test",toTest);
            else   
                console.log("test");
        }


        $(document).on(':passagerender', function () {
            window.updateWindowClothing();
            if (twineVars().player) {                
                clockWindow.innerHTML = Clock.clockToString(twineVars().clock);

            }
        });



    }).catch(function (error) {
        console.error("Error: importScripts", error);
    });

