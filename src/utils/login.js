import cookie from 'js-cookie'

const COOKIE_KEY = 'pangolinjs-visual-review-login'

/**
 * Save login cookie
 */
function save (username, token) {
  cookie.set(COOKIE_KEY, { username, token }, { expires: 365 })
}

/**
 * Read login cookie
 */
function read () {
  const content = cookie.get(COOKIE_KEY)
  return content ? JSON.parse(content) : {}
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
