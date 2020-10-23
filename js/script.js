'use strict';
let slideIndex 	= 1,
	img 		= document.querySelectorAll('img'),
	btnPrev 	= document.querySelector('.prev'),
	btnNext 	= document.querySelector('.next'),
	dots 		= document.querySelectorAll('.dot'),
	dotsWrap	= document.querySelector('.dots');

img.forEach((elem) => (elem.classList.remove('animate-lists')));
img[slideIndex - 1].classList.add('animate-lists');

function showSlides(n) {
	if (n > img.length) {
		slideIndex = 1;
	} else if (n < 1) {
		slideIndex = img.length;
	};

	img.forEach((elem) => (elem.classList.remove('animate-lists')));
	dots.forEach((elem) => (elem.style.background = "transparent"));

	dots[slideIndex - 1].style.background = "#000";
	img[slideIndex - 1].classList.add('animate-lists');
};

function plusSlides(n) {
	showSlides(slideIndex += n); 
};

function misunSlides(n) {
	showSlides(slideIndex -= n);
};

function currentSlide(n) {
	showSlides(slideIndex = n);
}

btnNext.addEventListener('click', function() {
	plusSlides(1);
});

btnPrev.addEventListener('click', function() {
	misunSlides(1);
});

dotsWrap.addEventListener('click', function(e) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
			currentSlide(i);
		}
	}
});