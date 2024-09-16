import { createStore } from "vuex";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const apiURL = "https://saloninventory.onrender.com";

export default createStore({
  state: {
    products: [],
    users: [],
    customers: [],
    currentUser: null,
    isLoading: false,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setCustomers(state, customers) {
      state.customers = customers;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
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
    async fetchCustomers({ commit }) {
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
  },
  getters: {
    recentProducts: (state) => state.products.slice(0, 5),
    allUsers: (state) => state.users,
    allCustomers: (state) => state.customers,
    currentUser: (state) => state.currentUser,
    isLoading: (state) => state.isLoading,
  },
});
