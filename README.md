# <img src="https://cdn.jsdelivr.net/gh/pangolinjs/visual-review/docs/favicon-32x32.png" alt="" width="24"> Pangolin.js Visual Review

## About

_Pangolin.js Visual Review_ is inspired by [GitLab Visual Reviews](https://docs.gitlab.com/ee/ci/review_apps/#visual-reviews-starter). But GitLab’s solution is only available for paid GitLab and I wanted to create something similar which also connects to different backends – currently GitHub and GitLab.

Without further ado: What the heck is _Pangolin.js Visual Review_?

It allows the creation of issues directly from any website. Some browser metrics will be attached to the issue body automatically, for example the URL, user agent, and viewport size. The developers don’t have to run around and collect these information and the issue reporters don’t have to learn browser insides.

Take a look at the [GitHub](https://visual-review.pangolinjs.org/github.html) and [GitLab](https://visual-review.pangolinjs.org/gitlab.html) demos. Search for a little button in the bottom right corner 🙂

## Getting started

Using _Pangolin.js Visual Review_ is as easy as including a script from a CDN in your website:

```html
<script
  data-backend-type="BACKEND_TYPE"
  data-backend-url="BACKEND_URL"
  data-repository="OWNER/NAME"
  id="pangolinjs-visual-review"
  src="http://cdn.jsdelivr.net/npm/@pangolinjs/visual-review"
  defer
></script>
```

### Available backend types

* [GitHub](https://visual-review.pangolinjs.org/github.html)
* [GitLab](https://visual-review.pangolinjs.org/gitlab.html)

## Development

[Pangolin.js Visual Review](https://github.com/pangolinjs/visual-review) is developed by [Fynn Becker](https://fynn.be) and released under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).

Start a dev server with auto-reload:

```bash
npm run dev
```

Build production-ready minified bundle:

```bash
npm run build
```

Lint JavaScript code:

```bash
npm run lint
```
