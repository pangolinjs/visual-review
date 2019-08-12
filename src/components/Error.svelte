<script>
import Title from './Title.svelte'

export let title
export let detail
</script>

<style>
.vr-error {
  margin-bottom: 1rem;
  padding: 1rem;

  color: rgb(255, 255, 255);

  background: rgb(201, 63, 18);
  border-radius: 3px;
}

.vr-error :first-child {
  margin-top: 0;
}

.vr-error :last-child {
  margin-bottom: 0;
}
</style>

<div class="vr-error">
  <Title>{title}</Title>
  <p>{detail}</p>
</div>
