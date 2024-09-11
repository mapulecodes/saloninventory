import { createStore } from "vuex";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const apiURL = "https://saloninventory.onrender.com";

export default createStore({
  state: {
    products: null,
    users: null,
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
        const {
          data: { results },
        } = await axios.get(`${apiURL}/products`);
        commit("setProducts", results);
        toast.success("Products fetched successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch products.");
      } finally {
        commit("setLoading", false);
      }
    },

    async fetchProduct({ commit }, productId) {
      commit("setLoading", true);
      try {
        const { data } = await axios.get(`${apiURL}/products/${productId}`);
        commit("setProduct", data);
        toast.success("Product fetched successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch product.");
      } finally {
        commit("setLoading", false);
      }
    },
    async fetchUsers({ commit }) {
      commit("setLoading", true);
      try {
        const { data: {results} } = await axios.get(`${apiURL}/users`);
        commit("setUsers", results);
        toast.success("Users fetched successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch users.");
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
    async register({ commit }, userData) {
      try {
        const { data } = await axios.post(`${apiURL}/register`, userData);
        commit("setCurrentUser", data);
        toast.success("Registration successful!");
      } catch (error) {
        console.error(error);
        toast.error("Registration failed. Please try again.");
      }
    },
    async addUser({ dispatch }, user) {
      try {
        await axios.post(`${apiURL}/users`, user);
        dispatch("fetchUsers");
        toast.success("User added successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to add user.");
      }
    },
    async deleteUser({ dispatch }, userID) {
      try {
        await axios.delete(`${apiURL}/users/${userID}`);
        dispatch("fetchUsers");
        toast.success("User deleted successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete user.");
      }
    },
    async addProduct({ dispatch }, product) {
      try {
        await axios.post(`${apiURL}/products`, product);
        dispatch("fetchProducts");
        toast.success("Product added successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to add product.");
      }
    },
    async deleteProduct({ dispatch }, prodID) {
      try {
        await axios.delete(`${apiURL}/products/${prodID}`);
        dispatch("fetchProducts");
        toast.success("Product deleted successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete product.");
      }
    },
  },
  // In your store/index.js
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
    currentProduct: (state) => {
      return state.product;
    },
    currentUser: (state) => {
      return state.currentUser;
    },
    isLoading: (state) => state.isLoading,
  },
});
