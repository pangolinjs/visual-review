<script>
import Issue from './Issue.svelte'
import Login from './Login.svelte'
import Success from './Success.svelte'

import { cubicInOut } from 'svelte/easing'
import { fly } from 'svelte/transition'

import { open, route } from '../store'

const transitionOptions = { x: 50, duration: 300, easing: cubicInOut }
</script>

<style>
.vr-popup {
  box-sizing: border-box;

  position: fixed;
  width: 30em;
  max-width: calc(100vw - 2em);
  max-height: calc(100vh - 5.25em);
  right: 1em;
  bottom: 4.25em;
  padding: 1em;
  overflow-y: auto;
  z-index: 1000;

  background: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}
</style>


{#if $open}
  {#if $route === 'issue'}
    <section
      class="vr-popup"
      transition:fly={transitionOptions}
    >
      <Issue />
    </section>
  {:else if $route === 'login'}
    <section
      class="vr-popup"
      transition:fly={transitionOptions}
    >
      <Login />
    </section>
  {:else if $route === 'success'}
    <section
      class="vr-popup"
      transition:fly={transitionOptions}
    >
      <Success />
    </section>
  {/if}
{/if}
