
<?php
function page () {
	$login = "";
	$pass = "";
	$echoLogin="";  /*pour initialiser � "" la zone d'affichage du login connect�*/
	
	require ('V/page.tpl'); /*affichage de la page du site*/
}

function connect () {
	/* affichage propre du tableau $_POST :
	echo ("<pre> POST= <br/>");
	print_r ($_POST);
	echo ("</pre><br/>"); die();
	*/
	
	
	$login = isset($_POST['login'])?$_POST['login']:"";
	$pass = isset($_POST['pass'])?$_POST['pass']:"";

	require ('M/user_bd.php');
	if (connect_bd()) { 
		$echoLogin="bienvenue";
		}
	else {
		$echoLogin="rat�";
	}
	require ('V/page.tpl');
}


function inscription () {
	/* affichage propre du tableau $_POST :
	echo ("<pre> POST= <br/>");
	print_r ($_POST);
	echo ("</pre><br/>"); die();
	*/
	
	$login = isset($_POST['login1'])?$_POST['login1']:"";
	$pass = isset($_POST['pass1'])?$_POST['pass1']:"";
	

	require ('M/user_bd.php');
	
	
	if($login != null && $pass !=null){
		if (inscription_bd()){
		$echoLogin="Inscription r�ussie";
		}
		else $echoLogin="rat� !!!!!!!!!!!!!!!!!!";	
	}
	else {
			$echoLogin="rat�";			
		}
	require ('V/page.tpl');
}
?>