# Blafetti

### Blafetti = Blazor + Confetti

This is a Blazor component you can use to add confetti to your buttons or elements. 100% JS free. Try DemoWasm, server side is not enough fast refreshing confetti.

This component is a clone of [dom-confetti](https://github.com/daniel-lundin/dom-confetti) but without javascript, just Blazor.

### Devs love screenshots

![ScreenShot](./ScreenShot/i.gif)

### Show me the code

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

### Contributions

* Be free to PR any feature or bugfix.
* Be free to post any issue.

### ToDo

* Add cancelation token to stop confetti async function on dispose.

### Know issues

* On Server Side the effect is not good, not enought framerate from server, maybe.

### About

* License MIT, copyright Dani Herrera. Physics of this code is a direct translation of Daniel Lundin's DOM-Confetti code.

