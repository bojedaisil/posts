import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

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
  protected async get<M>(url: string, params: any): Promise<M> {
    const responce: AxiosResponse = await this.client.get(url, {
      params: params,
    });
    return responce.data;
  }
}

export default HttpRepository;
