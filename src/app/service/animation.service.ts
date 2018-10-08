import { Injectable } from '@angular/core';
import { HTML5CanvasObject } from '../interface/html5-canvas-object';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  canvas: any;
  context:CanvasRenderingContext2D;

  canvasWidth: number;
  canvasHeight: number;

  setUpCanvasAndContext(containerId:string){
    this.canvasWidth = document.getElementById('container').offsetWidth;
    this.canvasHeight = document.getElementById('container').offsetHeight;

    this.canvas = document.querySelector('canvas');
    this.canvas.setAttribute('width',this.canvasWidth);
    this.canvas.setAttribute('height',this.canvasHeight);
    this.context = this.canvas.getContext('2d');
    
    console.log(this.canvas);
  }
 
  animate(objects:Array<HTML5CanvasObject>){
    window.requestAnimationFrame(()=>this.animate(objects));
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

    //Updaet everything
    this.updateObjects(objects);
    console.log('animating')
  }

  updateObjects(objects:Array<HTML5CanvasObject>){
    objects.forEach(obj=>{
      obj.update(this.context);
    })
  }
}
