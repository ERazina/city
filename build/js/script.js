//на js
'use strict';

function validateEmail(){
	let val = document.querySelector('#email').value;
	let regexp = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	let email = document.querySelector('#email');
	let label = document.querySelector('#l-email');

	if(val.match(regexp)){
		email.classList.add('noErrEmail');
		email.classList.remove('errEmail');
		label.classList.add('blue');
		label.classList.remove('red');
	}
	else{
		email.classList.add('errEmail');
		email.classList.remove('noErrEmail');
		label.classList.add('red');
		label.classList.remove('blue');
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
	}
	else{
		name.classList.add('errEmail');
		name.classList.remove('noErrEmail');
		label.classList.add('red');
		label.classList.remove('blue');
	}
}

function validateSelect(){
	let coutry = document.querySelector('#country');
	let val = country.value;
	 if(val === 0){
	 	country.classList.add('errEmail');
	 	country.classList.remove('noErrEmail');
	 }
	 else{
		 country.classList.add('noErrEmail');
		 country.classList.remove('errEmail');
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

}


$(document).ready(function() {
	$('select').niceSelect();
	$('select').niceSelect('update');
	$('.nice-select').find('.current').text('Select your country').addClass('customize');
});


// на jquery было бы так, но по сути jq нам здесь нужно только для простого обращения к элементам, а jq замедляет работу, поэтому решила использовать нативный js
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