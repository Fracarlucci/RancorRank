<?php 
    include '../db/database.php';
    
    $dbh = new DatabaseHelper("localhost", "root", "", "rancorrank", 3306);

    $result = $dbh->getUsers();

    header('Content-Type: application/json');
    echo json_encode($result);
?>