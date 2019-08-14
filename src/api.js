import { get } from 'svelte/store'
import ky from 'ky'

import { title, comment, screenshot } from './store'
import browserMetrics from './utils/browserMetrics'
import canvasToBlob from './utils/canvasToBlob'
import config from './config'
import headers from './utils/headers'

const api = ky.create({
  prefixUrl: config.backendUrl,
  hooks: {
    beforeRequest: [headers]
  }
})

async function createIssue () {
  const issue = {
    url: ''
  }

  const canvas = get(screenshot)

  // GitHub
  if (config.backendType === 'github') {
    const url = `repos/${config.repository}/issues`

    const json = {
      title: get(title),
      body: get(comment) + browserMetrics()
    }

    const response = await api.post(url, { json }).json()
    issue.url = response.html_url
  }

  // GitLab
  if (config.backendType === 'gitlab') {
    const url = `projects/${encodeURIComponent(config.repository)}`

    let screenshotURL

    if (canvas) {
      const body = new FormData()
      const blob = await canvasToBlob(canvas, 'image/png')
      body.append('file', blob, 'screenshot.png')

      const response = await api.post(`${url}/uploads`, { body }).json()
      screenshotURL = response.url
    }

    const json = {
      title: get(title),
      description: get(comment) + browserMetrics({ screenshot: screenshotURL })
    }

    const response = await api.post(`${url}/issues`, { json }).json()
    issue.url = response.web_url
  }

  return issue
}

export default {
  createIssue
}
