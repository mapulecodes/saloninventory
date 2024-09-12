<template>
  <div class="schedule-container">
    <!-- Button to Add User (Employee) -->
    <button @click="showAddUserForm = true" class="add-button">Add Employee</button>

    <!-- Pop-up Form for Adding User -->
    <div v-if="showAddUserForm" class="popup-form">
      <div class="form-container">
        <h3>Add Employee Shift</h3>
        <form @submit.prevent="addUser">
          <!-- Time Selection -->
          <div class="form-group">
            <label for="time">Set Time:</label>
            <select v-model="newShift.time" required>
              <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
            </select>
          </div>

          <!-- Date Selection -->
          <div class="form-group">
            <label for="date">Set Date:</label>
            <input type="date" v-model="newShift.date" required />
          </div>

          <!-- Employee (User) Selection -->
          <div class="form-group">
            <label for="employee">Select Employee:</label>
            <select v-model="newShift.employeeId" required>
              <option v-for="user in users" :key="user.ID" :value="user.ID">{{ user.UserName }}</option>
            </select>
          </div>

          <!-- Form Buttons -->
          <button type="submit">Add Shift</button>
          <button type="button" @click="showAddUserForm = false">Cancel</button>
        </form>
      </div>
    </div>

    <!-- Calendar Section -->
    <div class="calendar">
      <h2>Shift Schedule for {{ currentMonth }}</h2>
      <div class="calendar-grid">
        <div v-for="date in dates" :key="date" class="calendar-block">
          <p>{{ date }}</p>
          <!-- Display Shifts on the Calendar -->
          <div v-for="shift in getShiftsForDate(date)" :key="shift.employeeId">
            {{ shift.employeeName }} ({{ shift.time }})
          </div>
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
      dates: this.getMonthDates(),  
      showAddUserForm: false,     
      newShift: {                   
        time: '',
        date: '',
        employeeId: null,
      },
      shifts: [],                   
      timeOptions: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'], 
    };
  },
  computed: {
    ...mapState(['users']),
    ...mapGetters(['allUsers']),
    currentMonth() {
      const now = new Date();
      return now.toLocaleString('default', { month: 'long', year: 'numeric' });
    },
  },
  methods: {
    ...mapActions(['fetchUsers']),

   
    getMonthDates() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      return Array.from({ length: daysInMonth }, (_, i) => i + 1);
    },

    // Get shifts for a specific date
    getShiftsForDate(date) {
      return this.shifts.filter(shift => new Date(shift.date).getDate() === date);
    },

    // Handle adding a new shift
    addUser() {
      const employee = this.users.find(user => user.ID === this.newShift.employeeId);
      if (employee) {
        this.shifts.push({
          ...this.newShift,
          employeeName: employee.UserName,
        });
        this.showAddUserForm = false; // Close the form after adding
        this.newShift = { time: '', date: '', employeeId: null }; // Reset the form
      }
    },
  },
  mounted() {
   
    this.fetchUsers();
  }
};
</script>

<style scoped>
.schedule-container {
  padding: 20px;
}

.add-button {
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.popup-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  z-index: 1000;
}

.form-container {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}



.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr); 
  gap: 20px; 
}

.calendar-block {
  background-color: white; 
  color: black; 
  padding: 15px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  border: 1px solid #ddd; 
}
</style>
