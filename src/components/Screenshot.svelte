<script>
export let src = undefined
</script>

<style>
.vr-screenshot {
  margin-bottom: 1em;
  padding: 0.5em;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.vr-screenshot__image {
  max-width: 100%;
  height: auto;
}
</style>

<div class="vr-screenshot">
  <img
    class="vr-screenshot__image"
    alt="Screenshot"
    {src}
  >
</div>
