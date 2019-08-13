import { writable, get } from 'svelte/store'
import login from './utils/login'

// Global
export const open = writable(false)
export const route = writable('issue')

// Issue
export const title = writable('')
export const comment = writable('')

// Login
const savedLogin = login.read()
export const username = writable(savedLogin.username || '')
export const token = writable(savedLogin.token || '')
export const rememberMe = writable(!!savedLogin.token)

// Success
export const response = writable({})

username.subscribe(() => {
  if (get(rememberMe)) {
    login.save(get(username), get(token))
  }
})

token.subscribe(() => {
  if (get(rememberMe)) {
    login.save(get(username), get(token))
  }
})

rememberMe.subscribe(remember => {
  if (remember) {
    login.save(get(username), get(token))
  } else {
    login.remove()
  }
})
