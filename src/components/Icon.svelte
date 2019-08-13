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
  'arrow-left': mdiArrowLeftCircle,
  'arrow-right': mdiArrowRightCircle,
  close: mdiCloseCircle,
  feedback: mdiMessageAlert
}

export let type
export let size = 1
export let left = false
export let right = false
</script>

<style>
.vr-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: middle;

  fill: currentColor;
}

.vr-icon.is-left {
  margin-left: -0.125em;
  margin-right: 0.25em;
}

.vr-icon.is-right {
  margin-left: 0.25em;
  margin-right: -0.125em;
}
</style>

<svg
  class="vr-icon"
  class:is-left={left}
  class:is-right={right}
  style="font-size: {size}em"
  viewBox="0 0 24 24"
><path d={types[type]} /></svg>
