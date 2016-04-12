var f1;    /*équivalent : f1=document.getElementById('f1'); équivalent fait au chargt de la page $(function)*/

//équivalent : window.onlaod=functio(){}
$(
	function() {
		/*code de déclaration de la gestion événementielle*/
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
	alert("Données retournées : " + retour );
	}
	});*/

	/*code de réaction suite au clic sur le bouton de connexion*/
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
	alert("Données retournées : " + retour );
	}
	});
	
	return false;
	//code de réaction suite à la soumission du formulaire,
	    //dans le cas d'une soumission à faire via une requête ajax
}