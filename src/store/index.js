import { createStore } from "vuex";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const apiURL = "https://saloninventory.onrender.com";

export default createStore({
  state: {
    products: null,
    users: null,
    customers: null,  // Add customers state
    currentUser: null,
    product: null,
    isLoading: false,
  },
  mutations: {
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setUsers(state, value) {
      state.users = value;
    },
    setCustomers(state, value) {  // Mutation to update customers state
      state.customers = value;
    },
    setCurrentUser(state, value) {
      state.currentUser = value;
    },
    setLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit("setLoading", true);
      try {
        const { data: { results } } = await axios.get(`${apiURL}/products`);
        commit("setProducts", results);
        toast.success("Products fetched successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch products.");
      } finally {
        commit("setLoading", false);
      }
    },

    async fetchUsers({ commit }) {
      commit("setLoading", true);
      try {
        const { data: { results } } = await axios.get(`${apiURL}/users`);
        commit("setUsers", results);
        toast.success("Users fetched successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch users.");
      } finally {
        commit("setLoading", false);
      }
    },

    async fetchCustomers({ commit }) {  // Action to fetch customers
      commit("setLoading", true);
      try {
        const { data: { results } } = await axios.get(`${apiURL}/customers`);
        commit("setCustomers", results);
        toast.success("Customers fetched successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch customers.");
      } finally {
        commit("setLoading", false);
      }
    },

    async login({ commit }, credentials) {
      try {
        const { data } = await axios.post(`${apiURL}/login`, credentials);
        commit("setCurrentUser", data);
        toast.success("Login successful!");
      } catch (error) {
        console.error(error);
        toast.error("Login failed. Please check your credentials.");
      }
    },

    // Additional actions for adding, deleting users/products...

  },
  getters: {
    recentProducts: (state) => {
      if (Array.isArray(state.products)) {
        return state.products.slice(0, 5); // Return the first 5 products
      }
      return []; // Return an empty array if products is not an array
    },
    allUsers: (state) => {
      return Array.isArray(state.users) ? state.users : [];
    },
    allCustomers: (state) => {  // Getter to access customers
      return Array.isArray(state.customers) ? state.customers : [];
    },
    currentProduct: (state) => {
      return state.product;
    },
    currentUser: (state) => {
      return state.currentUser;
    },
    isLoading: (state) => state.isLoading,
  },
});
