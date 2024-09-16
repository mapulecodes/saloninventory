<template>
  <div class="container pt-5 content">
    <div class="background-gradient"></div>
    <div class="row pt-5">
      <h2 class="headings heading">Product Details</h2>
    </div>
    <div class="row justify-content-center" v-if="product">
      <div class="col-md-6">
        <div class="card">
          <img 
            :src="product.ImageURL || 'https://via.placeholder.com/150'" 
            class="card-img-top" 
            :alt="product.ProductName || 'Product Image'" 
          />
          <div class="card-body">
            <h5 class="card-title"><b>{{ product.ProductName || 'No Name' }}</b></h5>
            <p class="card-text">Quantity: {{ product.Quantity !== undefined ? product.Quantity : 'N/A' }}</p>
            <p class="card-text">Price: ${{ product.Price !== undefined ? product.Price.toFixed(2) : 'N/A' }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Spinner
  },
  computed: {
    ...mapState(['products']),
    product() {
      const productId = parseInt(this.$route.params.id, 10);
      return this.products.find(p => p.ID === productId) || null;
    }
  },
  mounted() {
    // Fetch products if not already fetched
    if (!this.products.length) {
      this.$store.dispatch('fetchProducts');
    }
  }
};
</script>


<style scoped>
.background-gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #008080, #001F4D, #666e7a, #554671, #3f1d5a); 
  z-index: -2;
}
.container {
  padding: 20px;
}
.headings {
  font-size: 2rem;
  font-weight: bold;
}
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}
.card-img-top {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.card-body {
  padding: 20px;
}
.card-title {
  font-size: 1.5rem;
  font-weight: bold;
}
.card-text {
  font-size: 1.2rem;
  margin-bottom: 10px;
}
</style>
