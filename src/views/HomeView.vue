<template>
    <div class="landing-section">
      <div class="container text-center text-white">
        <h1 class="display-4">all in one Inventory and booking management system</h1>
        <p class="lead">Manage your inventory, bookings, and clients with ease.</p>
        <router-link to="/register" class="btn btn-light">get started</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LandingSection",
  };
  </script>
  
  <style scoped>
  .landing-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  </style>
  