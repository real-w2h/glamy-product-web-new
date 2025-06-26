export async function apiRequest(
  method: string,
  url: string,
  data?: unknown,
  options?: RequestInit
): Promise<Response> {
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  };

  if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(url, config);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response;
} 