<?php

function connect_bd() {	
	if($bdd = mysqli_connect('localhost', 'root', '', 'test'))
	{
		// Si la connexion a réussi, rien ne se passe.
	}
	else // Mais si elle rate…
	{
		echo 'Erreur'; // On affiche un message d'erreur.
	}
	
	session_start();
	
	$resultat = mysqli_query($bdd, 'SELECT * FROM user');
	
	$login = isset($_POST['login'])?$_POST['login']:"";
	$pass = isset($_POST['pass'])?$_POST['pass']:"";
	
	
	while($donnees = mysqli_fetch_assoc($resultat))
	{
		if ($login==$donnees['Login'] && $pass==$donnees['Password'])	{
			$_SESSION['nom'] = $login;
			mysqli_close($bdd);
			return true;
		}
	}
	
	mysqli_close($bdd);
	return false;
	
}


function inscription_bd() {	
	if($bdd = mysqli_connect('localhost', 'root', '', 'test'))
	{
		// Si la connexion a réussi, rien ne se passe.
	}
	else // Mais si elle rate…
	{
		echo 'Erreur'; // On affiche un message d'erreur.
	}
	
	
	$login = isset($_POST['login1'])?$_POST['login1']:"";
	$pass = isset($_POST['pass1'])?$_POST['pass1']:"";
	

	$req_pre = mysqli_prepare($bdd, 'INSERT INTO user (Login, Password)VALUES (?, ?)');
	mysqli_stmt_bind_param($req_pre, "ss", $login, $pass);
	
	$res = mysqli_stmt_execute($req_pre);
	
	if ($res){
		mysqli_close($bdd);
		return true;
	}
	else {
		mysqli_close($bdd);
		return false;
	}
}
?>