const FORM = document.querySelector('#the-form');
const HIDDEN_FIELD_SNAPSHOT = FORM.querySelector('input.screenshot');

FORM.addEventListener('submit', function (e) {
  const form = this;

  // Stop submit event.
  e.preventDefault();

  // Create the snapshot.
  const promise = html2canvas(form);

  // We have the snapshot ready.
  promise.then(function (canvas) {
      // Set the server snapshot id.
      HIDDEN_FIELD_SNAPSHOT.value = canvas.toDataURL();

      // Send the form to the server.
      form.submit();
    }
  );

});
