import { get } from 'svelte/store'

import { username, token } from '../store'
import config from '../config'

/**
 * Set request headers
 * @param {Object} options ky request options
 */
export default function (options) {
  if (config.backendType === 'github') {
    options.headers.set('accept', 'application/vnd.github.v3+json')
    options.headers.set('authorization', 'Basic ' + window.btoa(`${get(username)}:${get(token)}`))
  }

  if (config.backendType === 'gitlab') {
    options.headers.set('authorization', 'Bearer ' + get(token))
  }
}
