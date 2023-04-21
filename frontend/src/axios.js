// axios
import axios from 'axios'
import { getAuthToken } from '@/utils/auth'

const baseURL = process.env.VUE_APP_BACKEND_URL

const api = axios.create({
  baseURL: baseURL
})

api.interceptors.request.use((response) => {
  const token = getAuthToken()
  if (token) {
    response.headers.Authorization = `Bearer ${token}`
  } else {
    delete response.headers.Authorization
  }
  return response
})

export default api