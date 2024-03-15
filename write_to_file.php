<?php
$file = fopen("data.txt", "a"); // Apre il file in modalità append
fwrite($file, "Ciao" . PHP_EOL); // Scrive "Ciao" nel file con un ritorno a capo
fclose($file);
?>
