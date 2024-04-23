<?php 
    include '../db/database.php';
    
    $dbh = new DatabaseHelper("localhost", "root", "", "rancorrank", 3306);

    $userName = $_POST['name'];
    $score = $_POST['score'];

    $dbh->addScore($userName, $score);
?>