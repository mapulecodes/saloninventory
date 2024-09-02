<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="row">
          <div class="col">
            <p class="lead">
             inventify &copy;
              <span class="shadow">{{ cYear }}</span>
            </p>
          </div>
          <div class="social-icons">
            <a href="https://www.instagram.com/only.tough.people.last/" target="_blank" class="social-link">
              <i class="bi bi-instagram">instagram</i>
            </a>
            <a href="https://www.linkedin.com/in/mapule-mbuzwana-334bb9218/" target="_blank" class="social-link">
              <i class="bi bi-linkedin">Linkden</i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    data() {
      return {
        cYear: new Date().getUTCFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #727288;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
  }
  
  .footer-content {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .col {
    margin: 1 rem 0;
  }
  
  .lead {
    margin: 0;
    font-size: 1 rem;
  }
  
  .shadow {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }
  
  .social-link {
    color: #fff;
    margin: 0 0.75rem;
    text-decoration: none;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
  }
  
  .social-link i {
    margin-right: 0.5rem;
  }
  
  .social-link:hover {
    color: #ccc;
  }
  
  @media (min-width: 500px) {
    .row {
      flex-direction: row;
      justify-content: space-between;
    }
  
    .col {
      margin: 0 1rem;
    }
  
    .social-icons {
      justify-content: flex-end;
    }
  }
  </style>