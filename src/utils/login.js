import cookie from 'js-cookie'

const COOKIE_KEY = 'pangolinjs-visual-review-login'

/**
 * Save login cookie
 */
function save (username, token) {
  cookie.set(COOKIE_KEY, { username, token })
}

/**
 * Read login cookie
 */
function read () {
  return cookie.getJSON(COOKIE_KEY) || {}
}

/**
 * Remove login cookie
 */
function remove () {
  cookie.remove(COOKIE_KEY)
}

export default {
  save,
  read,
  remove
}
