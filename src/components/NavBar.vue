<template>
    <nav class="navbar navbar-expand-lg gradient-navbar sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="" alt="logo" class="img-fluid logo" loading="lazy">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/" exact
                active-class="router-link-active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/about">About</router-link>
            </li>
          
          
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/contact">Contact Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .gradient-navbar {
    background: linear-gradient(to right, #666e7a, #554671);
  }
  
  .navbar-brand .logo {
    width: 120px; 
    height: auto;
  }
  
  .navbar-nav {
    margin-left: 10%; 
  }
  
  .nav-link {
    color: white !important;
    font-size: 1.1rem;
  }
  
  .navbar-toggler {
    border: none;
  }

  </style>