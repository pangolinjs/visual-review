import cookie from 'js-cookie'
import { writable, get } from 'svelte/store'

const COOKIE_LOGIN = 'pangolinjs-visual-review-login'
const savedLogin = cookie.getJSON(COOKIE_LOGIN)

// Global
export const open = writable(false)
export const route = writable('issue')

// Issue
export const title = writable('')
export const comment = writable('')

// Login
export const username = writable((savedLogin && savedLogin.username) || '')
export const token = writable((savedLogin && savedLogin.token) || '')
export const rememberMe = writable(!!savedLogin)

// Success
export const response = writable({})

/**
 * Handle login -> cookie process
 */

function saveLogin () {
  cookie.set(COOKIE_LOGIN, {
    username: get(username),
    token: get(token)
  })
}

function removeLogin () {
  cookie.remove(COOKIE_LOGIN)
}

username.subscribe(() => {
  if (get(rememberMe)) {
    saveLogin()
  }
})

token.subscribe(() => {
  if (get(rememberMe)) {
    saveLogin()
  }
})

rememberMe.subscribe(remember => {
  if (remember) {
    saveLogin()
  } else {
    removeLogin()
  }
})
