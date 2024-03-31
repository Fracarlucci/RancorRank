<?php
class DatabaseHelper{
    public $db;

    public function __construct($servername, $username, $password, $dbname, $port){
        $this->db = new mysqli($servername, $username, $password, $dbname, $port);
        if ($this->db->connect_error) {
            die("Connection failed: " . $this->db->connect_error);
        }        
    }

    public function getUsers() {
        return $this->db->query("SELECT * FROM Utente ORDER BY Score DESC;")->fetch_all(MYSQLI_ASSOC);       
    }

    public function addScore($name, $score) {
        $query = "
            UPDATE Utente
            SET Score = Score + ?
            WHERE name = ?;
        ";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('is',$score,$name);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function remScore($name, $score) {
        $query = "
            UPDATE Utente
            SET Score = Score - ?
            WHERE name = ?;
        ";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('is',$score,$name);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }
}