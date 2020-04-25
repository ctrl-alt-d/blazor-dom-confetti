// https://github.com/daniel-lundin/dom-confetti/blob/master/src/main.js
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;

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
        [Parameter] public Func<double> random 
        {
            get
            {
                _random ??= ()=>r.NextDouble();
                return _random;
            }
            set
            {
                _random = value;
            }
        }
        Random r = new Random();
        Func<double> _random ;

        private List<Fetti> fettis = new List<Fetti>();

        private Stopwatch stopWatch = new Stopwatch();
        private long remainingTime {set; get;}

        private bool inExecution = false;
        private object olo = new object();

        public async void RaiseConfetti()
        {   
            lock(olo)
            {
                if (inExecution) return;
                inExecution=true;
            }

            // make fettis     
            var elements = BlafettisLibHelper.createElements(elementCount,colors, width, height);
            var newFesttis = 
                elements
                .Select(e=> new Fetti(
                    e,
                    new Physics(angle,spread,startVelocity,random)
                ))
                .ToList();

            // raise
            remainingTime = duration;
            stopWatch.Start();
            this.fettis = newFesttis;
            while (remainingTime>0)
            {
                Tic();
                await Task.Delay(1);
                await InvokeAsync(StateHasChanged);
                remainingTime -= stopWatch.ElapsedMilliseconds;
                stopWatch.Restart();
            }
            stopWatch.Stop();
            fettis.Clear();
            await Task.Delay(1);
            await InvokeAsync(StateHasChanged);

            lock(olo)
            {
                inExecution=false;
            }

        }

        private void Tic()
        {            
            var elapsed = stopWatch.ElapsedMilliseconds;
            var progress = Convert.ToDouble( duration - remainingTime) / Convert.ToDouble(duration);
            var elementsToMove = 
                stagger!=0? 
                Convert.ToInt32( Math.Ceiling(elapsed / stagger) )
                :elementCount;

            fettis
                .Take(elementCount)
                .ToList()
                .ForEach(fetti => BlafettisLibHelper.updateFetti(fetti, progress, dragFriction));            
        }
    }
}