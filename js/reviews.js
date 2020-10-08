/*function init() {*/

	var five = document.getElementsByClassName("five1");
	var four = document.getElementsByClassName("four1");
	var three = document.getElementsByClassName("three1");
	var two = document.getElementsByClassName("two1");
	var one = document.getElementsByClassName("one1");

	var allReviews = [];
	allReviews = [five, four, three, two, one];

	var cFive = document.getElementsByClassName("number5");
	var cFour = document.getElementsByClassName("number4");
	var cThree = document.getElementsByClassName("number3");
	var cTwo = document.getElementsByClassName("number2");
	var cOne = document.getElementsByClassName("number1");

	var allConsole = [];
	allConsole = [cOne, cTwo, cThree, cFour, cFive];



	// Stars
	var fiveS = document.getElementsByClassName("Sfive");
	var fourS = document.getElementsByClassName("Sfour");
	var threeS = document.getElementsByClassName("Sthree");
	var twoS = document.getElementsByClassName("Stwo");
	var oneS = document.getElementsByClassName("Sone");

	console.log(allConsole);

	for (i = 0; i < allConsole.length; i++){
		for (j = 0; j < allConsole[i].length; j++){
			allConsole[i][j].addEventListener("click", function(event){
				event.preventDefault();
			}, false);
		}
	};

	function conclusion(element, respect, stars){ 
		function amount(respect){       
			return respect.length;
		};
		function slovo(){
			if(amount(respect) == 1 ||
			   amount(respect) == 21 ||
			   amount(respect) == 31){
				return " отзыв"
			} else if(amount(respect) == 2 ||
				      amount(respect) == 3 ||
				      amount(respect) == 4){
				return " отзыва";
			} else {
				return " отзывов";
			}
		}

		for (i = 0; i < element.length; i++) {
			element[i].innerHTML = amount(respect) + slovo();

			if (amount(respect) == 0){
				element[i].style.display = "none"; //hide console
				stars[i].style.display = "none"; //hide stars
			} else {
				element[i].style.display = "block";
				stars[i].style.display = "inline-block";
			}
		};
	};

	conclusion(cFive, five, fiveS);
	conclusion(cFour, four, fourS);
	conclusion(cThree, three, threeS);
	conclusion(cTwo, two, twoS);
	conclusion(cOne, one, oneS);

	//hide element
	function hide(nohide){
		for (i = 0; i < allReviews.length; i++){
			for (j=0; j < allReviews[i].length; j++){
				if (allReviews[i] == nohide){
					allReviews[i][j].style.display = "block";
				} else {
					allReviews[i][j].style.display = "none";
				}
			} 
		}
	};

	function click(elem, loc) {
		for (i = 0; i < elem.length; i++){
			var ele = elem[i];
			ele.onclick = function() {
				hide(loc);
			}
		}
	};

	click(cFive,five);
	click(cFour,four);
	click(cThree,three);
	click(cTwo,two);
	click(cOne,one);
/*
};

window.onload = init;
*/