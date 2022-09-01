const solution = require('./arrayReplace.js');

test('test 1', () => {
    expect(solution([1, 2, 1], 1, 3)).toEqual([3, 2, 3]);
});

test('test 2', () => {
    expect(solution([1, 2, 3, 4, 5], 3, 0)).toEqual([1, 2, 0, 4, 5]);
});

test('test 3', () => {
    expect(solution([1, 1, 1], 1, 10)).toEqual([10, 10, 10]);
});

test('test 4', () => {
    expect(solution([1, 2, 1, 2, 1], 2, 1)).toEqual([1, 1, 1, 1, 1]);
});

test('test 5', () => {
    expect(solution([1, 2, 1, 2, 1], 2, 2)).toEqual([1, 2, 1, 2, 1]);
});

test('test 6', () => {
    expect(solution([3, 1], 3, 9)).toEqual([9, 1]);
});

test('test 7', () => {
    expect(solution([10, 10], 0, 9)).toEqual([10, 10]);
});

test('test 8', () => {
    expect(solution([2, 1], 3, 9)).toEqual([2, 1]);
});
