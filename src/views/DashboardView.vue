<template>
  <div class="dashboard-container">
    <!-- Top Navigation Bar -->
    <nav class="top-nav">
      <div class="nav-logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div class="nav-icons">
        <span class="profile-icon">{{ getUserInitial }}</span>
        <i class="fas fa-bell notifications-icon"></i>
      </div>
    </nav>

    <!-- Vertical Navigation Bar -->
    <aside class="side-nav">
      <ul>
        <li>
          <router-link to="/dashboard">
            <i class="fas fa-home"></i> Home
          </router-link>
        </li>
        <li>
          <router-link to="/inventory">
            <i class="fas fa-box"></i> Inventory
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/team">
            <i class="fas fa-users"></i> Team
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/scheduling">
            <i class="fas fa-calendar-alt"></i> Schedule Shifts
          </router-link>
        </li>
      </ul>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Dashboard Home Content -->
      <h2>Welcome to the Dashboard</h2>
      <div class="dashboard-cards">
        <div class="card">
          <h3>Products</h3>
          <div v-if="products.length > 0">
            <div v-for="product in products" :key="product.ID">
              <h4>{{ product.ProductName }}</h4>
              <p>Quantity: {{ product.quantity }}</p>
              <p>Price: ${{ product.price }}</p>
            </div>
          </div>
          <div v-else>
            <p>No products available.</p>
          </div>
        </div>
        <div class="card">
          <h3>Users</h3>
          <div v-if="users.length > 0">
            <div v-for="user in users" :key="user.ID">
              <h4>{{ user.UserName }}</h4>
              <p>Role: {{ user.UserRole }}</p>
              <p>Email: {{ user.UserEmail }}</p>
            </div>
          </div>
          <div v-else>
            <p>No users available.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'DashboardView',
  computed: {
    ...mapState(['products']),
    ...mapGetters(['recentProducts', 'allUsers']),
    products() {
      return this.$store.getters.recentProducts || [];
    },
    users() {
      return this.$store.getters.allUsers || [];
    },
    getUserInitial() {
      return this.$store.getters.currentUser?.name.charAt(0).toUpperCase() || '';
    }
  },
  methods: {
    ...mapActions(['fetchProducts', 'fetchUsers']),
  },
  mounted() {
    this.fetchProducts();
    this.fetchUsers();
  }
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
}

.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #001f4d;
  color: white;
  padding: 0 20px;
  z-index: 1000;
}

.nav-logo img {
  height: 40px;
}

.nav-icons {
  display: flex;
  align-items: center;
}

.profile-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #666e7a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  margin-right: 15px;
}

.notifications-icon {
  font-size: 18px;
}

.side-nav {
  position: fixed;
  top: 60px; /* Adjust based on top-nav height */
  left: 0;
  width: 200px;
  height: calc(100% - 60px); /* Adjust based on top-nav height */
  background-color: #001f4d;
  padding-top: 20px;
}

.side-nav ul {
  list-style-type: none;
  padding: 0;
}

.side-nav li {
  color: white;
}

.side-nav li a {
  display: flex;
  align-items: center;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}

.side-nav li a:hover {
  background-color: #3f1d5a;
}

.main-content {
  margin-top: 60px; /* Adjust based on top-nav height */
  margin-left: 200px; /* Adjust based on side-nav width */
  padding: 20px;
  flex-grow: 1;
}

.dashboard-cards {
  display: flex;
  justify-content: space-between;
}

.card {
  background-color: #f0f0f0;
  width: 45%;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
