<template>
  <div class="header"></div>
</template>

<script>
export default {
  mounted() {
    console.log("Header ", this.$store.state.header);
  },
  computed: {
    Header() {
      return this.$store.state.header;
    },
  },
};
</script>

<style scoped>
.header {
  height: 68px;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 5px 4px rgb(0 0 0 / 30%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  background-color: #60a5fa!important;
  border-color: #60a5fa !important;
}
</style>
