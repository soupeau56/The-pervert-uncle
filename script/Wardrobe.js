var Wardrobe = (function () {
    var outfitList = {
        "dress_lolita": "lolita dress",
        "dress_casual": "casual dress",
        "tshirt_jeans": "tshirt and jeans"
    }

    var getNameClothing = function (string) {
        console.log(string)
        if (outfitList[string])
            return outfitList[string];
        else
            return string;
    }

    var getIdDayOutfit = function (string, day) {
        if (string == "pajamas") return getIdOutfit(string, 0);
        else if (string == "sneakers") {
            if (day > 4) return getIdOutfit(string, 0);
            else return getIdOutfit(string, 1);
        }
        else return getIdOutfit(string, day)
    }

    var getIdOutfit = function (string, int) {
        if (int < 10)
            return string + "_0" + int;
        else
            return string + int;
    }

    var playerWear = function playerWear(Newclothes, player) {
        var clothing = player.clothing;
        clothing.hairstyle = Newclothes.hairstyle ? Newclothes.hairstyle : clothing.hairstyle;
        clothing.headwear = Newclothes.headwear ? Newclothes.headwear : clothing.headwear;
        clothing.outfit = Newclothes.outfit ? Newclothes.outfit : clothing.outfit;
        clothing.underwear = Newclothes.underwear ? Newclothes.underwear : clothing.underwear;
        clothing.petticoat = Newclothes.petticoat ? Newclothes.petticoat : clothing.petticoat;
        clothing.bra = Newclothes.bra ? Newclothes.bra : clothing.bra;
        clothing.socks = Newclothes.socks ? Newclothes.socks : clothing.socks;
        clothing.shoes = Newclothes.shoes ? Newclothes.shoes : clothing.shoes;
    };

    var playerGetNaked = function playerGetNaked(Newclothes, player) {
        if (Newclothes) {
            var clothing = player.clothing;
            clothing.headwear = Newclothes.headwear ? Newclothes.headwear : "blank";
            clothing.outfit = Newclothes.outfit ? Newclothes.outfit : "blank";
            clothing.underwear = Newclothes.underwear ? Newclothes.underwear : "blank";
            clothing.petticoat = Newclothes.petticoat ? Newclothes.petticoat : "blank";
            clothing.bra = Newclothes.bra ? Newclothes.bra : "blank";
            clothing.socks = Newclothes.socks ? Newclothes.socks : "blank";
            clothing.shoes = Newclothes.shoes ? Newclothes.shoes : "blank";
        }
        else {
            var clothing = player.clothing;
            clothing.headwear = "blank";
            clothing.outfit = "blank";
            clothing.underwear = "blank";
            clothing.petticoat = "blank";
            clothing.bra = "blank";
            clothing.socks = "blank";
            clothing.shoes = "blank";
        }

    }

    var twineWardrobe = function (wardrobe, day) {
        var to_return = "";
        for (var cloth_type in wardrobe) {
            if (wardrobe[cloth_type].length != 0) {
                to_return += cloth_type + " : \n";
                for (var idCloth in wardrobe[cloth_type]) {
                    to_return += "<<click " + wardrobe[cloth_type][idCloth] + ">>>><<run playerWear({'"
                        + cloth_type + "':'" + getIdDayOutfit(wardrobe[cloth_type][idCloth], day) + "'})>><</click>>\n";
                }
            }
        }
        return to_return;
    }


    return {
        getNameClothing,
        getIdOutfit,
        getIdDayOutfit,
        playerWear,
        playerGetNaked,
        twineWardrobe
    }

})();

