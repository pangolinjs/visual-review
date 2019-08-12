<script>
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

export let type = 'button'

function handleClick (event) {
  dispatch('click', event)
}
</script>

<style>
.vr-button {
  box-sizing: border-box;

  display: inline-flex;
  align-items: center;
  padding: 0.5rem;

  font-family: inherit;
  font-size: 1rem;
  line-height: inherit;
  color: inherit;

  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.02);
  border-radius: 3px;

  cursor: pointer;
}

.vr-button:hover,
.vr-button:focus {
  background: rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.05);
}
</style>

<button
  class="vr-button"
  on:click={handleClick}
  {type}
>
  <slot />
</button>
