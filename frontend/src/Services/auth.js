import api from './index'

export const signUp = async (dataSignUp) => {
  const { data } = await api.post('/auth/signup', dataSignUp)
  return data
}

export const login = async (dataLogin) => {
  const  { data }  = await api.post('/auth/login', dataLogin)
  return data
}

export const getRole = async (dataRole) => {
  console.log(dataRole, "estoy en getRole");
  const { data } = await api.get('/auth/role', dataRole)
  return data
}