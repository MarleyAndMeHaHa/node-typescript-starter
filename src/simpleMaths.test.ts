import { calcAreaSquare, calcAreaTriangle,calcAreaTrapezium, tan } from './simpleMaths'

test('Area Square', () => {
    expect(calcAreaSquare(4)).toBe(16);
})

test('Area Triangle', () => {
    expect(calcAreaTriangle(4, 5)).toBe(10);
})

test('Area Trapezium', ()=>{
    expect(calcAreaTrapezium(10, 30, 5)).toBe(100)
})

test('Tangent',()=>{
    expect(tan(45)).toBe(1)

})