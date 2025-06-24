// This function will run once the entire HTML document has been loaded and parsed.
document.addEventListener("DOMContentLoaded", () => {
  // --- Logic for Video Autoplay ---
  const video = document.querySelector(".hero-video");
  if (video) {
    // The play() method on a video element returns a Promise.
    // This promise resolves when playback begins, and rejects if it's prevented.
    const promise = video.play();

    if (promise !== undefined) {
      promise
        .catch((error) => {
          // This catch block will execute if the browser prevents autoplay.
          // This can happen on mobile if the video is not muted or doesn't have 'playsinline'.
          console.error("Video autoplay was prevented:", error);
        })
        .then(() => {
          // This then block will execute if autoplay starts successfully.
          console.log("Video autoplay successfully started.");
        });
    }
  }

  // --- Logic for Form Submission ---
  const form = document.getElementById("quote-form");
  const responseMsg = document.getElementById("form-response");

  if (form) {
    // I've kept your more robust form submission logic here as it's better practice
    // for handling services like Formspree.
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default browser redirect on submission.

      const formData = new FormData(form);
      const formAction = form.action;

      // Submit the form data in the background using fetch.
      fetch(formAction, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            // If the submission was successful...
            form.reset(); // Clear the form fields.
            responseMsg.classList.remove("hidden"); // Show the "Thanks!" message.
          } else {
            // If there was a server error (e.g., Formspree is down).
            alert(
              "Oops! There was a problem submitting your form. Please try again later."
            );
          }
        })
        .catch((error) => {
          // If there was a network error (e.g., no internet connection).
          console.error("Form submission error:", error);
          alert(
            "Oops! There was a network problem. Please check your connection and try again."
          );
        });
    });
  }
});
