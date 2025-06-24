<script>
  const form = document.getElementById("quote-form");
  const responseMsg = document.getElementById("form-response");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.reset();
    responseMsg.classList.remove("hidden");
  });
</script>
