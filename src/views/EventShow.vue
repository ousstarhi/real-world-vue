<template>
  <div>
    <h1>Showing event #{{ id }}</h1>
    <p>The event is about {{ title }}</p>
  </div>
</template>
<script>
export default {
  /* props: ['id'], */
  props: {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
  },
};
</script>
