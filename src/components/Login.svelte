<script>
import Button from './Button.svelte'
import Error from './Error.svelte'
import Footer from './Footer.svelte'
import Icon from './Icon.svelte'
import Input from './Input.svelte'
import Title from './Title.svelte'

import api from '../api'
import config from '../config'
import { route, username, token, rememberMe, response } from '../store'
import resetStore from '../utils/resetStore'

const requestError = {
  status: 0,
  statusText: '',
  message: ''
}

function editIssue () {
  route.set('issue')
}

async function handleSubmit () {
  try {
    const body = await api.createIssue().json()

    if (config.backendType === 'github') {
      response.set({ url: body.html_url })
    }

    if (config.backendType === 'gitlab') {
      response.set({ url: body.web_url })
    }

    route.set('success')
    resetStore()
  } catch (error) {
    const body = await error.response.json()

    requestError.status = error.response.status
    requestError.statusText = error.response.statusText
    requestError.message = 'No error message.'

    if (config.backendType === 'github') {
      requestError.message = body.message
    }

    if (config.backendType === 'gitlab') {
      requestError.message = body.error_description
    }
  }
}
</script>

<form on:submit|preventDefault={handleSubmit}>
  <Title>Login</Title>

  {#if config.backendType === 'github'}
    <Input
      type="text"
      id="vr-username"
      label="Username"
      bind:value={$username}
      required
      autofocus
    />
  {/if}

  <Input
    type="password"
    id="vr-token"
    label="Token"
    bind:value={$token}
    required
  />

  <Input
    type="checkbox"
    id="vr-remember-me"
    label="Remember me"
    bind:checked={$rememberMe}
  />

  {#if requestError.status}
    <Error
      title="{requestError.status} {requestError.statusText}"
      detail={requestError.message}
    />
  {/if}

  <Footer justify="space-between">
    <Button on:click={editIssue}>
      <Icon type="arrow-left" left /> Edit issue
    </Button>
    <Button type="submit">
      Login and create issue <Icon type="arrow-right" right />
    </Button>
  </Footer>
</form>
