<template>
  <div>
    <form>
      <input type="text" :placeholder="placeholder" />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
