
// A function to send email to the contact addressan 
function sendEmail() {
    // Get the form element
    var form = document.getElementById("contact-form");
    // Get the form data
    var formData = new FormData(form);
    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    // Set the request method and the action URL
    xhr.open("POST", "mailto:info@fusiontechsy.com");
    // Set the request header for the form data
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // Define a callback function for the request
    xhr.onload = function() {
      // If the request status is 200 (OK)
      if (xhr.status === 200) {
        // Display a success message
        alert("Your email has been sent!");
        // Reset the form
        form.reset();
      }
      // If the request status is not 200 (OK)
      else {
        // Display an error message
        alert("There was an error sending your email. Please try again later.");
      }
    };
    // Send the request with the form data
    xhr.send(formData);
  }
  
  // Add an event listener for the form submit event
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevent the default form submit action
    event.preventDefault();
    // Call the sendEmail function
    sendEmail();
  });