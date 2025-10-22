document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form.contact");

  if (form) {
    // Add an event listener for submission
    form.addEventListener("submit", function (e) {
      //prevent the form default sub behavior
      // from reloading on submit
      e.preventDefault();

      // Collect form data into an object
      const formData = {
        //get all the values from the form
        name: form.name.value,
        email: form.email.value,
        services: form.services.options[form.services.selectedIndex].text,
        serviceValue: form.services.value,
        date: form.date.value,
        time: form.time.value,
        message: form.message.value,
      };

      // Store the form data in the browser's sessionStorage until the browser tab is closed
      // JSON.stringify converts our JavaScript object into a text string for storage
      sessionStorage.setItem("formData", JSON.stringify(formData));

      // Redirect to success page
      window.location.href = "success.html";
    });
  }
});
