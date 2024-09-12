<template>
  <div class="login-body">
    <div class="login-container">
      <h1 class="login-title">Login</h1>
      <form @submit.prevent="loginUser">
        <input type="email" placeholder="Email" v-model="user_email" />
        <input type="password" placeholder="Password" v-model="user_password" />
        <button type="submit" class="btn-text">Login</button>
      </form>

      <div class="register-link">
        <p>Don't have an account? 
          <button @click="goToRegister" class="btn-register">Register</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_email: '',
      user_password: ''
    };
  },
  methods: {
    async loginUser() {
      const userData = {
        email: this.user_email,
        password: this.user_password
      };

      try {
        // Send user data to the backend (adjust the URL to match your API)
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });

        const result = await response.json();

        if (response.ok) {
          // On successful login, store token or user data and redirect to the dashboard
          localStorage.setItem('token', result.token); // Assuming token is returned from the API
          this.$router.push('/dashboard');
        } else {
          // Handle invalid login credentials
          alert(result.message || 'Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login');
      }
    },
    goToRegister() {
      this.$router.push('/register'); 
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
  background: linear-gradient(to right, #001f4d, #666e7a, #3f1d5a); 
}

.login-container {
  width: 400px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  text-align: center;
  margin-top: -50px;
}

.login-title {
  font-size: 28px;
  color: #000;
  margin-bottom: 20px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  margin-bottom: 15px;
  border: none;
  border-bottom: 2px solid #666e7a;
}

input:focus {
  border-bottom: 2px solid #554671;
  outline: none;
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
</style>
