"use strinct";
(function () {
    var sliderCounter = 0;
    var cardVisible = 3;
    var slider = document.querySelector('.Slider');
    var sliderMove = document.querySelector('.Slider-move');
    var sliderCards = slider.querySelectorAll('.Slider-card');
    var sliderArrow = slider.querySelectorAll('.Slider-arrow');
    var sliderLine = slider.querySelectorAll('.Slider-line');
    var sliderBtn = slider.querySelectorAll('.Slider-btn');
    var sliderMoveValue = function () {
        var operacion = 100 / sliderCards.length;
        sliderMove.style.transform = "translateX(-".concat(operacion * sliderCounter, "%)");
    };
    var sliderLineActive = function () {
        sliderLine.forEach(function (eachLine, i) {
            sliderBtn[i].classList.remove('isActive');
        });
        sliderBtn[sliderCounter].classList.add('isActive');
    };
    var sliderNext = function () {
        sliderCounter++;
        if (sliderCounter >= sliderCards.length) {
            sliderCounter = 0;
        }
        sliderLineActive();
        sliderMoveValue();
    };
    var sliderPrev = function () {
        if (sliderCounter <= 0) {
            sliderCounter = sliderCards.length;
        }
        sliderCounter--;
        sliderLineActive();
        sliderMoveValue();
    };
    sliderMoveValue();
    sliderBtn.forEach(function (eachBtn, i) {
        sliderBtn[i].addEventListener('click', function () {
            sliderCounter = i;
            sliderLineActive();
            sliderCounter === sliderCards.length - 1 && sliderArrow[1].classList.remove('isActive');
            sliderCounter === 1 && sliderArrow[0].classList.remove('isActive');
            sliderMoveValue();
        });
    });
    sliderArrow[1].addEventListener('pointerdown', sliderNext);
    sliderArrow[0].addEventListener('pointerdown', sliderPrev);
    var introDiv = document.querySelector('.Intro');
    var bg = document.querySelector('.bg');
    var boy = document.querySelector('.boy');
    var freya = document.querySelector('.freya');
    var kratos = document.querySelector('.kratos');
    var trineo = document.querySelector('.trineo');
    var polvo1 = document.querySelector('.polvo1');
    var polvo2 = document.querySelector('.polvo2');
    var polvo3 = document.querySelector('.polvo3');
    var ruido = document.querySelector('.ruido');
    var snow1 = document.querySelector('.snow1');
    var snow2 = document.querySelector('.snow2');
    var efectoScrollFreya = function (elemento, velocidad) {
        window.addEventListener('scroll', function (e) {
            var scrollY = window.scrollY, innerHeight = window.innerHeight, innerWidth = window.innerWidth;
            var offsetTop = introDiv.offsetTop;
            var height = introDiv.getBoundingClientRect().height;
            var operacion = offsetTop - innerHeight - 1.5;
            var valorTransform = ((scrollY - operacion) / velocidad) / 10;
            var tipoTransform = "translateX(-".concat(valorTransform, "%) translateY(").concat(valorTransform, "%)");
            elemento.style.transform = (scrollY >= operacion)
                ? tipoTransform
                : "translate(0px)";
        });
    };
    var efectoScrollBoy = function (elemento, velocidad) {
        window.addEventListener('scroll', function (e) {
            var scrollY = window.scrollY, innerHeight = window.innerHeight;
            var offsetTop = introDiv.offsetTop;
            var operacion = offsetTop - innerHeight - 1.5;
            var valorTransform = ((scrollY - operacion) / velocidad) / 10;
            var tipoTransform = "translateX(-".concat(valorTransform, "%) translateY(").concat(valorTransform, "%) rotate(-").concat(valorTransform / 2, "deg) ");
            elemento.style.transform = (scrollY >= operacion)
                ? tipoTransform
                : "translate(0px)";
        });
    };
    var efectoScrollKratos = function (elemento, velocidad) {
        window.addEventListener('scroll', function (e) {
            var scrollY = window.scrollY, innerHeight = window.innerHeight;
            var offsetTop = introDiv.offsetTop;
            var operacion = offsetTop - innerHeight - 1.5;
            var valorTransform = ((scrollY - operacion) / velocidad) / 10;
            var tipoTransform = "translate(".concat(valorTransform, "%)");
            elemento.style.transform = (scrollY >= operacion)
                ? tipoTransform
                : "translate(0px)";
        });
    };
    efectoScrollFreya(freya, 4);
    efectoScrollBoy(boy, 7);
    efectoScrollKratos(kratos, 7);
})();
