
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
		isScrollDown = newScroll > oldScroll;

	document.querySelector('header').classList.toggle('scroll-down', isScrollDown);
	this.oldScroll = newScroll;
	//top button
	document.getElementById('top_b').classList.toggle('show', isScrollDown);
	this.oldScroll = newScroll;
});

//slider button
$(document).ready(function () {
	var $page = $('html, body');
	$('a[href*="#"]').click(function () {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1800);
		return false;
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
/*alert (OldOpt);*/

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




