export const exps = ['1h', '1d', '7d']

// Use Vite environment variable if provided, otherwise fallback to localhost
export const api = (import.meta.env.VITE_API_URL as string) || 'http://localhost:3000/v1/pastebin'
