<template>
  <header class="head-tag">
    <h1>{{ title }}</h1>
    <slot />
  </header>
</template>
<script>
import './style.scss';
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    style: {
      type: String,
      default: '',
    },
  },
};
</script>
