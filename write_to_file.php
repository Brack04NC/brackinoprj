<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST["message"];
    $file = fopen("data.txt", "a"); // Apre il file in modalità append
    fwrite($file, $message . PHP_EOL); // Scrive la stringa nel file con un ritorno a capo
    fclose($file);
    echo "OK"; // Invia una risposta al client per confermare il successo
}
?>
