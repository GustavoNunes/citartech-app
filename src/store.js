import Vue from 'vue';
import Vuex from 'vuex';
import CountryService from '@/services/CountryService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
  },
  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },
  },
  actions: {
    async getCountries({ commit }) {
      commit('setCountries', await CountryService.getAll());
    },
  },
});
