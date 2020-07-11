<template>
  <div id="gitview">
    <div v-if="type == 'repo'">
      <Repo :repoData="details" />
    </div>
    <div v-if="type == 'profile'">
      <Profile :profileData="details" />
    </div>
    <div v-if="type == 'stream'">
      <Stream :streamData="details" />
    </div>
  </div>
</template>

<script>
import Repo from "./Repo.vue";
import Profile from "./Profile.vue";
import Stream from "./Stream.vue";
import Github from "../services/Github";

export default {
  name: "GitView",
  data: () => {
    return {
      details: null
    };
  },
  props: {
    service: {
      type: String,
      default: "github",
      validator: value => {
        return ["github", "bitbucket"].indexOf(value) !== -1;
      }
    },
    type: {
      type: String,
      default: "repo",
      validator: value => {
        return ["repo", "profile", "stream"].indexOf(value) !== -1;
      }
    },
    user: {
      type: String,
      required: true
    },
    payload: {
      type: String
    }
  },
  components: {
    Repo,
    Profile,
    Stream
  },
  mounted() {
    /* Determines service to derive data from */
    var service = new Github();
    /* Determines type of data to query from service */
    switch (this.type) {
      case "repo":
        service.getUserRepository(this.user, this.payload, data => {
          this.details = data;
        });
        break;
      case "profile":
        service.getUserProfile(this.user, data => {
          this.details = data;
        });
        break;
      case "stream":
        service.getUserStream(this.user, data => {
          this.details = data;
        });
        break;
    }
  }
};
</script>

<style scoped>
#gitview {
  border: 1px solid black;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}
</style>