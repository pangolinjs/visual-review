/* globals html2canvas */

const config = {
  foreignObjectRendering: true
}

/**
 * Take a screenshot of the body
 */
export default function () {
  return html2canvas(document.body, config)
}
