import Vue from 'vue';
import Vuex from 'vuex';
import db from "@/fb";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    soupData: [],
    cart: {}
  },
  mutations: {
    addToCart(state, { id, name, price, amount, imageUrl }) {
      let localCart = JSON.parse(localStorage.getItem("cart"));
      if (localCart[id]) {
        state.cart[id].id = id;
        state.cart[id].name = name;
        state.cart[id].price = price;
        state.cart[id].amount = localCart[id].amount + amount;
        state.cart[id].imageUrl = imageUrl;
      } else {
        state.cart[id] = {
          id,
          name,
          price,
          amount,
          imageUrl
        };
      }
      saveLocalStorage(state, id);
    },
    addOne(state, id) {
      if (state.cart[id].amount < 99) {
        state.cart[id].amount += 1;
        saveLocalStorage(state, id)
      }
    },
    removeOne(state, id) {
      if (state.cart[id].amount > 1) {
        state.cart[id].amount -= 1;
        saveLocalStorage(state, id)
      }
    },
    deleteSoup(state, id) {
      Vue.delete(state.cart, id);
      console.log("heya!");
      let localCart = JSON.parse(localStorage.getItem("cart"));
      delete localCart[id];
      localStorage.setItem('cart', JSON.stringify(localCart));
    },
    initialiseStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem("cart"));
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
      fetchSoups(state);
    },
  },
  actions: {
  },
  modules: {
  }
})

const saveLocalStorage = (state, id) => {
  //Creates a copy of existing localstorage, modifies it, and then replaces it, instead of just setting localstorage to whole cart state.
  //This way, any changes done in a different tab aren't overwritten.
  //If there is no localstorage, localstorage is set as the cart state.
  if (localStorage.getItem('cart')) {
    let localCart = JSON.parse(localStorage.getItem("cart"));
    localCart[id] = state.cart[id];
    localStorage.setItem('cart', JSON.stringify(localCart));
  } else {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }
}

const fetchSoups = (state) => {
  db.collection("soups").onSnapshot((res) => {
    const changes = res.docChanges();
    changes.forEach((change) => {
      if (change.type === "added") {
        state.soupData.push({
          ...change.doc.data(),
          id: change.doc.id,
        });
        sortSoupsById(state);
      } else if (change.type === "removed") {
        state.soupData.forEach((soup, index) => {
          if (soup.id == change.doc.id) {
            state.soupData.splice(index, 1);
          }
        });
      }
    });
  });
}

const sortSoupsById = (state) => {
  state.soupData.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
}