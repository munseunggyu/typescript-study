interface ProfileTest1 {
  name?: string;
  phone?: number;
  married?: boolean;
}

// Required 옵셔널을 제거해준다
const me: Required<ProfileTest1> = {
  name: "hi",
  phone: 0,
  married: true,
};

type RequiredCustom<T> = {
  [key in keyof T]-?: T[key];
};

const me2: RequiredCustom<ProfileTest1> = {
  name: "hi",
  phone: 0,
  married: true,
};

// Record
interface Obj {
  [key: string]: number;
}

const recode: Obj = {
  name: 1,
  wow: 2,
};

const recode2: Record<string, number> = {
  name: 1,
  wow: 2,
};

type RecordCustom<T extends keyof any, S> = {
  [P in T]: T;
};
