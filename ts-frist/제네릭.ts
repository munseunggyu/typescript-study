// function add(x: string | number, y: string | number): string | number {
//   return x + y;
// }
// add(1,2) 3
// add('1', '2') '12'

// 제네릭 선언할떄 형식은 모르겠지만 추후 결정
// function add<T extends string, K extends number>(x: T, y: K): T {
//   return x + y;
// }
// add(1, 2);
// add("1", "2");
// add("1", 2);

// <T extends {...}>
// <T extends any[]>
// <T extends (...args: any) => any>
// <T extends abstract new (...args: any) => any> 생성자 타입

// 예시
interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;

  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];

  filter<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];

  filter(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): T[];
}
["1", 2, 3].forEach(() => {});

const map = ["1", 2, 3].map((value) => {
  if (typeof value === "number") {
    return value + 1;
  }
});

const predicate = (value: string | number, index: number): value is string =>
  typeof value === "string";
const filter = [1, "2", 3, "4"].filter(predicate);

interface Arr<T> {
  forEach(callback: (item: T) => void): void;
  map<S>(callback: (item: T) => S): S[];
  filter<S extends T>(callback: (item: T) => item is S): S[];

  find<S extends T>(callback: (item: T) => T): S;
  find<S extends T>(
    predicate: (value: T, index: number, obj: T[]) => value is S,
    thisArg?: any
  ): S | undefined;
  find(
    predicate: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): T | undefined;
}
const findArr = [1, 2, 3];
const filterArr = findArr.find((val) => val);

const arr7: Arr<string | number> = [1, "as", 3];
const 제네릭필터 = arr7.filter(
  (item): item is string => typeof item === "string"
);

const arr4: Arr<number> = [1, 2, 3];

arr4.forEach((item) => {
  console.log(item.toFixed(1));
});
arr4.map((item) => item + "1");

const hi = [1, 2, 3].map((item) => item + "1");

const arr5: Arr<string> = ["1", "2", "3"];
arr5.forEach((item) => {
  console.log(item.charAt(3));
});
arr5.map((item) => item);

const arr6: Arr<boolean> = [true, false];

interface Filter {
  forEach(callback: (item: string) => void): void;
}
