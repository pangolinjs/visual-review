import { get } from 'svelte/store'
import config from '../config'
import { username, token } from '../store'

export default function (options) {
  if (config.backendType === 'github') {
    options.headers.set('accept', 'application/vnd.github.v3+json')
    options.headers.set('authorization', 'Basic ' + window.btoa(`${get(username)}:${get(token)}`))
  }

  if (config.backendType === 'gitlab') {
    options.headers.set('authorization', 'Bearer ' + get(token))
  }
}
