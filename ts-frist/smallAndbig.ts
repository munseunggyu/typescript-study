// 객체는 상세할수록 좁은 타입
// D > A = B > C = E
type A = { name: string }; // 넓은 타입
type B = { age: number }; // 넓은 타입
type C = { name: string; age: number }; // 좁은 타입

type D = A | B;
type E = A & B;
