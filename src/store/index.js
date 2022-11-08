import { createStore } from "vuex";
import axios from "axios";

const resource_uri = "http://127.0.0.1:3000/api/v1/";
const contracts_list_uri = resource_uri + "contracts";
const weeks_list_uri = resource_uri + "weeks";
const technicians_list_uri = resource_uri + "technicians";

export default createStore({
  state: {
    contractSelected: {},
    technicianSelected: {},
    weekSelected: {},
    contracts: [],
    weeks: [],
    technicians: [],
    days: [],
  },
  getters: {},
  mutations: {
    setContractSelected: (state, contractSelected) =>
      (state.contractSelected = contractSelected),
    setTechnicianSelected: (state, technicianSelected) =>
      (state.technicianSelected = technicianSelected),
    setWeekSelected: (state, weekSelected) =>
      (state.weekSelected = weekSelected),
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
    async fetchWeeks({ commit, state }) {
      const ctr_id = state.contractSelected.id;
      const tec_id = state.technicianSelected.id;

      if (!Object.is(ctr_id, undefined) && !Object.is(tec_id, undefined)) {
        const response = await axios.get(
          weeks_list_uri + "?contract_id=" + ctr_id + "&technician_id=" + tec_id
        );
        console.log(response.data);
        commit("setWeeks", response.data);
      } else {
        commit("setWeeks", null);
      }
    },
    async fetchTechnicians({ commit }) {
      const response = await axios.get(technicians_list_uri);
      console.log(response.data);
      commit("setTechnicians", response.data);
    },

    setContractSelected({ commit, dispatch }, ContractSelected) {
      commit("setContractSelected", ContractSelected);
      dispatch("fetchWeeks");
    },
    setWeekSelected({ commit }, WeekSelected) {
      commit("setWeekSelected", WeekSelected);
    },
    setTechnicianSelected({ commit, dispatch }, TechnicianSelected) {
      commit("setTechnicianSelected", TechnicianSelected);
      dispatch("fetchWeeks");
    },
  },
  modules: {},
});
