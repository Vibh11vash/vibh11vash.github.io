<?php

$server ='localhost';
$user ='root';
$password ='';
$db = 'coronadb';

$con = mysqli_connect($server,$user,$password,$db);
if(!$con){
	?>
		<script type="text/javascript">
			alert("connection failed");
		</script>

	<?php
}

?>