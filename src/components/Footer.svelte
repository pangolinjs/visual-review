<script>
export let justify = 'flex-start'
</script>

<style>
.vr-footer {
  display: flex;
}
</style>

<footer
  class="vr-footer"
  style="justify-content: {justify}"
>
  <slot />
</footer>
