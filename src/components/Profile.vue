<template>
  <div class="profile-box">
    <div class="avatar-box">
      <div class="login-box">
        <p>
          <em>{{profileData.login}}</em>
        </p>
      </div>
      <a :href="profileData.html_url">
        <img class="avatar" :src="profileData.avatar_url" />
      </a>
    </div>
    <div class="info-box">
      <div v-if="profileData.bio != null">
        <p>
          <em>{{profileData.bio}}</em>
        </p>
      </div>
      <div v-else>
        <p>
          <em>No bio found.</em>
        </p>
      </div>
      <div v-if="profileData.name != null">
        <p>
          <strong>name</strong>
          {{profileData.name}}
        </p>
      </div>
      <div v-if="profileData.location != null">
        <p>{{profileData.location}}</p>
      </div>
      <div v-if="profileData.company != null">
        <p>{{profileData.company}}</p>
      </div>
      <p>{{profileData.followers}} followers</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    profileData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.profile-box {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.avatar-box {
  text-align: center;
  margin-right: 2em;
  background-color: #304ffe;
  padding: 2em;
  color: white;
}

.avatar {
  border-radius: 100px;
  max-width: 160px;
}

.avatar:hover {
  opacity: 0.5;
}
</style>