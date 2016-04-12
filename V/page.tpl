<!doctype html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>Tat-ce-vil</title>
		
		<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
		<script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
		
		<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
		 <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"> </script>

		 <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css">
		<link rel="stylesheet" href="V/css/jquery.css">
		<script src="V/js/jquery.js"></script>

		<script type="text/javascript" src="V/js/map.js"></script>
		<link rel="stylesheet" href="V/css/map.css"/>

		<script type="text/javascript" src="V/js/connect.js"></script>
		<script type="text/javascript" src="V/js/inscrip.js"></script>
		<link rel="stylesheet" type="text/css" href="V/css/connect.css " /> 
		
	</head>
	

	<body > 
		 <div id="map" class="droppableMap"></div>
		 <div id="button">
			 <div id="connect">
						<button href="" title="connexion">connexion</button> 
						<form id="f1" method="post" action="index.php?control=user&action=connect">
							<label for="login">login :</label>
							<input name="login" value="<?php echo $login ?>" /> <br/>
							<label for="pass">pass :</label>
							<input type="password" name="pass" value="<?php echo $pass ?>" /> <br/>
							<input type="submit" value="connecter" /> 
						</form>
			</div> <!-- fin connect-->
			<h5> 	
					<?php
						echo $echoLogin;
					?>
			</h5> 
			<button onclick="recentrer()">Recentrer</button>
			<div id="inscrip">
						<form id="f2" method="post" action="index.php?control=user&action=inscription">
							<label for="login1">login :</label>
							<input name="login1" value="<?php echo $login ?>" /> <br/>
							<label for="pass1">pass :</label>
							<input type="password" name="pass1" value="<?php echo $pass ?>" /> <br/>
							<input type="submit" value="inscription" />
						</form>
			</div>
		</div>
		<div id="0" class="draggable ui-widget-content" ><p>Drag me around</p></div>
		<div id="1" class="draggable ui-widget-content" ><p>Drag me around</p></div>
		<div id="2" class="draggable ui-widget-content" ><p>Drag me around</p></div>
			
	</body> 
</html>