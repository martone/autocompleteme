(function() {
  var elements = document.querySelectorAll('input[autocomplete=off]');
  if (elements.length) {
    console.group('Removing autocomplete=off from the following elements:');
    Array.prototype.forEach.call(elements, function(e) {
      console.log(e);
      e.removeAttribute('autocomplete');
    });
  console.log('%d total.', elements.length);
  console.groupEnd();
  }
})();
