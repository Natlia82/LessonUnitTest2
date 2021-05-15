import matchers from '../matcher';

test('matchers one', () => {
    const result = matchers([
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 }
    ]);

    expect(result).toEqual([
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 }
    ]);
});


test('matchers two', () => {
    const result = matchers([
        { name: 'гена', health: 70 },
        { name: 'мила', health: 80 },
        { name: 'лунтик', health: 10 },
    ]);

    expect(result).toEqual([
        { name: 'мила', health: 80 },
        { name: 'гена', health: 70 },
        { name: 'лунтик', health: 10 },
    ]);
});