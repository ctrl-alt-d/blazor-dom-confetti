// https://github.com/daniel-lundin/dom-confetti/blob/master/src/main.js
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlafettisLib
{

    public partial class Blafettis 
    {
        [Parameter] public double angle {get; set;}  = 90;
        [Parameter] public double spread {get; set;}  = 45;
        [Parameter] public double startVelocity {get; set;}  = 45;
        [Parameter] public int elementCount {get; set;}  = 50;
        [Parameter] public string width {get; set;} = "10px";
        [Parameter] public string height {get; set;} = "10px";
        [Parameter] public string[] colors {get; set;} = BlafettisLibHelper.defaultColors;
        [Parameter] public long duration {get; set;} =  3000;
        [Parameter] public double stagger {get; set;} =  0;
        [Parameter] public double dragFriction {get; set;} =  0.1;
        [Parameter] public Func<double> random {get; set;} = null;

        [Inject] private IJSRuntime JSRuntime {set;get;}

        ElementReference MyRef;

        public async void RaiseConfetti()
        {   
            var config = new ConfettiConfig(angle,spread,startVelocity,elementCount,width,height,colors,duration,stagger,dragFriction);
            await JSRuntime.InvokeVoidAsync("blafettis_raise_confetti", MyRef,config);
        }
        
    }
}