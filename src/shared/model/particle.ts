import { HTML5CanvasObject } from "../../app/interface/html5-canvas-object";

export class Particle implements HTML5CanvasObject {
    x:number;
    y:number;
    radius:number;
    color:string;
   constructor(x:number, y:number, radius:number, color:string ){
       this.x=x;
       this.y = y;
       this.radius = radius;
       this.color = color;
   }
   
   draw(c:CanvasRenderingContext2D){
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
    }

   update(c:CanvasRenderingContext2D){
    this.draw(c)
   }

   
}