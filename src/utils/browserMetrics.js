/**
 * Collect browser metrics and format as markdown
 * @returns {String} Browser metrics
 */
export default function () {
  return `

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
