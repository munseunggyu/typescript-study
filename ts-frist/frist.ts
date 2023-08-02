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

function addFuc(x: number, y: number): number {
  return x + y;
}
const addArrow: (x: number, y: number) => number = (x, y) => x + y;
