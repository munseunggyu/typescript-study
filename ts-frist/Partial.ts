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

const pick: Pick<ProfilePartial, "name"> = {
  name: "sf",
};

type PickCustom<T, K extends keyof T> = {
  [P in K]: T[P];
};

const pick2: PickCustom<ProfilePartial, "name"> = {
  name: "sf",
};

const omit: Omit<ProfilePartial, "name"> = {
  phone: 1,
  married: false,
};

type omitCustom<T, S> = Pick<T, Exclude<keyof T, S>>;
const omit2: omitCustom<ProfilePartial, "name"> = {
  phone: 1,
  married: false,
};
