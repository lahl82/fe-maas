import { createStore } from "vuex";
import axios from "axios";

const resource_uri = "http://127.0.0.1:3000/api/v1/";
const contracts_list_uri = resource_uri + "contracts";
const weeks_list_uri = resource_uri + "weeks";
const technicians_list_uri = resource_uri + "technicians";

//contracts
export default createStore({
  state: {
    contracts: [],
    weeks: [],
    technicians: [],
  },
  getters: {},
  mutations: {
    setContracts: (state, contracts) => (state.contracts = contracts),
    setWeeks: (state, weeks) => (state.weeks = weeks),
    setTechnicians: (state, technicians) => (state.technicians = technicians),
  },
  actions: {
    async fetchContracts({ commit }) {
      const response = await axios.get(contracts_list_uri);
      console.log(response.data);
      commit("setContracts", response.data);
    },
    async fetchWeeks({ commit }, contract_id, technician_id) {
      const response = await axios.get(
        weeks_list_uri +
          "?contract_id=" +
          contract_id +
          "&technician_id=" +
          technician_id
      );
      console.log(response.data);
      commit("setWeeks", response.data);
    },
    async fetchTechnicians({ commit }) {
      const response = await axios.get(technicians_list_uri);
      console.log(response.data);
      commit("setTechnicians", response.data);
    },
  },
  modules: {},
});
