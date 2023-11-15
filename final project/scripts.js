// Contact form validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      if (form.checkValidity() === false) {
        event.stopPropagation();
        form.classList.add("was-validated");
      } else {
        // Here you can add code to handle form submission, like sending data to server
        // For example: sendData();
        alert("Form submitted!"); // Replace this with your action
        form.reset();
      }
    });
  
    form.addEventListener("input", function(event) {
      if (event.target.tagName.toLowerCase() === "input" || event.target.tagName.toLowerCase() === "textarea") {
        event.target.classList.remove("is-invalid");
        event.target.classList.add("is-valid");
      }
    });
  });