const BASE_URL = 'http://localhost:3001/api/v1/'

export async function api(url, options = {}) {
  const baseOptions = {
    method: "POST",
    headers: {
      Authorization : `Bearer ${localStorage.getItem("token")}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      credentials: true
    }
  }

  return await fetch(BASE_URL + url, {...baseOptions, ...options})
}