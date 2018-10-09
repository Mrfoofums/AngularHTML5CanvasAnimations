import { HTML5CanvasObject } from "../../app/interface/html5-canvas-object";

export class Particle implements HTML5CanvasObject {
    x:number;
    y:number;

    lastX: number;
    lastY: number;

    radius:number;
    color:string;

    radians = Math.random() * Math.PI * 2;
    velocity = 0.05;

    distanceFromCenter:number;

   constructor(x:number, y:number, radius:number, distanceFromCenter:number, color:string ){
       this.x=x;
       this.y = y;
       this.radius = radius;
       this.color = color;
       this.distanceFromCenter = distanceFromCenter;
   }
   
   draw(c:CanvasRenderingContext2D){
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
    }

   update(c:CanvasRenderingContext2D){
    this.lastX = this.x;
    this.lastY = this.y;
    this.radians += this.velocity;

    //Circluar motion
    this.x = this.lastX + Math.cos(this.radians) * this.distanceFromCenter;
    this.y = this.lastY + Math.sin(this.radians) * this.distanceFromCenter;
    
       //Then Draw It
       this.draw(c)
   }

   
}