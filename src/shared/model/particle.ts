import { HTML5CanvasObject } from '../../app/interface/html5-canvas-object';

export class Particle implements HTML5CanvasObject {
    x:number;
    y:number;
    xCenter:number;
    yCenter:number;

    lastX: number;
    lastY: number;

    radius:number;
    color:string;

    counter = Math.random() * Math.PI * 2;
    // velocity = 0.03;
    velocity:number;
    distanceFromCenter:number;
    // velocity = Math.random() * this.distanceFromCenter

   constructor(x:number, y:number, radius:number, distanceFromCenter:number, color:string ){
       this.distanceFromCenter = distanceFromCenter;
       this.xCenter = x;
       this.yCenter = y;

       this.x= this.xCenter;
       this.y = this.yCenter;

       this.lastX = this.x;
       this.lastY = this.y;

       this.radius = radius;
       this.color = color;
       this.velocity = this.distanceFromCenter * .00008;
   }
   
   draw(c:CanvasRenderingContext2D){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

   update(c:CanvasRenderingContext2D){
    this.counter += this.velocity;

    // Circluar motion
    this.x = this.lastX + Math.cos(this.counter) * this.distanceFromCenter;
    this.y = this.lastY + Math.sin(this.counter) * this.distanceFromCenter;

       // Then Draw It
       this.draw(c)
   }

   
}