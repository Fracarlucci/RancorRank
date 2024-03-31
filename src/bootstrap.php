<?php
require_once("./db/database.php");
$dbh = new DatabaseHelper("localhost", "root", "", "rancorrank", 3306);
session_start();
?>