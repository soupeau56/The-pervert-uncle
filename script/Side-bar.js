
var SideBar = (function () {
    var instance = {}
        

    var newCase = function (src) {
        var ourCase = document.createElement('img');
        ourCase.src = src.blank;
        ourCase.className = "clothing_image_sidebar_11";

        ourCase.changeImgTo = function (string) {
            if (string == "blank" || !string) ourCase.src = src.blank;
            else ourCase.src = "Image/Outfit/" + string + ".jpg";
        };

        return ourCase;
    };


    instance.newOutfitWindow = function (src) {
        var outfitWindow = document.createElement('div');
        outfitWindow.style.visibility = 'hidden'
        outfitWindow.className = "outfit_window";
        var clothes = document.createElement('div');
        var outfitImages = document.createElement('div');
        outfitImages.className = "outfitImages";
        var case1 = newCase(src);
        var case2 = newCase(src);
        var br1 = document.createElement('br');
        var case3 = newCase(src);
        var case4 = newCase(src);
        var br2 = document.createElement('br');
        var case5 = newCase(src);
        var case6 = newCase(src);
        var br3 = document.createElement('br');
        var case7 = newCase(src);
        var case8 = newCase(src);
        outfitWindow.appendChild(clothes);
        clothes.appendChild(outfitImages);
        outfitImages.appendChild(case1);
        outfitImages.appendChild(case2);
        outfitImages.appendChild(br1);
        outfitImages.appendChild(case3);
        outfitImages.appendChild(case4);
        outfitImages.appendChild(br2);
        outfitImages.appendChild(case5);
        outfitImages.appendChild(case6);
        outfitImages.appendChild(br3);
        outfitImages.appendChild(case7);
        outfitImages.appendChild(case8);
        outfitWindow.case1 = case1;
        outfitWindow.case2 = case2;
        outfitWindow.case3 = case3;
        outfitWindow.case4 = case4;
        outfitWindow.case5 = case5;
        outfitWindow.case6 = case6;
        outfitWindow.case7 = case7;
        outfitWindow.case8 = case8;
        return outfitWindow;
    };

    instance.updateWindowClothing = function (outfitWindow, sideBar) {
        if (sideBar.visibility) {
            outfitWindow.style.visibility = sideBar.visibility;
        } else {
            outfitWindow.style.visibility = 'hidden';
        }
        var clothing = twineVars().player.clothing;
        if (clothing.bra == "blank") clothing.bra = "breast";
        if (clothing.underwear == "blank") {
            if (clothing.chastityBelt) clothing.underwear = clothing.chastityBelt;
            else  clothing.underwear = "vagina";
        }

        outfitWindow.case1.changeImgTo(clothing.hairstyle);
        outfitWindow.case2.changeImgTo(clothing.headwear);
        outfitWindow.case3.changeImgTo(clothing.bra);
        outfitWindow.case4.changeImgTo(clothing.outfit);
        outfitWindow.case5.changeImgTo(clothing.underwear);
        outfitWindow.case6.changeImgTo(clothing.petticoat);
        outfitWindow.case7.changeImgTo(clothing.socks);
        outfitWindow.case8.changeImgTo(clothing.shoes);
    };


    var newToolsBox = function (src) {
        var toolsBox = document.createElement('div');

        var choiceTable = document.createElement('table');

    }

    return {
        instance
    }

})().instance;
