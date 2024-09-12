<template>
    <div class="container full-screen">
      <div class="background-gradient"></div>
      <section class="contact-content">
        <div class="info-header text-center">
          <h2 class="main-title mt-4 mb-4">Get in Touch with Us</h2>
          <p class="intro-text">
            We're excited to hear from you! If you have any questions about our pet products or need assistance, feel free to reach out. We're here to help and ensure you and your pets are happy with our services.
          </p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="contact-details">
              <!-- Contact Details -->
              <div class="contact-box">
                <img src="https://mapulecodes.github.io/fridayimages//images/zmpetshoplogo.png" alt="Decorative Image">
                <div class="details">
                  <h3>Our Address</h3>
                  <p>314 Landsdowne,</p>
                  <p>Cape Town</p>
                  <p>3144</p>
                </div>
              </div>
  
              <div class="contact-box">
                <img src="https://mapulecodes.github.io/fridayimages//images/zmpetshoplogo.png" alt="Decorative Image">
                <div class="details">
                  <h3>Phone Number</h3>
                  <p>021 555 5820</p>
                </div>
              </div>
  
              <div class="contact-box">
                <img src="https://mapulecodes.github.io/fridayimages//images/zmpetshoplogo.png" alt="Decorative Image">
                <div class="details">
                  <h3>Email</h3>
                  <p>envitify@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-container">
              <form ref="contactForm" class="contact-form" action="https://formspree.io/f/your-form-id" method="POST" @submit.prevent="handleSubmit">
                <h2 class="form-title">Pop Us a Message</h2>
                <div class="form-group">
                  <input type="text" name="firstName" placeholder="First Name" required>
                </div>
                <div class="form-group">
                  <input type="text" name="lastName" placeholder="Last Name" required>
                </div>
                <div class="form-group">
                  <input type="tel" name="phone" placeholder="Phone Number" required>
                </div>
                <div class="form-group">
                  <input type="email" name="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                  <textarea name="message" placeholder="Your Message" required></textarea>
                </div>
                <div class="form-group">
                  <button type="submit" class="submit-button">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleSubmit() {
    
        alert('Form submitted successfully!');
      }
    }
  }
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
  
  .full-screen {
    height: calc(100vh - 56px);
    width: 100vw;
    position: relative;
    overflow: hidden;
  }
  
  .info-header {
    padding: 20px;
  }
  
  .main-title {
    font-size: 2.5rem;
    color: white;
  }
  
  .intro-text {
    font-size: 1.25rem;
    color: white;
  }
  
  .contact-details {
    background: linear-gradient(to right, #a44d8c, #a46db2);
    padding: 20px;
    border-radius: 8px;
  }
  
  .contact-box {
    display: flex;
    align-items: center;
    padding: 10px 0;
    position: relative;
  }
  
  .contact-box img {
    width: 100px;
    height: auto;
    margin-right: 15px; 
  }
  
  .details {
    flex: 1;
  }
  
  .details h3 {
    color: #512d59;
    font-weight: bold;
  }
  
  .details p {
    margin: 5px 0;
  }
  
  .address-link, .email-link, .social-link {
    color: #325272;
  }
  
  .form-container {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
  }
  
  .form-title {
    font-size: 2rem;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .contact-form input, .contact-form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .contact-form textarea {
    resize: vertical;
  }
  
  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #583a7a;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #3f3386;
  }
  </style>