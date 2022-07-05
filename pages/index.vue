<template>
  <div>
    <HeadTop />
    <TestCovid />
    <Nuxt />
  </div>
</template>

<script>
import HeadTop from "@/components/Navigation/HeadTop";
import TestCovid from './TestCovid.vue';

export default {
  components: { HeadTop, TestCovid },
  name: "IndexPage",
};
</script>

