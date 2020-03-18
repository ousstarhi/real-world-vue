<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard />
    <router-link :to="{ name: 'Show', params: { id: '1' } }"
      >Show event #1</router-link
    >
    |
    <router-link :to="{ name: 'Show', params: { id: '2' } }"
      >Show event #2</router-link
    >
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
