<template>
  <div class="signup">
    <div class="widthContainer">
      <h1>Sign up</h1>
      <form @submit.prevent="pressed">
        <input type="email" v-model="email" placeholder="email" />
        <input type="password" v-model="password" placeholder="password" />
        <button class="signupButton">Sign up</button>
      </form>
      <div class="error" v-if="error">{{ error.message }}</div>
      <div>
        Already have an account?
        <router-link to="/login">Log in</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace({ name: "Admin" });
        })
        .catch((error) => (this.error = error));
    },
  },
};
</script>

<style scoped>
.signup {
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  padding: 8px;
  margin: 8px;
}
.signupButton {
  color: white;
  background-color: rgb(32, 217, 148, 1);
  border: 1px solid rgb(32, 217, 148, 1);
  padding: 8px;
  margin: 8px;
  width: fit-content;
  border-radius: 4px;
  transition: 0.3s;
}
.signupButton:hover {
  filter: brightness(0.9);
  cursor: pointer;
}
</style>