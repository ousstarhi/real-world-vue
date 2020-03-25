<template>
  <div>
    <h1 class="global-color">Event Listing</h1>
    <EventCard />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';

export default {
  components: {
    EventCard,
  },
};
</script>
