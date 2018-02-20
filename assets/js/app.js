// Inicio carousel
$(document).ready(function () {
    var imgItems = $(".slider li").length;//numero de imagenes
    var imgPos = 1;
    for (i = 1; i <= imgItems; i++) { //itera la cantidad de imgItems y va añadiendo iconos segun la cantidad de imagenes que haya
        $(".pagination").append("<li>" + "<span class='fa fa-circle'>" + "</span>" + "</li>");
    }

    $(".slider li").hide();
    $(".slider li:first").show();
    $(".pagination li:first").css({ 'color': '#CD6E2E' });
    //funciones para pasar las imagenes
    $(".pagination li").click(pagination);
    $(".right span").click(nextSlider);
    $(".left span").click(prevSlider);

    setInterval(function () { //animacion
        nextSlider();
    }, 4000);

    //funciones

    function pagination() {
        var paginationPos = $(this).index() + 1; //traigo el valor de la posicion del elemento
        $(".slider li").hide();
        $(".slider li:nth-child(" + paginationPos + ")").fadeIn();
        $(".pagination li").css({ 'color': '#858585' })
        $(this).css({ 'color': '#CD6E2E' })
        imgPos = paginationPos;
    }
    function nextSlider() {
        if (imgPos >= imgItems) {
            imgPos = 1
        } else {
            imgPos++;
        }
        $(".pagination li").css({ 'color': '#858585' });
        $(".pagination li:nth-child(" + imgPos + ")").css({ 'color': '#CD6E2E' });
        $(".slider li").hide();
        $(".slider li:nth-child(" + imgPos + ")").fadeIn();
    }
    function prevSlider() {
        if (imgPos <= 1) {
            imgPos = imgItems;
        } else {
            imgPos--;
        }
        $(".pagination li").css({ 'color': '#858585' });
        $(".pagination li:nth-child(" + imgPos + ")").css({ 'color': '#CD6E2E' });
        $(".slider li").hide();
        $(".slider li:nth-child(" + imgPos + ")").fadeIn();
    }


})
// Fin carousel

