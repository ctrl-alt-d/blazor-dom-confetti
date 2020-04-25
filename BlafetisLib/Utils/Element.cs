using System;

namespace BlafetisLib
{
    public class Element 
    {
        public string width {set; get;} 
        public string height {set; get;}
        public string willChange {set; get;} = "transform, opacity";
        public string visibility {set; get;} = "hidden";
        public string background_color {get;} = "hidden";
        public const string position = "absolute";
        public string transform {get; set;} = "";
        public double opacity {get; set;} = 1;
        public string key {get;} = Guid.NewGuid().ToString();        
        public string style => string.Join(";", new [] {
           $"width:{width}" ,
           $"height:{height}" ,
           $"will-change:{willChange}" ,
           $"visibility:{visibility}" ,
           $"background-color:{background_color}" ,
           $"position:{position}" ,
           $"transform:{transform}" ,
           $"opacity:{opacity.ToString("0.0", System.Globalization.CultureInfo.InvariantCulture)}" 
           });
            

        public Element(string width, string height, string background_color)
        {
            this.width = width;
            this.height = height;
            this.background_color = background_color;
        }
    }


}

