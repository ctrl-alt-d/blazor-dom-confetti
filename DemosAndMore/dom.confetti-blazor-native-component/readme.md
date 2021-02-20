# `blazor-blazor-confetti` (blazor version without JS):

### ToDo

* `blazor-blazor-confetti` (blazor version without JS):
  * Add cancelation token to stop confetti async function on dispose.

### Blazor Version Know issues


  * dom-confetti uses [requestAnimationFrame](https://developer.mozilla.org/es/docs/Web/API/Window/requestAnimationFrame) that is not available on Blazor. The Blazor version just has a main loop using 100% cpu redrawing confettis.

### About

* License MIT, copyright Dani Herrera. Physics and CSS styles of blazor-blazor-confetti code is a direct translation of Daniel Lundin's DOM-Confetti code. The component blazor-dom-confetti is a wrapper for Daniel Lundin's dom-confetti project. The code of dom-confetti is included on `bundle.js` for devs convinience. [dom-confetti](https://github.com/daniel-lundin/dom-confetti)