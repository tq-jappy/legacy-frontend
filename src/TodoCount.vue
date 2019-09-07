<template>
  <span id="todoCount">(全{{count}}件)</span>
</template>

<script>
import EventBus, { UPDATE_TODO_COUNT } from "./EventBus";

export default {
  props: {
    count: { type: Number }
  }
};
</script>

<style scoped>
span {
  font-size: 0.8em;
}
</style>