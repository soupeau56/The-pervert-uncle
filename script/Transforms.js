var Transforms = (function(){
    
    var tfLimit = {
        "size": {
            "min": 100,
            "max": 250
        },
        "breast": {
            "min": 0,
            "max": 6
        },
        "butt": {
            "min": 0,
            "max": 6
        },
        "muscle": {
            "min": 0,
            "max": 5
        },
        "hair": {
            "min": 0,
            "max": 3
        },
        "magic": {
            "min": 0,
            "max": 10
        } 
        
        // "tf": {
        //     "size": 0,
        //     "breast": 0,
        //     "butt": 0,
        //     "muscle": 0,
        //     "hair": 0,
        //     "hairStyle": "tomboy"
        //     "hairColor": "black"
        //     "magic": 0
        // }
    
    };
    
    var addTF = function addTF(newTF, player) {
        if (player.tf && Object.keys(player.tf).length != 0) {
            newTF = getNonNullTF(newTF);
    
            for (var i in tf) {
                if (player.tf[i] && typeof player.tf[i] == "number") {
                    player.tf[i] += newTF[i];
                } else {
                    player.tf[i] = newTF[i];
                }
            }
        } else {
            player.tf = getNonNullTF(newTF);
        }
    };
    
    var getNonNullTF = function getNonNullTF(tf) {
        for (var indexTF in tf) {
            if (typeof tf[indexTF] == "number" && tf[indexTF] == 0) delete tf[indexTF];
        }
    
        return tf;
    };
    
    var playerTF = function playerTF(player) {
        var newTF = player.tf;
        if (newTF.size) sizeTF(player);
        if (newTF.breast) breastTF(player);
        if (newTF.butt) buttTF(player);
        if (newTF.muscle) muscleTF(player);
        if (newTF.hair) hairLengthTF(player);
        var playerHair = player.body.hair;
        if (newTF.hairColor) playerHair.hairstyle = newTF.hairColor;
        if (newTF.hairStyle) playerHair.color = newTF.hairColor;
        player.clothing.hairstyle = "hair_" + playerHair.hairstyle + "_0" + playerHair.length + "_" + playerHair.color;
        if (newTF.magic) magicTF(player);
        player.tf = {};
    };
    
    var sizeTF = function sizeTF(player) {
        if (player.tf.size = -3) {
            player.body.size -= 20;
            if (player.body.size < tfLimit.size.min) player.body.size = tfLimit.size.min;
        } else if (player.tf.size = -2) {
            player.body.size -= 10;
            if (player.body.size < tfLimit.size.min) player.body.size = tfLimit.size.min;
        } else if (player.tf.size = -1) {
            player.body.size -= 5;
            if (player.body.size < tfLimit.size.min) player.body.size = tfLimit.size.min;
        } else if (player.tf.size = 1) {
            player.body.size += 5;
            if (player.body.size > tfLimit.size.max) player.body.size = tfLimit.size.max;
        } else if (player.tf.size = 2) {
            player.body.size += 10;
            if (player.body.size > tfLimit.size.max) player.body.size = tfLimit.size.max;
        } else if (player.tf.size = 3) {
            player.body.size += 20;
            if (player.body.size > tfLimit.size.max) player.body.size = tfLimit.size.max;
        }
    };
    
    var breastTF = function breastTF(player) {
        player.body.breast += player.tf.breast;
    
        if (player.tf.breast > 0) {
            if (player.body.breast > tfLimit.breast.max) player.body.breast = tfLimit.breast.max;
        } else if (player.body.breast < tfLimit.breast.min) player.body.breast = tfLimit.breast.min;
    };
    
    var buttTF = function buttTF(player) {
        player.body.butt.size += player.tf.butt;
    
        if (player.tf.butt > 0) {
            if (player.body.butt.size > tfLimit.butt.max) player.body.butt.size = tfLimit.butt.max;
        } else if (player.body.butt.size < tfLimit.butt.min) player.body.butt.size = tfLimit.butt.min;
    };
    
    var muscleTF = function muscleTF(player) {
        player.body.muscle += player.tf.muscle;
    
        if (player.tf.muscle > 0) {
            if (player.body.muscle > tfLimit.muscle.max) player.body.muscle = tfLimit.muscle.max;
        } else if (player.body.muscle < tfLimit.muscle.min) player.body.muscle = tfLimit.muscle.min;
    };
    
    var hairLengthTF = function hairLengthTF(player) {
        player.body.hair.length += player.tf.hair;
    
        if (player.tf.hair > 0) {
            if (player.body.hair.length > tfLimit.hair.max) player.body.hair.length = tfLimit.hair.max;
        } else if (player.body.hair.length < tfLimit.hair.min) player.body.hair.length = tfLimit.hair.min;
    };
    
    var magicTF = function magicTF(player) {
        player.body.magic += player.tf.magic;
    
        if (player.tf.magic > 0) {
            if (player.body.magic > tfLimit.magic.max) {
                player.body.magic = tfLimit.magic.max;
                player.tf.magic = 0;
            }
        } else if (player.body.magic < tfLimit.magic.min) {
            player.body.magic = tfLimit.magic.min;
            player.tf.magic = 0;
        }
    };
    
    var pushTF = function pushTF(claraTF, newTF) {
        for (var _tf in newTF) {
            claraTF[_tf] += newTF[_tf];
        }
    };

    return {
        addTF,
        playerTF,
        pushTF
    }

})();
