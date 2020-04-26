# blazor-dom-confetti

`blazor-dom-confetti` is a blazor wraper component for [dom-confetti](https://github.com/daniel-lundin/dom-confetti).

## Devs love screenshots

![ScreenShot](./ScreenShot/i.gif)

## Show me the code

```razor
@page "/counter"
@using BlafettisLib

<button class="btn btn-primary" @onclick="IncrementCount">
    Click me
    <Blafettis @ref="blafettis" />
</button>

@code {
    private int currentCount = 0;
    protected Blafettis blafettis;

    private void IncrementCount()
    {
        currentCount++;
        blafettis.RaiseConfetti();
    }
}
```

For `blazor-dom-confetti` remember to add javascript `<script src="_content/blazor-dom-confetti/bundle.js"></script>`:

* Server side on `_Host.cshtml`
* Wasm on `wwwroot/index.html`

## What about a native blazor version

* [./DemosAndMore/dom.confetti-blazor-native-component/blazor-blazor-confetti](./DemosAndMore/dom.confetti-blazor-native-component/blazor-blazor-confetti) is a 100% JS free native blazor component. This component is a clone of [dom-confetti](https://github.com/daniel-lundin/dom-confetti) but without javascript, just Blazor. Not ready for production.

## This repo

Information for this repo

### Contributions

* Be free to PR any feature or bugfix.
* Be free to post any issue.

### ToDo

* `blazor-blazor-confetti` (blazor version without JS):
  * Add cancelation token to stop confetti async function on dispose.

### Blazor Version Know issues

* `blazor-blazor-confetti` (blazor version without JS):
  * dom-confetti uses [requestAnimationFrame](https://developer.mozilla.org/es/docs/Web/API/Window/requestAnimationFrame) that is not available on Blazor. The Blazor version just has a main loop using 100% cpu redrawing confettis.

### About

* License MIT, copyright Dani Herrera. Physics and CSS styles of blazor-blazor-confetti code is a direct translation of Daniel Lundin's DOM-Confetti code. The component blazor-dom-confetti is a wrapper for Daniel Lundin's dom-confetti project. The code of dom-confetti is included on `bundle.js` for devs convinience. [dom-confetti](https://github.com/daniel-lundin/dom-confetti)
