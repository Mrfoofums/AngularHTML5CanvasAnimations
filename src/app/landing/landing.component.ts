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

  particles: Array<Particle>;
  animation: AnimationService;
  constructor(private gen: GeneratorsService) {
    this.animation = new AnimationService();
    this.particles = [];
   }

  init() {
    for (let i = 0; i < 500; i++) {
      const minRadius = 1;
      const maxRadius = 3;
      const max = 545;
      const min = 30;
      // tslint:disable-next-line:max-line-length
      this.particles.push(this.gen.randomParticle(this.animation.canvasWidth / 2, this.animation.canvasHeight / 2, minRadius, maxRadius, min, max));
    }
  }
  ngOnInit() {
    this.animation.setUpCanvasAndContext('container');
    this.init();
    this.animation.animate(this.particles);
  }

}
