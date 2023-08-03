class ClassA1 {
  private pr: string = "23";
  a: string;
  b: string;
  constructor() {
    this.a = "123";
    this.b = "hi";
  }
}

interface IImplementsA {
  readonly a: string;
  b: string;
}
// 클래스 모양 통제
class ImplementsB implements IImplementsA {
  a: string = "123";
  b: string = "12";
}

// protected 상속 받았을때 사용 가능
