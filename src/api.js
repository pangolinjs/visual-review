import { get } from 'svelte/store'
import { title, comment } from './store'
import browserMetrics from './utils/browserMetrics'
import config from './config'
import headers from './utils/headers'
import ky from 'ky'

const api = ky.create({
  prefixUrl: config.backendUrl,
  hooks: {
    beforeRequest: [headers]
  }
})

function createIssue () {
  if (config.backendType === 'github') {
    const json = {
      title: get(title),
      body: get(comment) + browserMetrics()
    }

    return api.post(`repos/${config.repository}/issues`, { json })
  }

  if (config.backendType === 'gitlab') {
    const json = {
      title: get(title),
      description: get(comment) + browserMetrics()
    }

    return api.post(`projects/${encodeURIComponent(config.repository)}/issues`, { json })
  }
}

export default {
  createIssue
}
