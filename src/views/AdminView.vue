<template>
  <div class="admin-container">
    <!-- Customer Dropdown -->
    <div class="dropdown">
      <label for="customer-select">Customer:</label>
      <select v-model="selectedCustomer" id="customer-select">
        <option v-for="customer in allCustomers" :key="customer.ID" :value="customer.ID">
          {{ customer.CustomerName }}
        </option>
      </select>
    </div>

    <!--  Product Dropdown -->
    <div class="dropdown">
      <label for="product-select">Select Product:</label>
      <select v-model="selectedProduct" id="product-select">
        <option v-for="product in products" :key="product.ID" :value="product">
          {{ product.ProductName }} - ${{ product.Price.toFixed(2) }}
        </option>
      </select>
    </div>

    <!--  Product Button -->
    <button @click="addSelectedProduct" class="btn">Add Product</button>

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
        <tr v-for="product in addedProducts" :key="product.ID">
          <td>{{ product.ProductName }}</td>
          <td>{{ product.Quantity }}</td>
          <td>${{ product.Price.toFixed(2) }}</td>
          <td>
            <button @click="deleteProduct(product.ID)" class="btn-delete">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Download Invoice -->
    <button @click="generateInvoice" class="btn">Download Invoice</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { toast } from 'vue3-toastify'; 
import 'vue3-toastify/dist/index.css'; 

export default {
  data() {
    return {
      selectedProduct: null,
      selectedCustomer: null,
      addedProducts: [],
      
      products: [
        { ID: 1, ProductName: 'Conditioner', Quantity: 1, Price: 14.99 },
        { ID: 2, ProductName: 'Hair Serum', Quantity: 1, Price: 19.99 },
        { ID: 3, ProductName: 'Hair Spray', Quantity: 1, Price: 9.99 },
        { ID: 4, ProductName: 'Hair Dye', Quantity: 1, Price: 15.49 },
        { ID: 5, ProductName: 'Nail Polish', Quantity: 1, Price: 7.99 }
      ]
    };
  },
  computed: {
    ...mapGetters(['allCustomers']),
  },
  methods: {
    ...mapActions(['fetchCustomers']),
    addSelectedProduct() {
      if (this.selectedProduct) {
        const existingProduct = this.addedProducts.find(p => p.ID === this.selectedProduct.ID);

        if (existingProduct) {
          existingProduct.Quantity += 1; // Increment quantity if the product is already added
          toast.success('Product quantity updated!');
        } else {
          this.addedProducts.push({ ...this.selectedProduct, Quantity: 1 });
          toast.success('Product added successfully!');
        }
        this.selectedProduct = null;
      } else {
        toast.error('Please select a product.');
      }
    },
    deleteProduct(productId) {
      this.addedProducts = this.addedProducts.filter(product => product.ID !== productId);
      toast.success('Product deleted successfully!');
    },
    generateInvoice() {
      if (!this.selectedCustomer || this.addedProducts.length === 0) {
        toast.error('Please select a customer and add products.');
        return;
      }

      const doc = new jsPDF();
      const customer = this.allCustomers.find(c => c.ID === this.selectedCustomer);

      doc.text('Invoice', 14, 16);
      doc.text(`Customer: ${customer.CustomerName}`, 14, 30);

      const tableData = this.addedProducts.map(product => [
        product.ProductName,
        product.Quantity,
        `$${product.Price.toFixed(2)}`,
        `$${(product.Price * product.Quantity).toFixed(2)}`
      ]);

      doc.autoTable({
        startY: 40,
        head: [['Product Name', 'Quantity', 'Price', 'Total']],
        body: tableData,
        margin: { top: 20 }
      });

      const total = tableData.reduce((sum, row) => sum + parseFloat(row[3].substring(1)), 0);
      doc.text(`Total: $${total.toFixed(2)}`, 14, doc.autoTable.previous.finalY + 10);

      doc.save('invoice.pdf');
    }
  },
  mounted() {
    this.fetchCustomers();
  }
};
</script>

<style scoped>
.admin-container {
  padding: 20px;
}

.dropdown {
  margin-bottom: 15px;
}

.dropdown label {
  display: block;
  margin-bottom: 5px;
}

.products-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
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

.btn {
  background-color: #4CAF50; 
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

.btn-delete {
  background-color: #f44336; 
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.8;
}

.btn-delete:hover {
  opacity: 0.8;
}
</style>
