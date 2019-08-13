<script>
export let type = 'text'
export let id
export let label
export let value = undefined
export let checked = false
export let rows = undefined
export let monospace = false
export let required = false
export let autofocus = false

function handleAutofocus (node) {
  if (autofocus) {
    node.focus()
  }
}
</script>

<style>
.vr-input {
  margin-bottom: 1rem;
}

.vr-input__label {
  display: inline-block;
  margin-bottom: 0.25rem;
  cursor: pointer;
}

.vr-input__input {
  box-sizing: border-box;

  display: block;
  width: 100%;
  padding: 0.5rem;

  font-size: 1rem;
  font-family: inherit;
  line-height: inherit;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.vr-input__input.is-monospace {
  font-family: 'Courier New', Courier, monospace;
}

.vr-input__checkbox {
  cursor: pointer;
}
</style>

<div class="vr-input">
  <label
    class="vr-input__label"
    for={id}
  >
    {#if type === 'checkbox'}
      <input
        class="vr-input__checkbox"
        type="checkbox"
        bind:checked
        use:handleAutofocus
        {id}
        {required}
      >
    {/if}
    {label}
  </label>

  {#if type === 'text'}
    <input
      class="vr-input__input"
      type="text"
      bind:value
      use:handleAutofocus
      {id}
      {required}
    />
  {:else if type === 'password'}
    <input
      class="vr-input__input"
      type="password"
      bind:value
      use:handleAutofocus
      {id}
      {required}
    />
  {:else if type === 'textarea'}
    <textarea
      class="vr-input__input"
      class:is-monospace={monospace}
      bind:value
      use:handleAutofocus
      {id}
      {rows}
      {required}
    />
  {/if}
</div>
