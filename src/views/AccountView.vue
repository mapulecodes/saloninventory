<template>
  <div class="profile-container">
    <div class="profile-header">
      <img class="profile-image" src="https://mapulecodes.github.io/fridayimages/images/nobg.png" alt="Profile Image">
      <h2>{{ user.user_name }}'s Profile</h2>
    </div>
    <div class="profile-details">
      <p><strong>Email:</strong> {{ user.user_email }}</p>
      <p><strong>Joined:</strong> Aug 2024</p>
      <p><strong>Location:</strong> South Africa</p>
    </div>
    <button @click="deleteProfile" class="delete-button">Delete Profile</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        user_name: 'Mapule',
        user_email: 'mapule@gmail.com',
      },
    };
  },
  methods: {
    deleteProfile() {
      // Add logic for deleting the profile
      alert('Profile deleted');
    },
  },
};
</script>

<style scoped>
.profile-container {
  text-align: center;
  padding: 20px;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.profile-header h2 {
  margin-top: 15px;
}

.profile-details {
  margin-top: 20px;
  font-size: 18px;
}

.delete-button {
  background-color: red;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 40px;
  font-size: 16px;
}
</style>
