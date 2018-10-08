export interface HTML5CanvasObject {
    x:number;
    y:number;

    draw(c:CanvasRenderingContext2D):void
    update(c:CanvasRenderingContext2D):void
}
