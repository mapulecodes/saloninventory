<template>
    <div>
      <!-- Customer Dropdown -->
      <div>
        <label for="customer-select">Customer:</label>
        <select v-model="selectedCustomer" id="customer-select">
          <option v-for="customer in allCustomers" :key="customer.ID" :value="customer.ID">
            {{ customer.CustomerName }}
          </option>
        </select>
      </div>
  
      <!-- Add Product Button -->
      <button @click="showAddProductPopup">Add Product</button>
      
      <!-- Add Product Popup -->
      <div v-if="showPopup" class="popup">
        <h3>Select Product</h3>
        <ul>
          <li v-for="product in products" :key="product.ID">
            <input type="checkbox" :id="product.ID" :value="product.ID" v-model="selectedProducts" />
            <label :for="product.ID">{{ product.ProductName }}</label>
          </li>
        </ul>
        <button @click="addProducts">Add Selected Products</button>
        <button @click="hideAddProductPopup">Cancel</button>
      </div>
  
      <!-- Products Table -->
      <table class="products-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in displayedProducts" :key="product.ID">
            <td>{{ product.ProductName }}</td>
            <td>{{ product.Quantity }}</td>
            <td>${{ product.Price.toFixed(2) }}</td>
            <td>
              <button @click="deleteProduct(product.ID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Import axios
  import { mapGetters, mapActions, mapMutations } from 'vuex';
  import { toast } from 'vue3-toastify'; // Import toast
  import 'vue3-toastify/dist/index.css'; // Import toast styles
  
  const apiURL = "https://saloninventory.onrender.com"; // Define apiURL
  
  export default {
    data() {
      return {
        showPopup: false,
        selectedProducts: [], // Array to hold selected product IDs
        selectedCustomer: null // Currently selected customer
      };
    },
    computed: {
      ...mapGetters(['allCustomers', 'allProducts']),
      displayedProducts() {
        return this.$store.state.products || [];
      },
    },
    methods: {
      ...mapActions(['fetchCustomers', 'fetchProducts']),
      ...mapMutations(['setSelectedCustomer']),
      showAddProductPopup() {
        this.showPopup = true;
      },
      hideAddProductPopup() {
        this.showPopup = false;
      },
      async addProducts() {
        try {
          await axios.post(`${apiURL}/add-products`, {
            customerId: this.selectedCustomer,
            productIds: this.selectedProducts,
          });
          toast.success('Products added successfully!');
          this.hideAddProductPopup();
        } catch (error) {
          console.error('Error adding products:', error);
          toast.error('Failed to add products.');
        }
      },
      async deleteProduct(productId) {
        try {
          await axios.delete(`${apiURL}/products/${productId}`);
          this.$store.dispatch('fetchProducts'); // Refresh product list
          toast.success('Product deleted successfully!');
        } catch (error) {
          console.error('Error deleting product:', error);
          toast.error('Failed to delete product.');
        }
      },
    },
    mounted() {
      this.fetchCustomers();
      this.fetchProducts();
    },
  };
  </script>
  
  <style scoped>
  .products-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .products-table th,
  .products-table td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  
  .products-table th {
    background-color: #f2f2f2;
  }
  
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .popup ul {
    list-style-type: none;
    padding: 0;
  }
  
  .popup li {
    margin: 5px 0;
  }
  </style>
  
  