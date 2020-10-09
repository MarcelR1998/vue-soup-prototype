import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {}
    /* mockSoupData: [
      {
        name: "Gazpacho",
        price: 80,
        imageUrl:
          "https://imgs.aftonbladet-cdn.se/v2/images/7c85984e-68e3-4524-bec4-d39d0455b7c9?fit=crop&h=593&q=50&w=790&s=79e617553724b5953263a1221decb23db34d0a45",
      },
      {
        name: "Mushroom soup",
        price: 82,
        imageUrl:
          "https://www.budgetbytes.com/wp-content/uploads/2017/09/Creamy-Garlic-Mushroom-Soup-spoon.jpg",
      },
      {
        name: "Lentil soup",
        price: 70,
        imageUrl:
          "https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2019/02/Lentil-Vegetable-Soup.jpg",
      },
      {
        name: "Beef stew",
        price: 95,
        imageUrl:
          "https://chowhound1.cbsistatic.com/assets/2014/09/30301_easy_beef_stew_3000x2000.jpg",
      },
    ], */
  },
  mutations: {
    addToCart(state, { id, name, price, amount }) {
      let localCart = JSON.parse(localStorage.getItem("cart"));
      if (localCart[id]) {
        state.cart[id].id = id;
        state.cart[id].name = name;
        state.cart[id].price = price;
        state.cart[id].amount = localCart[id].amount + amount;
      } else {
        state.cart[id] = {
          id: id,
          name: name,
          price: price,
          amount: amount,
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
        console.log("Unable to load localstorage")
      }
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
