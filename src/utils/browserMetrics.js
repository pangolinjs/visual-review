/**
 * Collect browser metrics and format as markdown
 * @param {Object} options Options
 * @param {String} [options.screenshot] Screenshot URL
 * @returns {String} Browser metrics
 */
export default function (options = {}) {
  const screenshot = options.screenshot
    ? `

## Screenshot

![Screenshot](${options.screenshot})`
    : ''

  return screenshot + `

## Browser metrics

### Meta data

\`\`\`yaml
URL: ${window.location.href}
Platform: ${navigator.platform}
User agent: ${navigator.userAgent}
Cookies: ${navigator.cookieEnabled}
Language: ${navigator.language}
Languages:
  - ${navigator.languages.join('\n  - ')}
\`\`\`

### Screen

\`\`\`yaml
Width:  ${window.screen.width}
Height: ${window.screen.height}
Ratio:  ${window.devicePixelRatio}
\`\`\`

### Viewport

\`\`\`yaml
Width:  ${window.innerWidth}
Height: ${window.innerHeight}
\`\`\``
}
