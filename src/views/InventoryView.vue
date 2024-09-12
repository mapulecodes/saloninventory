<template>
  <div class="inventory-container">
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

    <!-- Main Content -->
    <div class="main-content">
      <h2>Inventory</h2>

      <!-- Search Bar -->
      <div class="search-bar">
        <input 
          type="text" 
          v-model="searchQuery" 
          @input="searchProducts" 
          placeholder="Search for products..." 
        />
        <button @click="searchProducts">Search</button>
      </div>

      <!-- Products Table -->
      <div class="product-table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="filteredProducts.length === 0">
              <td colspan="4">No products found.</td>
            </tr>
            <tr v-for="product in filteredProducts" :key="product.ID">
              <td>
              
                <img 
                  :src="getImageLink(product.ProductName)" 
                  class="media-fluid img-fluid" 
                  alt="Product Image" 
                  width="50" 
                  height="50"
                />
              </td>
              <td>{{ product.ProductName }}</td>
              <td>{{ product.quantity }}</td>
              <td>${{ product.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      searchQuery: '',
      filteredProducts: []
    };
  },
  computed: {
    ...mapState(['products']),
    ...mapGetters(['recentProducts']),
    getUserInitial() {
      return this.$store.getters.currentUser?.name.charAt(0).toUpperCase() || '';
    },
    products() {
      return this.$store.getters.recentProducts || [];
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
    
 
    getImageLink(productName) {
      switch (productName) {
        case 'Shampoo':
          return 'https://mapulecodes.github.io/fridayimages/images/shampoo.png';  
        case 'Conditioner':
          return 'https://mapulecodes.github.io/fridayimages/images/conditioner.png';  
        case 'Hair Dryer':
          return 'https://mapulecodes.github.io/fridayimages/images/hairdryer.png';  
       
        default:
          return 'https://via.placeholder.com/50';  
      }
    },

    searchProducts() {
      if (this.searchQuery.trim()) {
        this.filteredProducts = this.products.filter(product =>
          product.ProductName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.filteredProducts = this.products;
      }
    }
  },
  mounted() {
    this.fetchProducts().then(() => {
      this.filteredProducts = this.products; 
    });
  }
};
</script>

<style scoped>
.inventory-container {
  display: flex;
  flex-direction: column;
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

.main-content {
  margin-top: 60px;
  padding: 20px;
}

.search-bar {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.search-bar input {
  padding: 10px;
  font-size: 16px;
  flex-grow: 1;
}

.search-bar button {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #001f4d;
  color: white;
  border: none;
  cursor: pointer;
}

.product-table table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th, .product-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: black;
}

.product-table th {
  background-color: #001f4d;
  color: white;
}

.product-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
