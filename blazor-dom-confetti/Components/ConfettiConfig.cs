// https://github.com/daniel-lundin/dom-confetti/blob/master/src/main.js
using System;

namespace BlafettisLib
{
    public class ConfettiConfig
    {
        public ConfettiConfig(double angle, double spread, double startVelocity, int elementCount, string width, string height, string[] colors, long duration, double stagger, double dragFriction)
        {
            this.angle = angle;
            this.spread = spread;
            this.startVelocity = startVelocity;
            this.elementCount = elementCount;
            this.width = width;
            this.height = height;
            this.colors = colors;
            this.duration = duration;
            this.stagger = stagger;
            this.dragFriction = dragFriction;
        }

        public double angle {get; }
        public double spread {get; }
        public double startVelocity {get; } 
        public int elementCount {get; }
        public string width {get; }
        public string height {get; }
        public string[] colors {get; }
        public long duration {get; }
        public double stagger {get; }
        public double dragFriction {get; }
 
    }
}