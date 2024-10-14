window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

function showDiv(divId, button) {
    // Hide all divs
    const divs = document.querySelectorAll('.toggle-div');
    divs.forEach(div => div.style.display = 'none');

    // Show the selected div
    document.getElementById(divId).style.display = 'block';


    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(btn => btn.classList.remove('button-active'));


    // Add 'active' class to the current button
    button.classList.add('button-active');
}