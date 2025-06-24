document.addEventListener("DOMContentLoaded", () => {
  // --- VIDEO AUTOPLAY ---
  const video = document.querySelector(".hero-video");
  if (video) {
    const promise = video.play();
    if (promise !== undefined) {
      promise
        .catch((error) => {
          console.error("Video autoplay was prevented:", error);
        })
        .then(() => {
          console.log("Video autoplay successfully started.");
        });
    }
  }

  // --- EMAILJS FORM SUBMISSION ---
  const form = document.getElementById("quote-form");
  const responseMsg = document.getElementById("form-response");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm("service_ykud4sz", "template_ccwj6mm", this)
        .then(() => {
          form.reset();
          responseMsg.classList.remove("hidden");
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          alert("There was a problem submitting the form. Please try again.");
        });
    });
  }
});
