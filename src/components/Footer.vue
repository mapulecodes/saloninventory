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
            <i class="bi bi-instagram">Instagram</i>
          </a>
          <a href="https://www.linkedin.com/in/mapule-mbuzwana-334bb9218/" target="_blank" class="social-link">
            <i class="bi bi-linkedin">LinkedIn</i>
          </a>
          <a href="https://github.com/mapulecodes/saloninventory.git" target="_blank" class="social-link">
            <i class="bi bi-github">GitHub</i>
          </a>
        </div>
      </div>
      <!-- .env PDF -->
      <div class="env-button">
        <button @click="generateEnvPdf" class="btn-env">.env PDF</button>
      </div>
    </div>
  </footer>
</template>

<script>
import jsPDF from 'jspdf';

export default {
  name: "FooterComp",
  data() {
    return {
      cYear: new Date().getUTCFullYear(),
      envContent: `
        DBhost = bpemwwtzrbn7c015wmd6-mysql.services.clever-cloud.com
        DBname = bpemwwtzrbn7c015wmd6
        DBuser = uusmdqmu84hs7aas
        DBpassword = 2g2ze8Z0IZupb1FG13TH

        # Application
        PORT = 3300

        # JWT
        SECRET_KEY = "Scooby"
      `
    };
  },
  methods: {
    generateEnvPdf() {
      const doc = new jsPDF();
      doc.text('Environment Variables (.env)', 14, 16);
      doc.text(this.envContent, 14, 30); 
      doc.save('.env.pdf'); 
    }
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
  margin: 1rem 0;
}

.lead {
  margin: 0;
  font-size: 1rem;
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

.env-button {
  margin-top: 1rem;
}

.btn-env {
  background-color: hsl(281, 46%, 33%); 
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.btn-env:hover {
  opacity: 0.8;
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
