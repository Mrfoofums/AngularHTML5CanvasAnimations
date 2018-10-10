import { Injectable } from '@angular/core';
import { Particle } from 'src/shared/model/particle';

@Injectable({
  providedIn: 'root'
})
export class GeneratorsService {

  constructor() { }
   colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

  randomParticle(x: number, y: number, radius: number, minDist:number, maxDist:number ) {

    const color = this.randomColor(this.colors);
    const distanceFromCenter = this.randomIntFromRange(minDist, maxDist);
    const r = this.randomIntFromRange(radius, 7);
    return new Particle(x, y, r, distanceFromCenter, color);
  }

   randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

 randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

 distance(x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  }

}
