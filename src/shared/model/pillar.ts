import { HTML5CanvasObject } from "../../app/interface/html5-canvas-object";

export class Pillar implements HTML5CanvasObject {
    x:number;
    y:number;
    dx:number;
    dy:number;

    length:number;
    width: number;

    gravity:number
    color:string;
   constructor(x:number, y:number, width:number, length:number, color:string ){
       this.x=x;
       this.y = y;
       this.color = color;
   }
   
   draw(c:CanvasRenderingContext2D){
    // c.beginPath()
    // c.arc(this.x, this.y, t, 0, Math.PI * 2, false)
    // c.fillStyle = this.color
    // c.fill()
    // c.closePath()
    }

   update(c:CanvasRenderingContext2D){
    this.draw(c)
   }

   
}