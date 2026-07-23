<?php

include("db.php");

if(isset($_POST['device_id']) && isset($_POST['status'])){

    $device_id = $_POST['device_id'];
    $status = $_POST['status'];

    $sql = "UPDATE devices
            SET status='$status',
                last_updated=NOW()
            WHERE device_id='$device_id'";

    if(mysqli_query($conn,$sql)){
        echo "success";
    }else{
        echo "error";
    }

}
?>