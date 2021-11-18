import { calcAreaSquare, calcAreaTriangle,calcAreaTrapezium,calcWorkDone } from './simpleMaths'

test('Area Square', () => {
    expect(calcAreaSquare(4)).toBe(16);
})

test('Area Triangle', () => {
    expect(calcAreaTriangle(4, 5)).toBe(10);
})

test('Area Trapezium', ()=>{
    expect(calcAreaTrapezium(10, 30, 5)).toBe(100)
})
test('Work Done', ()=> {
    expect(calcWorkDone(500,10)).toBe(5000)
})
