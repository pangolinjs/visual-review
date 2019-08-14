import { writable, get } from 'svelte/store'
import login from './utils/login'

const savedLogin = login.read()

// Global
export const open = writable(false)
export const route = writable('issue')

// Issue
export const title = writable('')
export const comment = writable('')
export const screenshot = writable(null)

// Login
export const username = writable(savedLogin.username || '')
export const token = writable(savedLogin.token || '')
export const rememberMe = writable(!!savedLogin.token)

// Success
export const response = writable({})

username.subscribe(usernameValue => {
  if (get(rememberMe)) {
    login.save(usernameValue, get(token))
  }
})

token.subscribe(tokenValue => {
  if (get(rememberMe)) {
    login.save(get(username), tokenValue)
  }
})

rememberMe.subscribe(rememberMeValue => {
  if (rememberMeValue) {
    login.save(get(username), get(token))
  } else {
    login.remove()
  }
})
