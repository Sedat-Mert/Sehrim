<?php
// Doğru kullanıcı adı ve şifre
$correct_username = "g231210383@sakarya.edu.tr";
$correct_password = "g231210383";

// Kullanıcı adı ve şifre doğrulama işlemi
if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    // Kullanıcı adı ve şifreyi al
    $kullaniciadi = $_POST['username'];
    $sifre = $_POST['password'];
    
    // Kullanıcı adı ve şifre kontrolü
    if (!empty($kullaniciadi) && !empty($sifre)) 
    {
        // Kullanıcı adının e-posta formatında olup olmadığını kontrol et
        if (filter_var($kullaniciadi, FILTER_VALIDATE_EMAIL)) 
        {
            // Doğru kullanıcı adı ve şifre ile karşılaştır
            if ($kullaniciadi === $correct_kullanici && $sifre === $correct_sifre) 
            {
                // Giriş başarılı ise hoş geldin mesajı göster
                echo "Hoşgeldiniz \"$kullaniciadi\"";
                // Burada başka işlemler yapılabilir, örneğin oturum başlatma
            } 
            else 
            {
                // Kullanıcı adı veya şifre yanlış ise hata mesajı göster ve kullanıcıyı geri yönlendir
                echo "Hatalı kullanıcı adı veya şifre. Lütfen tekrar deneyiniz.";
                header("refresh:3;url=login.html"); // 3 saniye sonra login sayfasına yönlendir
            }
        } 
        else 
        {
            // Kullanıcı adı e-posta formatında değilse hata mesajı göster ve kullanıcıyı geri yönlendir
            echo "Geçersiz kullanıcı adı. Lütfen bir e-posta adresi giriniz.";
            header("refresh:3;url=login.html"); // 3 saniye sonra login sayfasına yönlendir
        }
    } 
    else 
    {
        // Kullanıcı adı veya şifre boşsa hata mesajı göster ve kullanıcıyı geri yönlendir
        echo "Kullanıcı adı ve şifre alanları boş bırakılamaz.";
        header("refresh:3;url=login.html"); // 3 saniye sonra login sayfasına yönlendir
    }
}
?>