function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

type Params = Parameters<typeof zip>;
type typeReturn = Params[1];

// 함수로 특정하는 방법 <T extends (...agrs: any) => any>
// infer 특정해라
type ParametersCustom<T extends (...agrs: any) => any> = T extends (
  ...agrs: infer A
) => any
  ? A
  : never;

type ReturnTypeCustom<T extends (...agrs: any) => any> = T extends (
  ...agrs: any
) => infer A
  ? A
  : never;
