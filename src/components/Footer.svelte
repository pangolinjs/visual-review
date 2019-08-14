<script>
export let justify = 'flex-start'
</script>

<style>
.vr-footer {
  display: flex;
  margin-top: 1em;
}
</style>

<footer
  class="vr-footer"
  style="justify-content: {justify}"
>
  <slot />
</footer>
