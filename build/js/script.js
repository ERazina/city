$(document).ready(function(){
	function validateEmail() {

		var valEmail = $('#email').val();
		var emailRegexp = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

		if (valEmail.match(emailRegexp)) {
			$('#email').removeClass('err').addClass('noErr');
		} else {
			$('#email').removeClass('noErr').addClass('err');
		}
	}

	function validateCheckbox(){

	}
	$('.validate').click(function(e){
		e.preventDefault();
		validateEmail();
		validateCheckbox();
	});
});


document.querySelector('.validate').classList.add('');
document.querySelectorAll('li').classList.remove('');