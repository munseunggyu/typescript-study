interface ProfilePartial {
  name: string;
  phone: number;
  married: boolean;
}

const msg: ProfilePartial = {
  name: "msg",
  phone: 1,
  married: false,
};

const msg1: Partial<ProfilePartial> = {
  name: "hi",
};

// Partial 만들어보기 ?(옵셔널) 자동 생성

type P<T> = {
  [key in keyof T]?: T[key];
};

const msg2: P<ProfilePartial> = {
  name: "hi",
};
