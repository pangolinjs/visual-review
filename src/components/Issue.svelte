<script>
import Button from './Button.svelte'
import Footer from './Footer.svelte'
import Icon from './Icon.svelte'
import Input from './Input.svelte'
import Title from './Title.svelte'

import { route, title, comment } from '../store'

function handleSubmit () {
  route.set('login')
}
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

  <p>We will attach general information to the issue like the URL, user agent, and viewport size.</p>

  <Footer justify="flex-end">
    <Button type="submit">
      Continue <Icon type="right" right />
    </Button>
  </Footer>
</form>
