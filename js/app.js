// function([string1, string2],target id,[color1,2])    
consoleText(['FRONT END DEVELOPER', 'WEB DESIGNER', 'CODER'])

function consoleText(words, id = 'text') {
    var visible = true
    var con = document.getElementById('console')
    var letterCount = 1
    var x = 1
    var waiting = false
    var target = document.getElementById(id)
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedWord = words.shift()
                words.push(usedWord)
                x = 1
                letterCount += x
                waiting = false
            }, 100)
        } else
            if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true
                window.setTimeout(function () {
                    x = -1
                    letterCount = x + 2
                    waiting = false
                }, 1000)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x
            }
    }, 100)

}




$(document).ready(function () {

    $('.ir-arriba').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });

});



$(function () {
    function elementWidth(element) {
        var style = element.currentStyle || window.getComputedStyle(element),
            width = element.offsetWidth, // or use style.width
            margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight),
            padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight),
            border = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

        return (width + margin - padding + border);
    }

    function repositionHexagons() {
        var hexagonWidth = elementWidth($(".hexagon")[0]) + 6;
        var windowWidth = elementWidth($($(".hexagon")[0]).parent()[0]); //$(window).width();
        var hexagonsPerLine = windowWidth / hexagonWidth;
        var roundedHexagonsPerLine = (Math.floor(hexagonsPerLine * 2) / 2).toFixed(1);

        console.log("Hexagon Width" + hexagonWidth);
        console.log("Window width:" + windowWidth);
        //console.log("Hex Per Line:" + hexagonsPerLine);
        console.log("Hex Per Line:" + roundedHexagonsPerLine);
        var firstItemOfNextRow = Math.floor(roundedHexagonsPerLine);
        var rowCount = 0;
        $(".hexagon").css("margin-left", 10);
        for (i = 1; i <= $(".hexagon").length; i++) {
            if (i === firstItemOfNextRow) {
                $($(".hexagon")[i]).css("margin-left", Math.round((hexagonWidth / 1.65)));
                firstItemOfNextRow = firstItemOfNextRow + (roundedHexagonsPerLine * 2) - 1;
            }
        }
    }

    $(window).on('resize orientationChange', function (event) {
        repositionHexagons();
    });
    repositionHexagons();
});