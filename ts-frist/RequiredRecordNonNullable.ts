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
