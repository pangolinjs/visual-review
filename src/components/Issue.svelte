<script>
import Button from './Button.svelte'
import Footer from './Footer.svelte'
import Icon from './Icon.svelte'
import Input from './Input.svelte'
import Screenshot from './Screenshot.svelte'
import Title from './Title.svelte'

import { cubicInOut } from 'svelte/easing'
import { get } from 'svelte/store'
import { onMount } from 'svelte'
import { slide } from 'svelte/transition'

import { route, title, comment, screenshot } from '../store'
import config from '../config'
import takeScreenshot from '../utils/takeScreenshot'

let screenshotPreview

function mountPreview (canvas) {
  screenshotPreview = canvas.toDataURL('image/png')
}

function unmountPreview () {
  screenshotPreview = null
}

async function handleScreenshot (event) {
  if (event.target.checked) {
    const canvas = await takeScreenshot()
    screenshot.set(canvas)
    mountPreview(canvas)
  } else {
    screenshot.set(null)
    unmountPreview()
  }
}

function handleSubmit () {
  route.set('login')
}

onMount(() => {
  const canvas = get(screenshot)

  if (canvas) {
    mountPreview(canvas)
  }
})
</script>

<form on:submit|preventDefault={handleSubmit}>
  <Title>Issue</Title>

  <Input
    id="vr-title"
    label="Title"
    bind:value={$title}
    required
    autofocus
  />

  <Input
    type="textarea"
    id="vr-comment"
    label="Comment"
    bind:value={$comment}
    rows="8"
    monospace
    required
  />

  {#if config.backendType === 'gitlab'}
    <Input
      type="checkbox"
      id="vr-screenshot"
      label="Include screenshot"
      on:change={handleScreenshot}
      checked={!!$screenshot}
    />

    {#if screenshotPreview}
      <div transition:slide={{ easing: cubicInOut }}>
        <Screenshot src={screenshotPreview} />
      </div>
    {/if}
  {/if}

  <p>We will attach general information to the issue like the URL, user agent, and viewport size.</p>

  <Footer justify="flex-end">
    <Button type="submit">
      Continue <Icon type="right" right />
    </Button>
  </Footer>
</form>
