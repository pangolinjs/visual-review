<script>
import Button from './Button.svelte'
import Icon from './Icon.svelte'
import Title from './Title.svelte'

import { route, response } from '../store'

function newIssue () {
  route.set('issue')
}
</script>

<Title>Success</Title>
<p>Thanks for the feedback. Your issue has been created at <a href={$response.url} target="_blank">{$response.url}</a>.</p>

<Button on:click={newIssue}>
  <Icon type="add" left /> New issue
</Button>
