<template>
  <div class="login">
    <BackButton route="/" />
    <div class="widthContainer">
      <h1>Login</h1>
      <form @submit.prevent="pressed">
        <input type="email" v-model="email" placeholder="email" />
        <input type="password" v-model="password" placeholder="password" />
        <button class="loginButton">Login</button>
      </form>
      <div class="error" v-if="error">{{ error.message }}</div>
      <div>
        Don't have an account?
        <router-link to="/signup">Sign up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import BackButton from "../components/BackButton";

export default {
  components: { BackButton },
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
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data);
          this.$router.replace({ name: "Admin" });
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>

<style scoped>
.login {
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
.loginButton {
  color: white;
  background-color: rgb(32, 217, 148, 1);
  border: 1px solid rgb(32, 217, 148, 1);
  padding: 8px;
  margin: 8px;
  width: fit-content;
  border-radius: 4px;
  transition: 0.3s;
}
.loginButton:hover {
  filter: brightness(0.9);
  cursor: pointer;
}
</style>