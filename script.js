  document.getElementById("whatsappbutton").addEventListener("click", function() {
    var phoneNumber = "8279396055"; // Replace with your phone number
    var message = "Hello!"; // Optional: Replace with your pre-filled message
    
    // Create a WhatsApp URL with the phone number and message (if desired)
    var whatsappUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    
    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, "_blank");
  });