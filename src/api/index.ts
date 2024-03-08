type RequestOptions = {
  method?: string;
  headers?: { [key: string]: string };
  body?: string;
}

const BASE_URL = 'http://localhost:8081'

const request = async <T>(endpoint: string, options: RequestOptions = {}): Promise<T> => {
    const { method = 'GET', headers = {}, body } = options;

    const requestOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      mode: 'cors'
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

  const apiGet = async <T>(endpoint: string): Promise<T> => {
    return request<T>(endpoint);
  };

  const apiPost = async <T>(endpoint: string, body: any): Promise<T> => {
    return request<T>(endpoint, { method: 'POST', body });
  };

  const apiPut = async <T>(endpoint: string, body: any): Promise<T> => {
    return request<T>(endpoint, { method: 'PUT', body });
  };

  const apiDelete = async <T>(endpoint: string, body: any): Promise<T> => {
    return request<T>(endpoint, { method: 'DELETE', body });
  };

  export { apiGet, apiPost, apiPut, apiDelete };