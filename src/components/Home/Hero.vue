<template>
  <div class="hero">
    <div class="widthContainer">
      <img src alt />
      <h1>
        Fresh from the farm
        <br />right to your door
      </h1>
      <div id="addressBarDiv">
        <div id="inputDiv">
          <i class="fas fa-map-marker-alt"></i>
          <input
            type="text"
            placeholder="Enter delivery address"
            v-model="address"
            spellcheck="false"
          />
        </div>
        <button @click="showNotificationHandler" :disabled="address == ''">
          Check
        </button>
      </div>
      <div
        v-if="showNotification"
        class="notification"
        v-bind:class="{ fadeIn: fadeIn }"
      >
        <span><i class="fas fa-sun fa-spin"></i> Yay! We deliver to you!</span>
        <button @click="closeNotification" id="closeButton">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      address: "",
      showNotification: false,
      fadeIn: false,
    };
  },
  methods: {
    showNotificationHandler() {
      this.showNotification = true;
      setTimeout(() => {
        this.fadeIn = true;
      });
    },
    closeNotification() {
      this.fadeIn = false;
      setTimeout(() => {
        this.showNotification = false;
      }, 300);
    },
  },
};
</script>

<style scoped>
.hero {
  padding: 96px 8px;
  background-image: url(../../assets/coverPhoto.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#addressBarDiv {
  display: flex;
  margin: auto;
  width: 100%;
}
#addressBarDiv button {
  background-color: rgb(32, 217, 148, 1);
  border: none;
  cursor: pointer;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}
#addressBarDiv button:disabled {
  background-color: rgb(217, 217, 217);
  border: none;
  cursor: initial;
  color: white;
}
#addressBarDiv button:hover:enabled {
  filter: brightness(0.9);
}
#inputDiv {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgb(250, 250, 250, 1);
  padding: 12px;
}
input {
  background-color: rgb(250, 250, 250, 1);
  border: none;
  width: 100%;
  transition: 0.5s;
  outline: none;
  font-family: "FontAwesome", "Quicksand", sans-serif;
}
#inputDiv:focus-within {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.notification {
  position: fixed;
  left: 50%;
  transform: translate(-50%, -32px);
  top: 8px;
  color: white;
  background-color: rgb(32, 217, 148, 1);
  border-radius: 32px;
  padding: 12px;
  border: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: fit-content;
  opacity: 0;
  transition: 0.3s;
}
#closeButton {
  color: white;
  background-color: #20d994;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 8px;
}
#closeButton:hover {
  filter: brightness(0.9);
}
.fadeIn {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>