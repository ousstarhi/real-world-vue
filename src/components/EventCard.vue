<template>
  <div>
    <router-link
      class="event-link"
      v-for="event in events"
      :key="event.id"
      :to="{ name: 'Show', params: { id: event.id, title: event.title } }"
    >
      <div class="event-card -shadow">
        <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
        <h4 class="title">{{ event.title }}</h4>
        <BaseIcon name="users" />
        <span>{{ event.attendees.length }} attending</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
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
        {
          id: 2,
          title: 'Park Cleanup',
          date: 'Thu Mar 19, 2020',
          time: '16:00',
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
      ],
    };
  },
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
