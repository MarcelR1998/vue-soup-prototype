import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mockSoupData: [
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
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
