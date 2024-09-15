<template>
  <div class="login-body">
    <div class="login-container">
      <h1 class="login-title">Login</h1>
      <form @submit.prevent="loginUser">
        <input
          type="email"
          placeholder="Email"
          v-model="user_email"
          @blur="validateEmail"
          :class="{'input-error': emailError}"
        />
        <span v-if="emailError" class="error">{{ emailError }}</span>

        <input
          type="password"
          placeholder="Password"
          v-model="user_password"
          @blur="validatePassword"
          :class="{'input-error': passwordError}"
        />
        <span v-if="passwordError" class="error">{{ passwordError }}</span>

        <button type="submit" class="btn-text" :disabled="loading">
          <span v-if="loading">Logging in...</span>
          <span v-else>Login</span>
        </button>
      </form>

      <div class="register-link">
        <p>Don't have an account? 
          <button @click="goToRegister" class="btn-register">Register</button>
        </p>
      </div>
      
      <!-- Admin Info Button -->
      <button @click="generateAdminInfoPDF" class="btn-text">Admin Info</button>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  data() {
    return {
      user_email: '',
      user_password: '',
      emailError: '',
      passwordError: '',
      loading: false
    };
  },
  methods: {
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.user_email) {
        this.emailError = "Email is required.";
      } else if (!emailPattern.test(this.user_email)) {
        this.emailError = "Invalid email format.";
      } else {
        this.emailError = "";
      }
    },
    validatePassword() {
      if (!this.user_password) {
        this.passwordError = "Password is required.";
      } else if (this.user_password.length < 6) {
        this.passwordError = "Password must be at least 6 characters.";
      } else {
        this.passwordError = "";
      }
    },
    async loginUser() {
      this.validateEmail();
      this.validatePassword();
      if (this.emailError || this.passwordError) return;

      const adminEmail = 'mapule@gmail.com';
      const adminPassword = 'lifechoices';

      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        if (this.user_email === adminEmail && this.user_password === adminPassword) {
          alert('Login successful!');
          localStorage.setItem('adminLoggedIn', true);
          this.$router.push('/dashboard');
        } else {
          alert('Invalid email or password.');
        }
      }, 1500); // Simulating network request
    },
    goToRegister() {
      this.$router.push('/register');
    },
    generateAdminInfoPDF() {
      const doc = new jsPDF();
      doc.text('Admin Login Information', 14, 16);
      doc.text(`Email: mapule@gmail.com`, 14, 30);
      doc.text(`Password: lifechoices`, 14, 40);
      doc.save('admin-info.pdf');
    }
  }
};
</script>

<style scoped>
.login-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  text-align: center;
}

.login-title {
  font-size: 28px;
  margin-bottom: 20px;
}

input {
  width: 100%;
  margin-bottom: 15px;
  border: none;
  border-bottom: 2px solid #666e7a;
}

.input-error {
  border-bottom-color: rgb(43, 19, 83);
}

.error {
  color: red;
  font-size: 12px;
}

.btn-text, .btn-register {
  background: none;
  border: none;
  color: #554671;
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;
}

.btn-text:hover, .btn-register:hover {
  color: #666e7a;
}

input::placeholder {
  color: #666e7a;
}

.register-link {
  margin-top: 15px;
}

.register-link p {
  color: #000; 
}

@media (max-width: 500px) {
  .login-container {
    width: 90%;
  }
}
</style>
