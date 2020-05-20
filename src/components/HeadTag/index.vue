<template>
  <header class="head-tag">
    <div class="tabs">
      <router-link
        v-for="k of data"
        :key="k.path"
        :to="k.path||''"
        :class="k.active&&'active'"
      >{{ k.title }}</router-link>
    </div>
    <slot />
  </header>
</template>
<script>
import './style.scss';
export default {
  props: {
    data: {
      required: true,
      type: Array,
    },
  },
};
</script>
