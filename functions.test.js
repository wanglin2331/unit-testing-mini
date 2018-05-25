let functions = require('./functions');

test('returnTwo() function equals 2', ()=>{
    expect(functions.returnTwo()).toEqual(2);
});

test('greeting() returns correct Hello, name.',()=>{
    expect(functions.greeting("James")).toEqual("Hello, James.");
    expect(functions.greeting("Jill")).toEqual("Hello, Jill.");
});

describe('Math functions',() => {


    test('add() returns correct sum number',()=>{
        expect(functions.add(1,2)).toEqual(3);
        expect(functions.add(5,9)).toEqual(14);
    });

    test('multiple() returns correct multiplied number',()=>{
        expect(functions.multiple(1,2)).toEqual(2);
        expect(functions.multiple(5,9)).toEqual(45);
    });

    test('divide() returns correct divided number',()=>{
        expect(functions.divide(8,2)).toEqual(4);
        expect(functions.divide(18,9)).toEqual(2);
    });

    test('subtract() returns correct subtracted number',()=>{
        expect(functions.subtract(10,2)).toEqual(8);
        expect(functions.subtract(10,9)).toEqual(1);
    });

})
