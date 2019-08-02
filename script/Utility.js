var Utility = (function () {
    var instance = {}

    instance.toSpeak = function(character) {
        var string = character.somethingToSay[0];
        character.somethingToSay.splice(0, 1);
        return string;
    };

    instance.addWork = function(string, character) {
        character.workList.push(string)
    };


    instance.firstLoad = function (twineVars) {
        
        twineVars.loic = {
            "name": "Loic",
            "love": 0,
            "domination": 1,
            "pref": {
                "player": "tomboy",
                "punish_cocain": false,
                "punish_masturb": false,
                "hot_drink": "herbal tea"
            },
            "item" : {
            },
            "event": {
                "find_dildo": false,
                "find_cocain": false
            },
            "stage": {
                "naxxremis": 0
            },
            "somethingToSay": ["LoicSay_helpCook", "LoicSay_findAJob"]
        };
        twineVars.player = {
            "name": "Clara",
            "cry" : 0,
            "body": {
                "hair": {
                    "length": 2,
                    "hairstyle": "tomboy",
                    "color": "black"
                },
                "breast": {
                    "size": 1,
                    "milk": 0
                },
                "butt": {
                    "size": 2
                },
                "size": 190,
                "magic": 0,
                "muscle": 3
            },
            "clothing": {
                "hairstyle": "blank",
                "headwear": "blank",
                "outfit": "blank",
                "bra": "blank",
                "underwear": "blank",
                "petticoat" : "blank",
                "shoes": "blank",
                "socks": "blank"
            },
            "item" : {
                "dildo" : 1,
                "cocaïne" : 3
            },
            "event": {
                "masturbated": false,
                "lookForAJob": false,
                "lookingForJob": false
            },
            "stage": {
                "townTour": 0
            },
            "work": {
                "waitress": {
                    "stage": 0,
                    "absent": 0,
                    "late": 0,
                    "punish": false,
                    "punishStage": 0,
                    "planing": {
                        "noon": {
                            "activated": false,
                            "worked": true,
                            "workdayList": [1, 2, 3, 4, 5],
                            "workHour": {
                                "begin": 11,
                                "end": 14
                            }
                        },
                        "evening": {
                            "activated": false,
                            "worked": true,
                            "workdayList": [2, 4],
                            "workHour": {
                                "begin": 19,
                                "end": 21
                            }
                        }
                    }
                },
                "loicCook": {
                    "stage": 0,
                    "worked": true,
                    "absent": 0,
                    "late": 0,
                    "punish": false,
                    "punishStage": 0,
                    "planing": {
                        "evening": {
                            "activated": false,
                            "worked": true,
                            "workdayList": [1, 3, 5],
                            "workHour": {
                                "begin": 19,
                                "end": 21
                            }
                        }
                    }
                },
            },
            "workList": []
        };


        twineVars.lily = {
            "event": {

            }
        }


        twineVars.clock = {
            "day": 6,
            "daysWeek": 0,
            "month": 6,
            "hour": 17,
            "minute": 0,
            "weekNumber": 0,
            "dayEvent" : {

            }
        };
        twineVars.sideBar = {
            "visibility": "hidden"
        };

        twineVars.wardrobe = {
            "headwear": [],
            "outfit": ["pajamas","tshirt_jeans"],
            "bra": ["brassiere"],
            "underwear": ["boxer"],
            "petticoat" : [],
            "shoes": ["sneakers"],
            "socks": ["socks"]
        }

    }
    return {
        instance
    }

})().instance;
