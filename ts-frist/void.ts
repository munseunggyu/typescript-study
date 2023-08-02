// 메서드로 정의된 void는 return 값이 존재해도 된다.
function fucA(callback: () => void): void {}

fucA(() => "wow");
interface Human {
  talk: () => void;
}

const human: Human = {
  talk() {
    return "a";
  },
};

// 실전 예제
declare function forEach(arr: number[], callback: (x: number) => void): void;
let targt: number[] = [];
forEach([1, 2, 3], (el) => targt.push(el));

interface IVoid {
  talk: () => void;
}
const test: IVoid = {
  talk() {
    return 3;
  },
};

//  as unknown as number 하지 않으면 결과가 void로 되어 문제 발생
const voidTest = test.talk() as unknown as number;
