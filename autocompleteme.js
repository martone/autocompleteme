/**
 * autocompleteme.js
 * Chrome extension to remove autocomplete=off attributes from all elements on the page.
 *
 * https://github.com/martone/autocompleteme
 * Andy Martone (amartone@gmail.com)
 */
(function() {
  var elements = document.querySelectorAll('[autocomplete=off]');
  if (elements.length) {
    console.groupCollapsed(
        'Removing autocomplete=off from the following %d element(s):',
        elements.length);
    Array.prototype.forEach.call(elements, function(e) {
      console.log(e);
      e.removeAttribute('autocomplete');
    });
    console.groupEnd();
  }
})();
