import baseService from '../baseService'

const signIn = async () => {
  return baseService.postRequest('/signIn')
}

const signUp = async () => {
  return baseService.postRequest('/signUp')
}

const getUsers = async () => {
  return baseService.getRequest('/')
}

export default { signIn, signUp, getUsers }