function clearForm() {
    document.getElementById("contactForm").reset();
  }
  
  function validateForm() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Basit boşluk kontrolü
    if (name.trim() === '' || surname.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
  
    // E-posta formatı kontrolü
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Geçerli bir e-posta adresi girin.");
      return;
    }
  
    // Formun gönderimi
    var formData = {
      name: name,
      surname: surname,
      email: email,
      message: message
    };
  
    // Form bilgilerinin başka bir sayfada görüntülenmesi (örneğin: confirmation.html)
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "confirmation.html";
  }