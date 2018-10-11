# Angular Canvas Animations BootStrappin
Hi, if you want a starter to creating html 5 animations in an Angular(tm) project, you might be in the right place.

Relying on this project assumes you understand Angular as well as basic canvas animation stuff. I say stuff because I don't know what else to call it.

## Getting started
1. Clone the project with your own name doing `git clone git@github.com:Mrfoofums/AngularHTML5CanvasAnimations.git my-own-project`
2. do `npm install` in your project directory
3.  Run `ng serve` for a dev server.
4. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Basic Structure
I created a service that handles:

    * initilizaing the canvas based on the current components dimensions
    * runs update() on all objects passed into it
    * creates an animation loop for the current component

I created an interface for animation model objects called HTML5CanvasObject, make sure to implement this in your models.

I created an interface for components running animations, make sure to implement this interface when creating components

When creating a new component you will need to:
1. create an array of some object that you created a model for
2. inject the animation service into your component
3. do `this.service.setUpCanvasAndContext('container');` in your ngInit or ngAfterViewInit
4. do `init()`
5. do `this.service.animate(this.objectsToAnimateArray);` in your ngInit or ngAfterViewInit

Follow the example and it will work outm probably!

## Of Notes
1. This isn't a silver bullet for handling all type of animations
2. Try to write optimal code without replicating data all over the place or you might crash your browser!

