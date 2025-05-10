if (isset($_POST['ip'])) {
    // IP adresini alıyoruz
    $userIP = $_POST['ip'];
    
    // Log dosyasının yolu
    $file = 'log.txt';
    
    // IP adresi ve zaman bilgisini formatlıyoruz
    $currentDateTime = date('Y-m-d H:i:s'); // Zaman damgası
    $logData = "IP: $userIP - Zaman: $currentDateTime\n";
    
    // Dosyaya yazma işlemi (append modunda)
    file_put_contents($file, $logData, FILE_APPEND);
    echo 'IP başarıyla kaydedildi';
} else {
    echo 'IP adresi bulunamadı';
}
