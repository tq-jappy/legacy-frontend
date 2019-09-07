<template>
  <span id="todoEmpty" v-show="visible">タスクがありません</span>
</template>

<script>
import EventBus, { UPDATE_TODO_COUNT } from "./EventBus";

export default {
  props: {
    visible: { type: Boolean, default: false }
  }
};
</script>

<style scoped>
div {
  border-radius: 5px;
  border: 1px dashed gray;
  margin: 20px 0px;
  padding: 20px;
  text-align: center;
  width: 400px;
}
</style>