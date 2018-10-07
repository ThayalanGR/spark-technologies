<?php
define('DB_DRIVER', 'mysql');
define('DB_SERVER', 'localhost');
define('DB_SERVER_USERNAME', 'root');
define('DB_SERVER_PASSWORD', '');
define('DB_DATABASE', 'db_spark');
// must end with a slash
define('SITE_URL', 'http://localhost/spark/');
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