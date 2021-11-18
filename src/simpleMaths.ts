export function calcAreaSquare(sideLength: number): number {
    return Math.pow(sideLength, 2);
}

export function calcAreaTriangle(width: number, height: number): number {
    return width * height / 2;
}

export function calcAreaTrapezium(length: number , width: number, height: number): number{
    return (length+width)*0.5*height ;
}
export function calcWorkDone(Force: number, Distance: number):  number{
    return Force*Distance ;
}