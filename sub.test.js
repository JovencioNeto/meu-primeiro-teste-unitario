const sub = require('./sub')

test('A função sub deve retornar 6.5 ao subtrair 6.5 e 6', ()=>{
    expect(sub(6.5,6)).toBe(0.5)
})
