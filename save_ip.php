<?php
// Dosya yazma testi
$file = 'log.txt';
$testData = "Test data at " . date('Y-m-d H:i:s') . "\n";
if (file_put_contents($file, $testData, FILE_APPEND)) {
    echo "Veri başarıyla yazıldı.";
} else {
    echo "Veri yazılamadı.";
}
?>