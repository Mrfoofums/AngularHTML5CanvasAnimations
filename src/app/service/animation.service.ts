import { Injectable } from '@angular/core';
import { HTML5CanvasObject } from '../interface/html5-canvas-object';

export class AnimationService {
  canvas: any;
  context:CanvasRenderingContext2D;

  canvasWidth: number;
  canvasHeight: number;

  setUpCanvasAndContext(containerId:string){
    this.canvasWidth = document.getElementById(containerId).offsetWidth;
    this.canvasHeight = document.getElementById(containerId).offsetHeight;

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
    this.context.font = "30px Open Sans";
    this.context.textAlign='center';
    this.context.fillText("Forrest Knight",this.canvasWidth/2,this.canvasHeight/2);
  }

  updateObjects(objects:Array<HTML5CanvasObject>){
    objects.forEach(obj=>{
      // console.log(obj);
      obj.update(this.context);
    })
  }

  getMaximumRadiusForCenteredSphere():number{
    if(this.canvasWidth < this.canvasHeight){
      return this.canvasWidth/2
    }
    else{
      return this.canvasHeight/2
    }
  }
}
