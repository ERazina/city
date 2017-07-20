//на js
function validateEmail(){
	let valEmail = document.querySelector('#email').value;
	let emailRegexp = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	let email = document.querySelector('#email');

	if(valEmail.match(emailRegexp)){
		email.classList.add('noErrEmail');
		email.classList.remove('errEmail');
	}
	else{
		email.classList.add('errEmail');
		email.classList.remove('noErrEmail');
	}
}

function validateName(){
	let valName = document.querySelector('#name').value;
	let nameRegexp = /^[a-zA-Zа-яА-Я]+$/;
	let name = document.querySelector('#name');

	if(valName.match(nameRegexp)){
		name.classList.add('noErrEmail');
		name.classList.remove('errEmail');
	}
	else{
		name.classList.add('errEmail');
		name.classList.remove('noErrEmail');
	}
}

function validateSelect(){
	let coutry = document.querySelector('#country');
	let valCountry = country.value;
	 if(valCountry === 0){
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
	let valCheckbox = attr.value;

	if(valCheckbox === null){
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