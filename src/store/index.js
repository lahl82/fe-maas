import { createStore } from "vuex";
import axios from "axios";

const resource_uri = "http://127.0.0.1:3000/api/v1/";
const contracts_list_uri = resource_uri + "contracts";
const weeks_list_uri = resource_uri + "weeks";
const technicians_list_uri = resource_uri + "technicians";
const technicians_contract_uri = resource_uri + "contracts/:id/technicians";
const days_per_contract_uri = resource_uri + "contracts/:id/days";

export default createStore({
  state: {
    contractSelected: {},
    technicianSelected: {},
    weekSelected: {},
    contracts: [],
    weeks: [],
    technicians: [],
    daysPerContract: [],
    techniciansPerContract: [],
  },
  getters: {
    contractSelected(state) {
      return state.contractSelected;
    },
    technicianSelected(state) {
      return state.technicianSelected;
    },
    weekSelected(state) {
      return state.weekSelected;
    },
  },
  mutations: {
    setContractSelected: (state, contractSelected) =>
      (state.contractSelected = contractSelected),
    setTechnicianSelected: (state, technicianSelected) =>
      (state.technicianSelected = technicianSelected),
    setWeekSelected: (state, weekSelected) =>
      (state.weekSelected = weekSelected),

    setContracts: (state, contracts) => (state.contracts = contracts),
    setTechnicians: (state, technicians) => (state.technicians = technicians),
    setWeeks: (state, weeks) => (state.weeks = weeks),

    setDaysPerContract: (state, daysPerContract) =>
      (state.daysPerContract = daysPerContract),
    setTechniciansPerContract: (state, techniciansPerContract) =>
      (state.techniciansPerContract = techniciansPerContract),
  },
  actions: {
    async fetchContracts({ commit }) {
      const response = await axios.get(contracts_list_uri);
      console.log(response.data);
      commit("setContracts", response.data);
    },
    async fetchWeeks({ commit, state, dispatch }) {
      const ctr_id = state.contractSelected?.id;
      const tec_id = state.technicianSelected?.id;

      if (!Object.is(ctr_id, undefined) && !Object.is(tec_id, undefined)) {
        const response = await axios.get(
          weeks_list_uri + "?contract_id=" + ctr_id + "&technician_id=" + tec_id
        );
        console.log(response.data);
        commit("setWeeks", response.data);
      } else {
        commit("setWeeks", null);
      }

      dispatch("setWeekSelected", null);
    },
    async fetchTechnicians({ commit }) {
      const response = await axios.get(technicians_list_uri);
      console.log(response.data);
      commit("setTechnicians", response.data);
    },
    async fetchDaysPerContract({ commit, state }) {
      const week_id = state.weekSelected?.id;

      if (!Object.is(week_id, undefined)) {
        const ctr_id = state.contractSelected.id;

        const uri = days_per_contract_uri.replace(":id", ctr_id);

        const response = await axios.get(uri);
        console.log(response.data);
        commit("setDaysPerContract", response.data);
      } else {
        commit("setDaysPerContract", null);
      }
    },
    async fetchTechniciansPerContract({ commit, state }) {
      const week_id = state.weekSelected?.id;

      if (!Object.is(week_id, undefined)) {
        const ctr_id = state.contractSelected.id;

        const uri = technicians_contract_uri.replace(":id", ctr_id);

        const response = await axios.get(uri + "?week_id=" + week_id);
        console.log(response.data);
        commit("setTechniciansPerContract", response.data);
      } else {
        commit("setTechniciansPerContract", null);
      }
    },
    async fetchBlocksPerTechnicianPerDay({ commit, state }) {
      const week_id = state.weekSelected?.id;

      if (!Object.is(week_id, undefined)) {
        const ctr_id = state.contractSelected.id;

        const uri = technicians_contract_uri.replace(":id", ctr_id);

        const response = await axios.get(uri + "?week_id=" + week_id);
        console.log(response.data);
        commit("setTechniciansPerContract", response.data);
      } else {
        commit("setTechniciansPerContract", null);
      }
    },
    setContractSelected({ commit, dispatch }, ContractSelected) {
      commit("setContractSelected", ContractSelected);
      dispatch("fetchWeeks");
    },
    setTechnicianSelected({ commit, dispatch }, TechnicianSelected) {
      commit("setTechnicianSelected", TechnicianSelected);
      dispatch("fetchWeeks");
    },
    setWeekSelected({ commit, dispatch }, WeekSelected) {
      commit("setWeekSelected", WeekSelected);
      dispatch("fetchDaysPerContract");
      dispatch("fetchTechniciansPerContract");
    },
  },
  modules: {},
});
