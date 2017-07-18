$(document).ready(function(){
	function validate(){

		$('input#name, input#email').unbind().blur( function(){
			var id = $(this).attr('id');
			var val = $(this).val();

			switch(id){
				case 'email':
					var emailRegexp = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

					if( val.match(emailRegexp)){
						$(this).addClass('noErr');
					}
					else{
						$(this).addClass('err');
					}
				case 'name':
					var nameRegexp = /^[a-zA-Zа-яА-Я]+$/;
					if(val.match(nameRegexp)){
						$(this).addClass('noErr');
					}
					else{
						$(this).addClass('err');
					}
			}

		});
	}

	$('.validate').click(function(e){
		e.preventDefault();
		validate();
	});

	});