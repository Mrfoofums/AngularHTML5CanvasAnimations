import { Component, ViewChildren, ElementRef, Input } from '@angular/core';
import { Particle } from '../shared/model/particle';
import { AnimationComponent } from './interface/animation-component';
import { AnimationService } from './service/animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AnimationComponent {
  particles: Array<Particle>;


  constructor(private service:AnimationService){
    // super();
    this.particles = [];
    
  }

  init(){
    for(let i = 0; i<1; i++){
      //Add 1
      this.particles.push(new Particle(this.service.canvasWidth/2 ,this.service.canvasHeight/2,100,'black'));
    }
  }
  
  ngAfterViewInit(){
    //Pass in the canvas parents ID so we can programmatically set the canvas width and height to the parents dimensions
    this.service.setUpCanvasAndContext('container');
    //Init has to be called after setup do to particles using variables set there
    this.init()
    this.service.animate(this.particles);
  }

}
