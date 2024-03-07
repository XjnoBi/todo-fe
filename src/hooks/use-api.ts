type RequestOptions = {
  method?: string;
  headers?: { [key: string]: string };
  body?: string;
}

const BASE_URL = 'localhost:8081'

const useApiService = () => {
  const request = async <T>(endpoint: string, options: RequestOptions = {}): Promise<T> => {
    const { method = 'GET', headers = {}, body } = options;

    const requestOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    };

    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: T = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  };

  const get = async <T>(endpoint: string): Promise<T> => {
    return request<T>(endpoint);
  };

  const post = async <T>(endpoint: string, body: any): Promise<T> => {
    return request<T>(endpoint, { method: 'POST', body });
  };

  const put = async <T>(endpoint: string, body: any): Promise<T> => {
    return request<T>(endpoint, { method: 'PUT', body });
  };

  const apiDelete = async <T>(endpoint: string, body: any): Promise<T> => {
    return request<T>(endpoint, { method: 'DELETE', body });
  };

  return { delete: apiDelete, get, post, put };
};

export default useApiService;
