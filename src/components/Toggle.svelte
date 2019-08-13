<script>
import Icon from './Icon.svelte'
import Button from './Button.svelte'

import { open } from '../store'

function toggleOpen () {
  open.update(value => !value)
}
</script>

<style>
.vr-toggle {
  position: fixed;
  bottom: 1em;
  right: 1em;
  z-index: 1001;
}
</style>

<span class="vr-toggle">
  <Button on:click={toggleOpen}>
    <Icon type={$open ? 'close' : 'feedback'} size="1.5" />
  </Button>
</span>
