<template>
  <div class="register-body">
    <div class="register-container">
      <h1 class="register-title">Register</h1>
      <form @submit.prevent="registerUser">
        <input type="text" placeholder="Full Name" v-model="user_name" />
        <input type="email" placeholder="Email" v-model="user_email" />
        <input type="password" placeholder="Password" v-model="user_password" />
        <input type="password" placeholder="Confirm Password" v-model="user_confirm_password" />
        <button type="submit" class="btn-text">Register</button>
      </form>

      <!-- Login for existing users -->
      <div class="login-link">
        <span style="color: black">Already a member?</span>
        <router-link to="/login" class="btn-text">Login</router-link>
      </div>

      <!-- Login as Guest Button -->
      <button @click="loginAsGuest" class="btn-guest">Login as Guest</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_name: '',
      user_email: '',
      user_password: '',
      user_confirm_password: ''
    };
  },
  methods: {
    async registerUser() {
      
      if (this.user_password !== this.user_confirm_password) {
        alert('Passwords do not match');
        return;
      }

    
      const userData = {
        name: this.user_name,
        email: this.user_email,
        password: this.user_password
      };

      try {
        
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });

        const result = await response.json();

        if (response.ok) {
          
          this.$router.push('/dashboard');
        } else {
          
          alert(result.message || 'Registration failed');
        }
      } catch (error) {
        alert('An error occurred during registration');
      }
    },
    loginAsGuest() {
      
      localStorage.setItem('isGuest', true); 
      this.$router.push('/dashboard'); 
    }
  }
};
</script>

<style scoped>
.register-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #001f4d, #666e7a, #3f1d5a); 
}

.register-container {
  width: 400px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  text-align: center;
  margin-top: -50px;
}

.register-title {
  font-size: 28px;
  color: #000;
  margin-bottom: 20px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 2px solid #666e7a;
}

input:focus {
  border-bottom: 2px solid #554671;
  outline: none;
}

.btn-text {
  background: none;
  border: none;
  color: #554671;
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;
}

.btn-text:hover {
  color: #666e7a;
}

.btn-guest {
  margin-top: 20px;
  background-color: #f0f0f0;
  border: 1px solid #666e7a;
  padding: 10px 20px;
  font-size: 16px;
  color: #666e7a;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s, color 0.2s;
}

.btn-guest:hover {
  background-color: #666e7a;
  color: #fff;
}

.login-link {
  margin-top: 20px;
}

input::placeholder {
  color: #666e7a;
}
</style>
