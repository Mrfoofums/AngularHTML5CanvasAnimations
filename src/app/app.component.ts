import { Component, ViewChildren, ElementRef } from '@angular/core';
import { Particle } from '../shared/model/particle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren('mycanvas') canvasRef:ElementRef;
  canvas: any;
  context:CanvasRenderingContext2D;
  width: number;
  height: number;

  particles: Array<Particle>;

  constructor(){
    this.particles = [];
    this.canvas = {};

  
  }

  ngOnInit(){
    //Height and Width
    this.width = document.getElementById('container').offsetWidth;
    this.height = document.getElementById('container').offsetHeight;

    this.canvas = document.querySelector('canvas');
    this.canvas.setAttribute('width',this.width);
    this.canvas.setAttribute('height',this.height);
    console.log(this.canvas);
    this.context = this.canvas.getContext('2d');

  }

  ngAfterViewInit(){
    // Run it
    this.initAni();
    this.animate();
  }

  initAni(){
    for(let i = 0; i<1; i++){
      //Add 1
      this.particles.push(new Particle(this.width/2 ,this.height/2,150,'black'));
    }
  }

   animate(){
    window.requestAnimationFrame(()=> this.animate());
    // this.context.fillStyle = 'rgba(255,255,255, 0.05)';
    // this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.clearRect(0, 0, this.width, this.height)

    //Draw 1
    this.particles.forEach(particle => {
     particle.update(this.context);
    });
    console.log('animating');
  }

 
}
