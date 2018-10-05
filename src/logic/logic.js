

const logic = {
    sum: (x, y) => {
        return x + y;
    },
    getLetterData: (str) => {
        let testArr = [
          {id: 1, letter: 'a', number: 0},
          {id: 2, letter: 'b', number: 0},
          {id: 3, letter: 'c', number: 0},
          {id: 4, letter: 'd', number: 0},
          {id: 5, letter: 'e', number: 0},
          {id: 6, letter: 'f', number: 0},
          {id: 7, letter: 'g', number: 0},
          {id: 8, letter: 'h', number: 0},
          {id: 9, letter: 'i', number: 0},
          {id: 10, letter: 'j', number: 0},
          {id: 11, letter: 'k', number: 0},
          {id: 12, letter: 'l', number: 0},
          {id: 13, letter: 'm', number: 0},
          {id: 14, letter: 'n', number: 0},
          {id: 15, letter: 'o', number: 0},
          {id: 16, letter: 'p', number: 0},
          {id: 17, letter: 'q', number: 0},
          {id: 18, letter: 'r', number: 0},
          {id: 19, letter: 's', number: 0},
          {id: 20, letter: 't', number: 0},
          {id: 21, letter: 'u', number: 0},
          {id: 22, letter: 'v', number: 0},
          {id: 23, letter: 'w', number: 0},
          {id: 24, letter: 'x', number: 0},
          {id: 25, letter: 'y', number: 0},
          {id: 26, letter: 'z', number: 0},
        ];
        let lowerCaseLongString = str.toLowerCase();
        let strArr = lowerCaseLongString.split('');
        strArr.forEach(e => {
          let index = testArr.findIndex(el => e === el.letter);
          if (index !== -1) {
            testArr[index].number++;
          }
        })
        return testArr;
    }
};

module.exports = logic;
