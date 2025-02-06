const soma = require('./soma')

test('A função soma deve retornar 5 ao somar 2 e 3', ()=>{
    expect(soma(2000000000,3000000000)).toBe(5000000000)
})

test('A função soma deve retornar 2 ao somar 1 e 1', () =>{
    expect(soma(1000000000,1000000000)).toBe(2000000000)
})