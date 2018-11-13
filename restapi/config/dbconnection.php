<?php
define('DB_DRIVER', 'mysql');
define('DB_SERVER', 'sql107.epizy.com');
define('DB_SERVER_USERNAME', 'epiz_22984630');
define('DB_SERVER_PASSWORD', 'BEmGVNwaQNA');
define('DB_DATABASE', 'epiz_22984630_spark');
// must end with a slash
define('SITE_URL', 'http://sparkzeon.com/');
$DB = mysqli_connect(DB_SERVER,DB_SERVER_USERNAME,DB_SERVER_PASSWORD,DB_DATABASE);
// Check connection
if (mysqli_connect_errno())
{
// echo "Failed to connect to MySQL: " . mysqli_connect_error();
 }
 else{
    // echo "true";
 }
?>