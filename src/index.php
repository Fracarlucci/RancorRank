<?php
require_once 'bootstrap.php';
$templateParams["utenti"] = $dbh->getUsers();

// require 'base.php';
?>