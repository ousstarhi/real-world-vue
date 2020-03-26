<template>
  <div class="media-box">
    <div class="avatar">
      <img :src="src" alt="avatar" />
    </div>
    <div>
      <h4>
        <slot name="heading"></slot>
      </h4>
      <p>
        <slot name="paragraph"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
  },
};
</script>

<style scoped>
.media-box {
  width: 70%;
  display: flex;
  border: solid green 1px;
  border-radius: 20px;
  justify-content: space-evenly;
  align-items: center;
}
img {
  border-radius: 50%;
  border: black 0.5px solid;
  width: 50px;
  height: 50px;
}

h4 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
