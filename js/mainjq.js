$(window).load(function() {
    //до-после
    $(".before-after").twentytwenty();

    //галерея до-после
    $(".before-slider").slick({
        draggable: false,
        dots: true,
        dotsClass: "before-slider__dots",
        prevArrow: $(".arrow-left"),
        nextArrow: $(".arrow-right"),
    });

    //кнопка меню
    $(".menu-button").on("click", function(){
        $(".menu").toggleClass('menu_active');
    });

    //обработка select
    $(".select").on("click", function(){
        $(".select__dropdown").toggleClass("select__dropdown__open")
    });
    $(".select__option").on('click', function(){
        let value = $(this).attr("data-value");
        $("#select-type").val(value);
        $(".select_checked").text(value);
        $(".select__dropdown").toggleClass("select__dropdown_open");
    });

    //маска ввода телефонв
    $('input[type="tel"]').mask("+7 (999) 999-99-99 ");

    //прокрутка
    $("a[href^='#']").click(function(){
        let _href=$(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top - 150 + "px"});
    })

    
  });

