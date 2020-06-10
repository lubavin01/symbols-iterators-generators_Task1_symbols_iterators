import Person from './person';

const person1 = new Person();
const person2 = new Person();
const person3 = new Person();

export default class Team {
  [Symbol.iterator]() {
    let current = person1;
    return {
      next() {
        let result;
        if (current === person1) {
          current = person2;
          result = {
            done: false,
            value: person1,
          };
        } else if (current === person2) {
          current = person3;
          result = {
            done: false,
            value: person2,
          };
        } else if (current === person3) {
          current = null;
          result = {
            done: false,
            value: person3,
          };
        } else {
          result = {
            done: true,
          };
        }

        return result;
      },
    };
  }
}
