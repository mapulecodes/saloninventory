<template>
  <div class="schedule-container">
    <!-- Top Section: Booking Results (Matches employees with customers) -->
    <div class="booking-results">
      <h2>Booking Results</h2>
      <!-- Check if users and customers are not null and have data -->
      <div v-if="users && users.length && customers && customers.length">
        <ul>
          <li v-for="user in users" :key="user.ID">
            {{ user.UserName }} is booked with {{ getCustomerForEmployee(user.ID)?.CustomerName || 'No booking yet' }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p>Loading booking results...</p>
      </div>
    </div>

    <!-- Calendar Section -->
    <div class="calendar">
      <h2>Shift Schedule for {{ currentMonth }}</h2>
      <div class="calendar-grid">
        <div v-for="date in dates" :key="date" class="calendar-block">
          <p>{{ date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'ScheduleView',
  data() {
    return {
      dates: this.getMonthDates(),  // Generate dates for the current month
    };
  },
  computed: {
    ...mapState(['users', 'customers']),
    ...mapGetters(['allUsers', 'allCustomers']),
    currentMonth() {
      const now = new Date();
      return now.toLocaleString('default', { month: 'long', year: 'numeric' });
    },
  },
  methods: {
    ...mapActions(['fetchUsers', 'fetchCustomers']),

    // Generate all the dates for the current month
    getMonthDates() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      return Array.from({ length: daysInMonth }, (_, i) => i + 1);
    },

    // Get a customer for the given employee (based on user ID)
    getCustomerForEmployee(userId) {
      return this.customers.find(customer => customer.UserID === userId) || null;
    }
  },
  mounted() {
    // Fetch users (employees) and customers from Vuex
    this.fetchUsers();
    this.fetchCustomers();
  }
};
</script>

<style scoped>
.schedule-container {
  padding: 20px;
}

.booking-results {
  margin-bottom: 30px;
}

.calendar {
  margin-top: 20px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);  /* 7 days a week */
  gap: 10px;
}

.calendar-block {
  background-color: #f0f0f0;
  padding: 15px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
