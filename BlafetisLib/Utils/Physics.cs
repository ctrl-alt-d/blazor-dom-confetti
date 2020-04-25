using System;
using System.Diagnostics;
using System.Threading.Tasks;

namespace BlafetisLib
{

    public class Physics
    {
        public Physics(double angle, double spread, double startVelocity, Func<double> random)
        {
            var radAngle = angle * (Math.PI / 180);
            var radSpread = spread * (Math.PI / 180);

            x= 0;
            y= 0;
            z= 0;
            wobble=  random() * 10;
            wobbleSpeed =  0.1 + random() * 0.1;
            velocity =  startVelocity * 0.5 + random() * startVelocity;
            angle2D =  -radAngle + (0.5 * radSpread - random() * radSpread);
            angle3D =  -(Math.PI / 4) + random() * (Math.PI / 2);
            tiltAngle=  random() * Math.PI;
            tiltAngleSpeed =  0.1 + random() * 0.3;
        }
        public double x {get; set;} 
        public double  y {get; set;} 
        public double  z {get; set;} 
        public double wobble {get; set;} 
        public double  wobbleSpeed  {get; set;} 
        public double velocity  {get; set;} 
        public double angle2D  {get; set;} 
        public double angle3D  {get; set;} 
        public double tiltAngle {get; set;}
        public double tiltAngleSpeed  {get; set;}

    }

}
