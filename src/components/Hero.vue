<template>
  <div class="Hero">
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
        <button :disabled="address == ''">Check</button>
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
    };
  },
};
</script>

<style scoped>
.Hero {
  margin: 96px 8px;
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
}
#addressBarDiv button:disabled {
  background-color: rgb(217, 217, 217);
  border: none;
  cursor: initial;
  color: white;
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
</style>