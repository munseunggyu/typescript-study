// type
const a: number = 5;
const b: string = "aa";
const c: boolean = false;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for("abc");
// const g: bigint = 100n;

const arr: string[] = ["12", "a", "b"];
const arr2: number[] = [1, 2, 3];
const arr3: [number, number, string] = [1, 22, "a"];
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

type Add = () => number;
interface Minus {}

let k = 123;
k = "hello" as unknown as number; // 타입을 강제로 변환시킨다.

function addFuc(x: number, y: number): number {
  return x + y;
}
const addArrow: (x: number, y: number) => number = (x, y) => x + y;

const head = document.querySelector("#head")!; // ! 무조건 존재한다 | null 이 사라진다(잘 사용하지 않음)

function rest(a: string, ...arg: string[]) {
  console.log(a, arg);
}
rest("1", "2");

// enum
const enum EDirection {
  Up = 1,
  Down,
  Left,
  Right,
}
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
const eumna = EDirection.Up;

const keyofObj = { a: "1", b: "2" } as const;
// key값의 타입
type Key = keyof typeof keyofObj;
// value들의 타입
type value = (typeof keyofObj)[keyof typeof keyofObj];

// & 모두 있어야한다.
type Intersection = { hello: "world" } & { msg: "msg1" };
const interesction: Intersection = { hello: "world", msg: "msg1" };
