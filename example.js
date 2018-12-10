const FORM = document.querySelector('#the-form');
const HIDDEN_FIELD_SNAPSHOT = FORM.querySelector('input.screenshot');

// Just for example purposes.
const RESULT = document.querySelector('.result');

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

      // Just for example purposes.
      let img = new Image();
      img.src = canvas.toDataURL();
      RESULT.appendChild(img);

      // Send the form to the server.
      //form.submit();
    }
  );

});
