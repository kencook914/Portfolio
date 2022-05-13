	// display project explainations------------------

$(function(){
	$(".project1").hover(function(){
		$(".explaination1").css('display', 'block')
	}, function(){
		$('.explaination1').css('display', "none")
	})
})

$(function(){
	$(".project2").hover(function(){
		$(".explaination2").css('display', 'block')
	}, function(){
		$('.explaination2').css('display', "none")
	})
})

$(function(){
	$(".project3").hover(function(){
		$(".explaination3").css('display', 'block')
	}, function(){
		$('.explaination3').css('display', "none")
	})
})


	// contact form---------------------

const inputs = document.querySelectorAll(".input")

function focusFunc(){
	let parent = this.parentNode
	parent.classList.add("focus")
}

function blurFunc(){
	let parent = this.parentNode
	if (this.value ==""){
		parent.classList.remove("focus")
	}
}

inputs.forEach((input) => {
	input.addEventListener("focus", focusFunc)
	input.addEventListener("blur", blurFunc)
})


	// logo animations---------------------------

function hidetab(){
	var trigger = document.querySelectorAll(".trigger")
	var home = document.querySelectorAll(".home")
	var logo = document.querySelectorAll(".logopc")

	for (var i =0; i < trigger.length; i++){
		var windowHeight = window.innerHeight
		var elementTop = trigger[i].getBoundingClientRect().top
		var elementVisible = 0
		if (elementTop < windowHeight - elementVisible) {
		  home[i].classList.add("hometab");
		  logo[i].classList.add("logotrans")
		} else {
		  home[i].classList.remove("hometab");
		  logo[i].classList.remove("logotrans")
		}
	}
}

window.addEventListener("scroll", hidetab);

// To check the scroll position on page load
hidetab();