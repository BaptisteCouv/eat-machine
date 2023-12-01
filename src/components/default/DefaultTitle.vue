<template>
  <div class="default-title my-2">
    <span class="default-title--title">{{ title }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "DefaultTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.default-title {
  .default-title--title {
    color: #29252c;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
