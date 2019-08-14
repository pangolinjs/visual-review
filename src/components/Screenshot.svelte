<script>
export let src = undefined
</script>

<style>
.vr-screenshot {
  padding-bottom: 1em;
}

.vr-screenshot__image {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
</style>

<div class="vr-screenshot">
  <img
    class="vr-screenshot__image"
    alt="Screenshot"
    {src}
  >
</div>
