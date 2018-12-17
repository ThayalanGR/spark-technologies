
<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require_once('./config/dbconnection.php');


if(isset($_GET['name'])) {
    $name = $_GET['name'];
    $mname = $_GET['mname'];
    $fname = $_GET['fname'];
    $sex = $_GET['sex'];
    $date = $_GET['date'];
    $relegion = 'not-specified';
    $community = 'not-specified';
    $marital = $_GET['marital'];
    $blood = $_GET['blood'];
    $education = $_GET['education'];
    $occupation  = $_GET['occupation'];
    $contact1  = $_GET['contact1'];
    // $contact2  = $_GET['contact2'];
    $mail  = $_GET['mail'];
    $address  = $_GET['address'];
    $district  = $_GET['district'];
    $state  = $_GET['state'];
    $country  = $_GET['country'];
    $pincode  = $_GET['pincode'];
    
    $sql = "INSERT INTO `tbl_career`(`name`, `fname`, `mname`, `sex`, `dob`, `relegion`, `community`, `marital_status`, `blood`, `education`, `occupation`, `conatct_1`, `email`, `address`, `district`, `state`, `country`, `pincode`) VALUES ('".$name."','".$mname."','".$fname."','".$sex."','".$date."','".$relegion."','".$community."','".$marital."','".$blood."','".$education."','".$occupation."',".$contact1.",'".$mail."','".$address."','".$district."','".$state."','".$country."',".$pincode.")";

    //  echo $sql;

    if(mysqli_query($DB, $sql)) {
        $json = array(  "status" => true);
        echo json_encode($json);
    }


}
?>
