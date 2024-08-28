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
  const { data } = await api.get('/auth/role')
  return data
}

export const getProfile = async (id) =>{
  const token = localStorage.getItem("token")
  console.log("ID-GETPROFILE AUTH.JS", id);
  
  const { data } = await api.get(`/Dev/${id}`, {
    headers: { Authorization: token },
  })
  return data
}
