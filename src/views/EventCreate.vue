<template>
  <div>
    <h1>Create Event</h1>
    <MediaBox :src="logo">
      <span slot="heading">Oussama Tarhi</span>
      <span slot="paragraph">These are my infos</span>
    </MediaBox>
    <MediaBox :src="logo">
      <span slot="heading">Oussama Tarhi V2</span>
      <span slot="paragraph">These are my infos V2</span>
    </MediaBox>
  </div>
</template>
<script>
import MediaBox from '@/components/MediaBox.vue';
import logo from '../assets/logo.png';

export default {
  components: {
    MediaBox,
  },
  data() {
    return {
      logo: logo,
    };
  },
};
</script>
