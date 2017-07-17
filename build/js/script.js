$(document).ready(function(){
	$('input#name, input#email').unbind().blur( function(){
		var id = $(this).attr('id');
		var val = $(this).val();

		switch(id){
			case 'email':
				var email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

				if(val != '' && rv_email.test(val)){
					$(this).addClass('noErr');
				}
				else{
					$(this).addClass('err');
				}
			case 'name':
				var name = /^[a-zA-Zа-яА-Я]+$/;
				if(){
					$(this).addClass('noErr');
				}
				else{
					$(this).addClass('err');
				}

		}
	//	проверка поля email

	}

	});