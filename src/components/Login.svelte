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
    response.set(await api.createIssue())
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
    autofocus={config.backendType === 'gitlab'}
    required
  />

  <Input
    type="checkbox"
    id="vr-remember-me"
    label="Stay logged in"
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
      <Icon type="left" left /> Edit issue
    </Button>
    <Button type="submit">
      Create issue <Icon type="right" right />
    </Button>
  </Footer>
</form>
