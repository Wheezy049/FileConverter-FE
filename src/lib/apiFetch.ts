
export const apiFetch = (path: string, options?: RequestInit) => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  return fetch(`${baseURL}${path}`, options);
};
