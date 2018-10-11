import { HTML5CanvasObject } from '../../app/interface/html5-canvas-object';

export class Sphere implements HTML5CanvasObject {
    x:number;
    y:number;
    xCenter:number;
    yCenter:number;

    lastX: number;
    lastY: number;

    radius:number;
    color:string;

    counter = Math.random() * Math.PI * 2;
    velocity:number;

    distanceFromCenter:number;
    velocityFactor:number;

   constructor(x:number, y:number, radius:number, distanceFromCenter:number, velocityFactor:number, color:string ){
        this.distanceFromCenter = distanceFromCenter;
        this.velocityFactor = velocityFactor

       this.xCenter = x;
       this.yCenter = y;

       this.x= this.xCenter;
       this.y = this.yCenter;

       this.lastX = this.x;
       this.lastY = this.y;

       this.radius = radius;
       this.color = color;
       this.velocity = this.distanceFromCenter * velocityFactor
       ;
   }
   
   draw(c:CanvasRenderingContext2D){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

   update(c:CanvasRenderingContext2D){
  
       this.draw(c)
   }
}