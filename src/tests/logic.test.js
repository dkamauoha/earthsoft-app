const { sum, getLetterData } = require('../logic/logic');

const testString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus finibus. Duis fringilla nibh ac bibendum ullamcorper. Aenean euismod et nulla nec eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla lobortis pulvinar elit, non sollicitudin leo pellentesque vel. Sed ac porta risus. Ut lacinia malesuada neque ut mollis. Ut a ex justo. Sed efficitur faucibus ante, quis dapibus velit ultricies non. Aliquam quis purus sapien. Donec euismod laoreet nibh, vitae dapibus dui cursus vitae. Duis id magna a elit semper gravida. Aenean eget volutpat arcu. Nam pretium bibendum ipsum, a ornare augue auctor in. Nulla et dignissim justo.'

describe('Tests sum functionality', () => {
    test('can add two numbers together', () => {
        expect(sum(2,2)).toBe(4);
    });
});

describe.only('Tests getLetterData functionality', () => {
    let results = getLetterData(testString);

    test('elements have correct keys', () => {
        expect(results[0]).toHaveProperty('id');
        expect(results[0]).toHaveProperty('letter');
        expect(results[0]).toHaveProperty('number');
    })

    test('can return correct data', () => {
        expect(results[0]).toEqual({id: 1, letter: 'a', number: 52})
    });

    test('contains correct data', () => {
        expect(results).toContainEqual({id: 6, letter: 'f', number: 7})
    })

    test('Returns an array of the correct length', () => {
        expect(results.length).toBe(26);
    });
});