import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../service/animation.service';
import { HTML5CanvasObject } from '../interface/html5-canvas-object';
import { AnimationComponent } from '../interface/animation-component';

@Component({
  selector: 'app-prisms',
  templateUrl: './prisms.component.html',
  styleUrls: ['./prisms.component.css']
})
export class PrismsComponent implements OnInit, AnimationComponent {
  animation:AnimationService;
  prisms: Array<Prism>;
  constructor() { 
    this.animation = new AnimationService();
    this.prisms = [];
  }

  ngOnInit() {
    this.animation.setUpCanvasAndContext('container');
    this.init();
    this.animation.animate(this.prisms);
  }

  init(){
    
    for(let i = 0; i < 1; i ++){
      this.prisms.push(new Prism());
    }
  }

}


class Prism implements HTML5CanvasObject {
  x: number;
  y: number;

  dx: number;
  dy:number;

  length: number;
  width: number;

  draw(c:CanvasRenderingContext2D){
    
    }

   update(c:CanvasRenderingContext2D){
    this.draw(c)
   }
}
