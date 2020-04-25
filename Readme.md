# Blafetti

### Blafetti = Blazor + Confetti

This is a Blazor component you can use to add confetti to your buttons or elements. 100% JS free. Try DemoWasm, server side is not enough fast refreshing confetti.

This component is a clone of [dom-confetti](https://github.com/daniel-lundin/dom-confetti) but without javascript, just Blazor.


![ScreenShot](./ScreenShot/i.gif)

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


