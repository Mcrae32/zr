
//scrolling
jQuery(window).on('scroll', function () {
	var top = jQuery(document).scrollTop();
	var batas = jQuery(window).height();
	var header = jQuery('header');
	var windowW = $(window).width();
	if (top > 0) {
		$('.if-s').addClass('sticky');
	} else {
		$('.if-s').removeClass('sticky');
	}
});

window.addEventListener('scroll', function (e) {
	const
		oldScroll = this.oldScroll || 0,
		newScroll = this.scrollY,
		//isScrollDown = newScroll > oldScroll;
		isScrollDown = newScroll > oldScroll && newScroll > 50;

	document.querySelector('header').classList.toggle('scroll-down', isScrollDown);
	this.oldScroll = newScroll;
	//top button
	document.getElementById('top_b').classList.toggle('show', isScrollDown);
	this.oldScroll = newScroll;
});

//slider button
$(document).ready(function () {

	$('.slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		  autoplaySpeed: 5000
	});

	$('.slides-wrapper').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1
	});
	
	$('#brands-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					centerMode: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true
				}
			}
		]
	});
	$('.new_item').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true
				}
			}
		]
	});
	$('.new_item_b2b').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 3,
		centerMode: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					arrows: false,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					arrows: false,
				}
			}
		]
	});
	$('.mobile-news').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true
	});
	$('#special_projects_wrap').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,

				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: true
				}
			}
		]
	});
	$('#special_projects_wrap_b2b').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,

				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: true
				}
			}
		]
	});
	$('.positions-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					arrows: false
				}
			}
		]
	});	

	var $page = $('html, body');
	$('a[href*="#"]').click(function () {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1800);
		return false;
	});

	$(document).mousemove(function (e) {
		var x = ((e.pageX - 2000) * 1 / 35), y = ((e.pageY - 4000) * -1 / 85);
		$('#eskimo_bg').css('background-position', x + 'px ' + y + 'px');
	});

	$(document).mousemove(function (e) {
		var x = ((e.pageX - 200) * 1 / 25), y = ((e.pageY - 5000) * -1 / 85);
		$('#briket_bg').css('background-position', x + 'px ' + y + 'px');
	});

	$('.spoiler-title').click(function () {
		$(this).parent().children('div.spoiler-content').toggle('fast');
		$(this).children('span.button-spoiler').toggleClass("active");
		return false;
	});

	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'side': 'left',
		'padding': 320,
		'tolerance': 320,
		'touch':false
	});

	document.querySelector('.js-slideout-toggle').addEventListener('click', function () {
		slideout.toggle();
	});

	document.querySelector('.js-slideout-toggle-menu').addEventListener('click', function () {
		slideout.toggle();
	});

	document.querySelector('.menu').addEventListener('click', function (eve) {
		if (eve.target.nodeName === 'A') { slideout.close(); }
	});

	$('.news-wrap').masonry({
		// указываем элемент-контейнер в котором расположены блоки для динамической верстки
		itemSelector: '.grid',
		// указываем класс элемента являющегося блоком в нашей сетке
		singleMode: true,
		// true - если у вас все блоки одинаковой ширины
		isResizable: true,
		// перестраивает блоки при изменении размеров окна
		isAnimated: true,
		// анимируем перестроение блоков
		animationOptions: {
			queue: false,
			duration: 500
		}
		// опции анимации - очередь и продолжительность анимации
	});
});

//search menu

var formSearch = document.getElementsByClassName("formSearch");
var openBut = document.getElementById("open");
var closeBut = document.getElementById("close");

function clickBut(button, targetForm) {
	button.onclick = function () {
		for (var i = 0; i < targetForm.length; i++) {
			targetForm[i].classList.add("active");			
		}
	};
}

function clickButClose(button, targetForm) {
	button.onclick = function () {
		for (var i = 0; i < targetForm.length; i++) {
			targetForm[i].classList.remove("active");
		}
	};
}

clickBut(openBut, formSearch);
clickButClose(closeBut, formSearch);

//tabs activation
function Selected(a) {
	var label = a.value;
	if (label==1) {
		document.getElementById("Label1").style.display='block';
		document.getElementById("Label2").style.display='none';
		document.getElementById("Label3").style.display='none';
		
	} else if (label==2) {
		document.getElementById("Label1").style.display='none';
		document.getElementById("Label2").style.display='block';
		document.getElementById("Label3").style.display='none';
		
	} else if (label==3) {
		document.getElementById("Label1").style.display='none';
		document.getElementById("Label2").style.display='none';
		document.getElementById("Label3").style.display='block';
		
	} else {
		document.getElementById("Label1").style.display='none';
		document.getElementById("Label2").style.display='none';
		document.getElementById("Label3").style.display='none';
	}
	
}

//auto height block
/*
function setEqualHeight(columns) {
	var tallestcolumn = 0;
	columns.each(
		function () {
			currentHeight = $(this).height();
			if (currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
}
$(document).ready(function () {
	setEqualHeight($(".positions-block"));
});
*/

//allContacts/*
//var OldOpt = $('#allContacts div.active a').attr('class');
//OldOpt = '#' + OldOpt;
/*alert (OldOpt);*/
/*
$('#allContacts a').click(function () {
	$(OldOpt).css('display', 'none');
	$("#allContacts div").removeClass('active');
	var NewOpt = this.className;
	$(this).parent().addClass('active');
	NewOpt = '#' + NewOpt;
	/*alert (NewOpt);*/
/*
	$(NewOpt).css('display', 'block');
	OldOpt = NewOpt;
});
*/

var OldOpt = $('#allContacts div.active a').attr('class');
OldOpt = '#' + OldOpt;

$('#allContacts a').click(function () {
	$(OldOpt).css('display', 'none');
	$("#allContacts div").removeClass('active');
	var NewOpt = this.className;
	$(this).parent().addClass('active');
	NewOpt = '#' + NewOpt;
	$(NewOpt).css('display', 'block');
	OldOpt = NewOpt;
});

//spoiler index b2b
$(document).ready(function () {
	$('.spoiler-title').click(function () {
		$('div.spoiler-content').toggle('fast');
		$('.spoiler-title').children('span').toggleClass("active");
		return false;
	});
});

//hide empty elements vacancy
var float_items = document.getElementsByClassName("float-item");
for (var i = 0; i < float_items.length; i ++) {
	if (float_items[i].getElementsByTagName("p").length == 0) float_items[i].style.display = "none";
}

//hide projects for sidebar
var sidPr = document.getElementById("sidebar_projects");
var hideElem = 'elem192';
console.log(sidPr);
$('#allContacts a').click(function () {
	var newCity = this.className;
	console.log(newCity);
	if (newCity == hideElem) {
		console.log(newCity);
		$(sidPr).css('display', 'block');
	} else {
		$(sidPr).css('display', 'none');
	};
});