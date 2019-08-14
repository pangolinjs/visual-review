<script>
import Popup from './components/Popup.svelte'
import Toggle from './components/Toggle.svelte'

import config from './config'
</script>

<style>
.vr-app {
  font-size: 1rem;
  font-family: system-ui, 'Open Sans', 'Helvetica Neue', 'Arial', sans-serif;
  color: rgb(20, 20, 20);
}
</style>

<svelte:head>
  {#if config.backendType === 'gitlab'}
    <script src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.3" async></script>
  {/if}
</svelte:head>

<div class="vr-app" data-html2canvas-ignore>
  <Popup />
  <Toggle />
</div>
