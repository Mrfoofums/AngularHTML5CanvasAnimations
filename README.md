# Angular Canvas Animations BootStrappin
Hi, if you want a starter to creating html 5 animations in an Angular(tm) project, you might be in the right place.

Relying on this project assumes you understand Angular as well as basic canvas animation stuff. I say stuff because I don't know what else to call it.

## Getting started
1. Clone the project with your own name doing `git clone git@github.com:Mrfoofums/AngularHTML5CanvasAnimations.git my-own-project`
2. cd into your project folder and run `ng serve`
3. Code away!


## Basic Structure
I created a service that handles:

    * initilizaing the canvas based on the current components dimensions
    * runs update() on all objects passed into it
    * creates an animation loop for the current component

I created an interface for animation model objects called HTML5CanvasObject, make sure to implement this in your models.

I created an interface for components running animations, make sure to implement this interface when creating components

When creating a new component you will need to:
1. create an array of some object that you crearted a model for that implements the interface
2. inject the animation service into your component
3. do `this.service.setUpCanvasAndContext('container');` in your ngInit or ngAfterViewInit
4. do `init()`
5. do `this.service.animate(this.objectsToAnimateArray);` in your ngInit or ngAfterViewInit

Follow the example and it will work out



## Of Notes
1. This isn't a silver bullet for handles all type of animations
2. Try to write optimal code without replicating data all over the place or you might crash your browser!




### ANGULAR STUFF

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
