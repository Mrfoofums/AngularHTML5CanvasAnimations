import { Component, OnInit } from '@angular/core';
import { AnimationComponent } from '../interface/animation-component';
import { Particle } from 'src/shared/model/particle';
import { GeneratorsService } from '../service/generators.service';
import { AnimationService } from '../service/animation.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AnimationComponent {

  particles: Array<Particle>

  constructor(private gen:GeneratorsService,private animation: AnimationService) {
    this.particles = [];
   }
  
  init(){
    for(let i =0; i<2; i++){
      let radius = 5;
      let sizeOfSim = 1;
      this.particles.push(this.gen.randomParticle(this.animation.canvasWidth/2, this.animation.canvasHeight/2,radius,sizeOfSim));
    }
  }
  ngOnInit() {
    this.animation.setUpCanvasAndContext('container');
    this.init();
    this.animation.animate(this.particles);
  }

}
