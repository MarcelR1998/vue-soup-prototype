import Vue from 'vue';
import Vuex from 'vuex';
import db from "@/fb";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    soupData: [],
    cart: {},
    cartAmount: 0,
    cartPrice: {
      subtotal: 0,
      vat: 0,
      total: 0
    },
    customerForm: {
      delivery: new Date().toJSON().slice(0, 10),
    },
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
      setCartAmountAndPrice(state);
      saveLocalStorage(state, id);
    },
    addOne(state, id) {
      if (state.cart[id].amount < 99) {
        state.cart[id].amount += 1;
        setCartAmountAndPrice(state);
        saveLocalStorage(state, id)
      }
    },
    removeOne(state, id) {
      if (state.cart[id].amount > 1) {
        state.cart[id].amount -= 1;
        setCartAmountAndPrice(state);
        saveLocalStorage(state, id)
      }
    },
    deleteSoup(state, id) {
      Vue.delete(state.cart, id);
      setCartAmountAndPrice(state);
      let localCart = JSON.parse(localStorage.getItem("cart"));
      delete localCart[id];
      localStorage.setItem('cart', JSON.stringify(localCart));
    },
    initialiseStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem("cart"));
        setCartAmountAndPrice(state);
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
      fetchSoups(state);
    },
    updateForm(state, customerForm) {
      state.customerForm = customerForm
    }
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

const setCartAmountAndPrice = (state) => {
  let amount = 0;
  let price = 0;
  //Takes the cart object, and extracts the price and amount of every type of soup in cart.
  Object.keys(state.cart).forEach((key) => {
    amount += state.cart[key].amount;
    price += Number(state.cart[key].price) * state.cart[key].amount;
  })
  if (amount > 0) {
    state.cartAmount = amount
  } else {
    state.cartAmount = 0;
  }
  let vat = Math.round(price * 0.12);
  state.cartPrice["subtotal"] = price - vat;
  state.cartPrice["vat"] = vat;
  state.cartPrice["total"] = price;
}
