

function loadJQuery(){
	/*var t= new Array(2,2);
	t[0,0]=125;
	t[0,1]= 50;
	t[1,0]=152;
	t[1,1]=50;*/
	/*
	var tableau = Array(
		Array(50,3),
		Array(152, 50)
		);

	return tableau; */


	// pass PHP variable declared above to JavaScript variable
	/*var tableau = <?php 
				require(../../M/favoris.php);
				get_favoris() ?>; */



		var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            			var i = 0;

            	//favoris=$.getJSON(xmlhttp.responseXML);
            var favoris=JSON.parse(xmlhttp.responseText);
            //alert(xmlhttp.responseText);

			    /*if(favoris== null )
				return null; */

			$( ".draggable" ).draggable({
				revert: true
			});
			while (i < 3) {
				document.getElementById(i).innerHTML="favoris " + i + "</br>nom du site : " + favoris[i][2] + "</br>latitude : " + favoris[i][3] + "</br>longitude : " + favoris[i][4];
				i++;
			}
			$(".droppableMap").droppable({
				drop: function( event, ui ) {
					centrerSur(favoris[parseInt(ui.draggable.context.id)][3], favoris[parseInt(ui.draggable.context.id)][4]);
				var popup = L.popup()
					.setLatLng([favoris[parseInt(ui.draggable.context.id)][3], favoris[parseInt(ui.draggable.context.id)][4]])
					.setContent(favoris[parseInt(ui.draggable.context.id)][2])
					.openOn(map);		
				}
			});
            }
        }
        xmlhttp.open("GET", "M/favoris.php", true);
        xmlhttp.send();

	/*if(tableau == 'Erreur'){
		user = 1;
		var l = lieux[1];
	}*/

	/*var user=extractUrlValue('user');
	if(user == null)
		user = 1;
	var l = lieux[user]; 

	//var m = prompt("commentaire","valeur");
/*
	var l = lieux.Favoris[1].latitude + " " + lieux.Favoris[1].longitude + "\n";
	l += lieux.Favoris[2].latitude + " " + lieux.Favoris[2].longitude + "\n";;
	l += lieux.Favoris[0].latitude + " " + lieux.Favoris[0].longitude + "\n";;
	alert() */
	//return l;


	}

	function extractUrlValue(key, url)
	{
    if (typeof(url) === 'undefined')
        url = window.location.href;
    var match = url.match('[?&]' + key + '=([^&]+)');
    return match ? match[1] : null;
	}