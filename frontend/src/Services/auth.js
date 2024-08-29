import api from './index'
import {jwtDecode} from "jwt-decode";

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

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No se encontró el token");
    return null;
  }

  try {
    const { data } = await api.get('/Dev/', {
      headers: { Authorization: token }
    });
    return data;
  } catch (error) {
    console.error("Error al obtener el perfil:", error);
    return null;
  }
}
