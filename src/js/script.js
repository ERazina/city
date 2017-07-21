//на js
'use strict';
$(document).ready(function(){

	function validateEmail(){
		let val = document.querySelector('input#email').value;
		let regexp = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
		let email = document.querySelector('#email');
		let label = document.querySelector('#email');

		if(val.match(regexp)){
			email.classList.add('err');
			email.classList.remove('errEmail');
			label.classList.add('blue');
			label.classList.remove('red');
			//начала торопиться поэтому использовала jquery
			$('.blue').show();
			$('.red').hide();

		}
		else{
			email.classList.add('errEmail');
			email.classList.remove('noErrEmail');
			label.classList.add('red');
			label.classList.remove('blue');
			$('.err').show();
			$('.red').show();
			// $('.err').hide();
			// $('.error-first').show().append('<span>Enter correct Email</span>');
		}
	}

	function validateName(){
		let val = document.querySelector('#name').value;
		let regexp = /^[a-zA-Zа-яА-Я]+$/;
		let name = document.querySelector('#name');
		let label = document.querySelector('#l-name');

		if(val.match(regexp)){
			name.classList.add('noErrEmail');
			name.classList.remove('errEmail');
			label.classList.add('blue');
			label.classList.remove('red');
			$('.close-blue-second').show();
			$('.close-red-second').hide();
			$('.error-second').hide();
		}
		else{
			name.classList.add('errEmail');
			name.classList.remove('noErrEmail');
			label.classList.add('red');
			label.classList.remove('blue');
			$('.close-red-second').show();
			$('.close-blue-second').hide();
			// $('.error-second').show().append('<span>Enter correct name</span>');
		}
	}

	function validateSelect(){
		if ($('.nice-select .selected').attr('data-value') !== 0){
			$('.nice-select').addClass('err').removeClass('noErr');
		}
		else{
			$('.nice-select').addClass('noErr').removeClass('err');
		}
	}

	function validateCheckbox(){
		let checkbox = document.querySelector('#checkbox');
		let attr = checkbox.hasAttribute('checked');
		let val = attr.value;

		if(val === null){
			checkbox.classList.add('err');
			checkbox.classList.remove('noErr');
		}
		else{
			checkbox.classList.add('noErr');
			checkbox.classList.remove('err');
		}
	}

	document.querySelector('.validate').onclick = function(e){
		e.preventDefault();
		validateEmail();
		validateName();
		validateSelect();
		validateCheckbox();

	};

	$('select').niceSelect();
	$('select').niceSelect('update');
	$('.nice-select').find('.current').text('Select your country').addClass('customize');


	//очистка инпута
	$('.close-red-first').click(function(){
		$('#email').val('');
		$('.error-first').hide();
	});
	$('.close-blue-first').click(function(){
		$('#email').val('');
	});

	$('.close-red-second').click(function(){
		$('#name').val('');
		$('.error-second').hide();
	});
	$('.close-blue-second').click(function(){
		$('#name').val('');
	});
});


// на jquery было бы так, но по сути jq нам здесь нужно только для простого обращения к элементам, а jq замедляет работу, поэтому решила использовать нативный js
//jq оказался нужен для стилизации select
// $(document).ready(function(){
// 	function validateEmail() {
//
// 		let valEmail = $('#email').val();
// 		let emailRegexp = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
//
// 		if (valEmail.match(emailRegexp)) {
// 			$('#email').removeClass('err').addClass('noErr');
// 		} else {
// 			$('#email').removeClass('noErr').addClass('err');
// 		}
// 	}
//
// 	function validateCheckbox(){
//
// 	}
// 	$('.validate').click(function(e){
// 		e.preventDefault();
// 		validateEmail();
// 		validateCheckbox();
// 	});
// });