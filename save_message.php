<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST["message"];
    $file = fopen("chat_history.txt", "a"); // Apre il file in modalità append
    fwrite($file, $message . PHP_EOL); // Aggiunge il messaggio al file con un ritorno a capo
    fclose($file);
}
?>
