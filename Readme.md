# blazor-dom-confetti

`blazor-dom-confetti` is a blazor wraper component for [dom-confetti](https://github.com/daniel-lundin/dom-confetti).

![ScreenShot](./DemosAndMore/ScreenShot/i.gif)

Can I see a live demo? Yes, at https://blazorrepl.com/repl/wluQmuPX38bvbL8n28

## QuickStart

Install [blazor-dom-confetti via nuget](https://www.nuget.org/packages/blazor-dom-confetti/) with your favorite method:
   * .net cli: `dotnet add package blazor-dom-confetti --version 0.0.0.3`
   * Package reference: `<PackageReference Include="blazor-dom-confetti" Version="0.0.0.3" />`
   * Package manager: `Install-Package blazor-dom-confetti -Version 0.0.0.3`

Use component where you want, just insert `<Blafettis @ref="blafettis" />` component where you want to raise confettis, and call `blafettis.RaiseConfetti();` method (remember to include namespace `using BlafettisLib;` or `@using BlafettisLib`):

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

Personalize your confetti with options (colors, angle, velocity, ...) see demo for a sample https://github.com/ctrl-alt-d/blazor-dom-confetti/blob/main/DemosAndMore/Demos/DemoServerSide/Pages/Options.razor

_From version `0.0.0.4` no js includes are needed.

### Contributions

* Be free to PR any feature or bugfix.
* Be free to post any issue.
* Be free to star and promote this project and also [dom-confetti](https://github.com/daniel-lundin/dom-confetti) project.

### About

* License MIT, copyright Dani Herrera. The component blazor-dom-confetti is a wrapper for Daniel Lundin's [dom-confetti](https://github.com/daniel-lundin/dom-confetti) project. [dom-confetti](https://github.com/daniel-lundin/dom-confetti)'s code is included on `bundle.js` for devs convinience. 

## What about a native blazor version

A blazor native version, without javascript, wrote 100% on c# and html is available at [./DemosAndMore/dom.confetti-blazor-native-component/blazor-blazor-confetti](./DemosAndMore/dom.confetti-blazor-native-component/blazor-blazor-confetti). It is a 100% JS free native blazor component. This component is a clone of [dom-confetti](https://github.com/daniel-lundin/dom-confetti) but without javascript, just Blazor. Not ready for production.
