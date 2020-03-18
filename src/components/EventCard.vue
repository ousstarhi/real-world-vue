<template>
  <div>
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
    <span>{{ event.attendees.length }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: 'Beach Cleanup',
        date: 'Wed Mar 18, 2020',
        time: '8:00',
        attendees: [
          {
            id: 'abc123',
            name: 'Oussama Tarhi',
          },
          {
            id: 'def456',
            name: 'Saad Tarhi',
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
h4 {
  color: green;
}
</style>
