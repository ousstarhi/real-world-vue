<template>
  <div>
    <h1>Event Listing</h1>
    <router-link :to="{ name: 'Show', params: { id: '1' } }"
      >Show event #1</router-link
    >
    |
    <router-link :to="{ name: 'Show', params: { id: '2' } }"
      >Show event #2</router-link
    >
  </div>
</template>
