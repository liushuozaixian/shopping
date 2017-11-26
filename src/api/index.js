import axios from 'axios'

export function reqData() {
  return axios.get('/api2/main')
}

export function reqMyClass() {
  return axios.get('/api2/myclass')
}
