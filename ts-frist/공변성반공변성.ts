// 함수의 리턴값이 더 넓은 타입으로 대입 가능
function 공변성a(x: string): number {
  return +x;
}

type 공변성b = (x: string) => string | number;

const 공변성c: 공변성b = 공변성a;

// 함수의 매개변수는 더 좁은 타입으로 대입 가능
function 반공변성A(x: string | number): number {
  return +x;
}

type 반공변성B = (x: string) => number;

const 반공변성C: 반공변성B = 반공변성A;
