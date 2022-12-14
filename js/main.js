(function (){
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header_menu');
	const menuCloseItem = document.querySelector('.header__nav-close');
	const menuLinks = document.querySelectorAll('.menu_link');
	burgerItem.addEventListener('click', () =>{
		menu.classList.add('header_menu_active');
	});
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header_menu_active');
	});
	if (window.innerWidth <= 767) {
		for (let i = 0; i < menuLinks.length; i+= 1) {
			menuLinks[i].addEventListener('click', () =>{
				menu.classList.remove('header_menu_active');
			});
		}
	};
}());



var header = document.getElementsByClassName("services_change");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
});
}



// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());








