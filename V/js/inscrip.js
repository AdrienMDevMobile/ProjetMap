
$(
	function() {
		/*code de déclaration de la gestion événementielle*/
		var maDiv = $('div#inscrip').children('button');
		maDiv.click(onClickk);
		
		var con = $('div#inscrip').children('form').children('input').getElementByType('submit');
		con.click(onSubmit);
	}
);



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
