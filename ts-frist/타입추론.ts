class ClassA {
  aaa() {}
}

class ClassB {
  bbb() {}
}

function aOrB(param: ClassA | ClassB) {
  if (param instanceof ClassA) {
    param.aaa();
  }
}
aOrB(new ClassA());

type TypeCheckB = { type: "b"; bbb: string };
type TypeCheckC = { type: "c"; ccc: string };
type TypeCheckD = { type: "d"; ddd: string };

function typeCheckFuc(a: TypeCheckB | TypeCheckC | TypeCheckD) {
  if (a.type === "b") {
    a.bbb;
  } else if (a.type === "c") {
    a.ccc;
  } else {
    a.ddd;
  }

  // 다른 방법
  if ("bbb" in a) {
    a.bbb;
  } else if ("ccc" in a) {
    a.ccc;
  } else {
    a.ddd;
  }
}
