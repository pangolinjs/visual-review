<script>
import {
  mdiArrowLeftCircle,
  mdiArrowRightCircle,
  mdiCloseCircle,
  mdiMessageAlert,
  mdiPlusCircle
} from '@mdi/js'

const types = {
  add: mdiPlusCircle,
  close: mdiCloseCircle,
  feedback: mdiMessageAlert,
  left: mdiArrowLeftCircle,
  right: mdiArrowRightCircle
}

export let type
export let size = 1
export let left = false
export let right = false
</script>

<style>
.vr-icon {
  width: 1em;
  height: 1em;

  fill: currentColor;
}

.vr-icon.is-left {
  margin: 0 0.25em 0 -0.125em;
}

.vr-icon.is-right {
  margin: 0 -0.125em 0 0.25em;
}
</style>

<svg
  class="vr-icon"
  class:is-left={left}
  class:is-right={right}
  style="font-size: {size}em"
  viewBox="0 0 24 24"
><path d={types[type]} /></svg>
