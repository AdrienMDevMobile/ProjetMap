var f1;    /*�quivalent : f1=document.getElementById('f1'); �quivalent fait au chargt de la page $(function)*/

//�quivalent : window.onlaod=functio(){}
$(
	function() {
		/*code de d�claration de la gestion �v�nementielle*/
		var maDiv = $('div#connect').children('button');
		maDiv.click(onClick);
		
		var con = $('div#connect').children('form').children('input').getElementByType('connecter');
		con.click(onSubmit);
	}
);

function onClick() {
	/*$.ajax({
	type: "POST",
	url: "test.php",
	success: function(retour){
	alert("Donn�es retourn�es : " + retour );
	}
	});*/

	/*code de r�action suite au clic sur le bouton de connexion*/
	var iv = $("form#f1");
	if (iv.css('display') == "none") {
		iv.css('display','inline-block');
		return false;
	}
	else {
		iv.css('display','none');
		return true;
	}
}



function onSubmit() {

	var s = $(this).serialize();
	$.ajax({
	data: s,
	type: "POST",
	url: $(this).attr("action"),
	success: function(retour){
	alert("Donn�es retourn�es : " + retour );
	}
	});
	
	return false;
	//code de r�action suite � la soumission du formulaire,
	    //dans le cas d'une soumission � faire via une requ�te ajax
}