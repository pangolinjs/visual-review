<script>
export let type = 'button'
</script>

<style>
.vr-button {
  box-sizing: border-box;

  display: inline-flex;
  align-items: center;
  padding: 0.5em;

  font-family: inherit;
  font-size: 1em;
  line-height: inherit;
  color: inherit;

  background: rgb(230, 230, 230);
  border: 1px solid rgba(0, 0, 0, 0.02);
  border-radius: 3px;

  cursor: pointer;
}

.vr-button:hover,
.vr-button:focus {
  background: rgb(210, 210, 210);
  border-color: rgba(0, 0, 0, 0.05);
}
</style>

<button
  class="vr-button"
  on:click
  {type}
><slot /></button>
