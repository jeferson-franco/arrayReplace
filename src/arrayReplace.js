function solution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map((item) => {
        if (item === elemToReplace) {
            return substitutionElem;
        }
        return item;
    });
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test arrayReplace

// alternative solution
// function solution(inputArray, elemToReplace, substitutionElem) {
//     return inputArray.map((i) => (i == elemToReplace ? substitutionElem : i));
// }
