# blazor-dom-confetti

`blazor-dom-confetti` is a blazor wraper component for [dom-confetti](https://github.com/daniel-lundin/dom-confetti).

## Devs love screenshots

![ScreenShot](./DemosAndMore/ScreenShot/i.gif)

## Show me the code

* Install [blazor-dom-confetti via nuget](https://www.nuget.org/packages/blazor-dom-confetti/)

```razor
@page "/counter"
@using BlafettisLib

<button class="btn btn-primary" @onclick="IncrementCount">
    Click me
    <Blafettis @ref="blafettis" />
</button>

@code {
    private int currentCount = 0;
    protected Blafettis blafettis;  // get the reference

    private void IncrementCount()
    {
        currentCount++;
        blafettis.RaiseConfetti();  // raise confetti via method
    }
}
```

For `blazor-dom-confetti` remember to add javascript `<script src="_content/blazor-dom-confetti/bundle.js"></script>`:

* Server side on `_Host.cshtml`
* Wasm on `wwwroot/index.html`

Also remember to include it: `using BlafettisLib;` or `@using BlafettisLib`

Just insert `<Blafettis @ref="blafettis" />` component where you want to raise confettis, and call `blafettis.RaiseConfetti();` method.

## What about a native blazor version

A blazor native version, without javascript, wrote 100% on c# and html is available at [./DemosAndMore/dom.confetti-blazor-native-component/blazor-blazor-confetti](./DemosAndMore/dom.confetti-blazor-native-component/blazor-blazor-confetti). It is a 100% JS free native blazor component. This component is a clone of [dom-confetti](https://github.com/daniel-lundin/dom-confetti) but without javascript, just Blazor. Not ready for production.

## This repo

Information for this repo

### Contributions

* Be free to PR any feature or bugfix.
* Be free to post any issue.
* Be free to make a contribution for [hacktoberfest](https://hacktoberfest.digitalocean.com) :)

### ToDo

* `blazor-blazor-confetti` (blazor version without JS):
  * Add cancelation token to stop confetti async function on dispose.

### Blazor Version Know issues

* `blazor-blazor-confetti` (blazor version without JS):
  * dom-confetti uses [requestAnimationFrame](https://developer.mozilla.org/es/docs/Web/API/Window/requestAnimationFrame) that is not available on Blazor. The Blazor version just has a main loop using 100% cpu redrawing confettis.

### About

* License MIT, copyright Dani Herrera. Physics and CSS styles of blazor-blazor-confetti code is a direct translation of Daniel Lundin's DOM-Confetti code. The component blazor-dom-confetti is a wrapper for Daniel Lundin's dom-confetti project. The code of dom-confetti is included on `bundle.js` for devs convinience. [dom-confetti](https://github.com/daniel-lundin/dom-confetti)
