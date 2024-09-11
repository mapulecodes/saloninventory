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
  
        <!-- Products List -->
        <div class="product-list">
          <div v-if="filteredProducts.length">
            <ul>
              <li v-for="product in filteredProducts" :key="product.id">
                {{ product.name }} - {{ product.stock }} in stock
              </li>
            </ul>
          </div>
          <div v-else>
            <p>No products found.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: 'John Doe', 
        },
        searchQuery: '',
        products: [
          // example data...remember to add actual product data.
          { id: 1, name: 'Shampoo', stock: 20 },
          { id: 2, name: 'Conditioner', stock: 15 },
          { id: 3, name: 'Hair Dryer', stock: 5 },
        ],
        filteredProducts: [],
      };
    },
    computed: {
      getUserInitial() {
        return this.user.name.charAt(0).toUpperCase();
      },
    },
    created() {
      this.filteredProducts = this.products; 
    },
    methods: {
      searchProducts() {
        if (this.searchQuery.trim()) {
          this.filteredProducts = this.products.filter(product =>
            product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        } else {
          this.filteredProducts = this.products; 
        }
      },
    },
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
  
  .product-list ul {
    list-style-type: none;
    padding: 0;
  }
  
  .product-list li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  </style>
  