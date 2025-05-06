import axios, { type AxiosInstance, type AxiosResponse } from "axios";

class HttpRepository {
  private client: AxiosInstance;
  constructor(baseURL: string, defaultHeaders: { [key: string]: string }) {
    this.client = axios.create({
      baseURL,
      headers: {
        ...defaultHeaders,
        "Content-Type": "application/json",
      },
      validateStatus: (status) => status >= 200 && status < 300,
    });
  }
  protected async get<M>(url: string): Promise<M> {
    const responce: AxiosResponse = await this.client.get(url);
    return responce.data;
  }
}

export default HttpRepository;
export * from "./post/index.repositories";
