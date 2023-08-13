import axios, { AxiosError, AxiosResponse } from "axios";
interface IPost {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
interface Hey<T> {
  data: T;
}
interface AxiosCustom {
  // get<T>(params: string): Promise<T>;
  get: <T, R = AxiosResponse<T>>(url: string) => Promise<R>;
}

(async () => {
  try {
    const axiosCustom: AxiosCustom = axios;
    const res = await axiosCustom.get<IPost>(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(res.data.id);
    console.log(res.data.title);
    console.log(res.data.userId);
    console.log(res.data.completed);
    return res.data;
  } catch (error) {
    // 1번 방법
    const errorRes = (error as AxiosError).response;
    console.log(errorRes?.data);

    // 2번 방법 AxiosError가 class로 정의 되어 있어 가능
    if (error instanceof AxiosError) {
      console.log(error.response);
    }

    // 3번 방법
    if (axios.isAxiosError(error)) {
      console.log(
        (error.response as AxiosResponse<{ message: string }>)?.data.message
      );
    }
  }
})();
