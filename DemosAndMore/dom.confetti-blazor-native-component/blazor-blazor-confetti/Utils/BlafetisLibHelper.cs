using System;
using System.Collections.Generic;
using System.Linq;

namespace BlafettisLib
{
    public static class BlafettisLibHelper
    {
        public static string[] defaultColors => new [] {"#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"};

        public static List<Element> createElements(int elementCount, string[] colors,string width,string height)
        {
            var root = 
                Enumerable
                .Range(0, elementCount)
                .Select(i =>
                    new Element(width, height, colors[i%colors.Count()])
                )
                .ToList();
            return root;
        }

        public static Physics  randomPhysics(double angle, double spread, double startVelocity, Func<double> random) {
            return new Physics(angle, spread, startVelocity, random);
        }

        public static void updateFetti(Fetti fetti, double progress, double dragFriction) {
            fetti.physics.x += Math.Cos(fetti.physics.angle2D) * fetti.physics.velocity;
            fetti.physics.y += Math.Sin(fetti.physics.angle2D) * fetti.physics.velocity;
            fetti.physics.z += Math.Sin(fetti.physics.angle3D) * fetti.physics.velocity;
            fetti.physics.wobble += fetti.physics.wobbleSpeed;

            fetti.physics.velocity -= fetti.physics.velocity * dragFriction;

            fetti.physics.y += 3;
            fetti.physics.tiltAngle += fetti.physics.tiltAngleSpeed;

            var wobbleX = fetti.physics.x + 10 * Math.Cos(fetti.physics.wobble);
            var wobbleY = fetti.physics.y + 10 * Math.Sin(fetti.physics.wobble);

            var wobbleXstr = wobbleX.ToString("0.0", System.Globalization.CultureInfo.InvariantCulture);
            var wobbleYstr = wobbleY.ToString("0.0", System.Globalization.CultureInfo.InvariantCulture);
            var tilAngleStr = fetti.physics.tiltAngle.ToString("0.0", System.Globalization.CultureInfo.InvariantCulture);

            var transform = $"translate3d({wobbleXstr}px, {wobbleYstr}px, 0) rotate3d(1, 1, 1, {tilAngleStr}rad)";

            fetti.element.visibility = "visible";
            fetti.element.transform = transform;
            fetti.element.opacity = 1.0 - progress;

        }

    }

}

