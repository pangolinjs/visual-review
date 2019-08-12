import { get } from 'svelte/store'
import ky from 'ky'
import config from './config'
import browserMetrics from './utils/browserMetrics'
import requestHeaders from './utils/requestHeaders'
import { title, comment } from './store'

const api = ky.create({
  prefixUrl: config.backendUrl,
  hooks: {
    beforeRequest: [requestHeaders]
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
