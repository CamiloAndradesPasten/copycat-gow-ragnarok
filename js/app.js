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
})();
