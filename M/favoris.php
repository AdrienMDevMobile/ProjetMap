<?php

	session_start();
	
	//$user = 'Michel';
	$user = $_SESSION['nom'];
	//creer la variable user
	
		//echo json_encode($user);
	
	if($bdd = mysqli_connect('localhost', 'root', '', 'test'))
	{
		// Si la connexion a réussi, rien ne se passe.
	}
	else // Mais si elle rate…
	{
		echo 'Erreur'; // On affiche un message d'erreur.
	}
	
	$resultat = mysqli_query($bdd, "SELECT * FROM favoris where user = '$user'");
	$donnees = mysqli_fetch_all($resultat);
	
	
	echo json_encode($donnees); 


?>