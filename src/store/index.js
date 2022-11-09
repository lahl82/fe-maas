import { createStore } from "vuex";
import axios from "axios";

const resource_uri = "http://127.0.0.1:3000/api/v1";
const contracts_list_uri = resource_uri + "/contracts";
const weeks_list_uri = resource_uri + "/weeks";
const technicians_list_uri = resource_uri + "/technicians";
const technicians_contract_uri = resource_uri + "/contracts/:id/technicians";
const days_per_contract_uri = resource_uri + "/contracts/:id/days";
const blocks_per_day_uri = resource_uri + "/days/:id/blocks";
const availables_per_block_uri = resource_uri + "/weeks/:id/availables";

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
    blocksPerDay: [],
    availablesPerBlock: [],
    changed: 10,
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
    setBlocksPerDay: (state, { day_id, data }) =>
      (state.blocksPerDay[day_id] = data),
    setAvailablesPerBlock: (state, { block_id, data }) =>
      (state.availablesPerBlock[block_id] = data),
    clearBlocksPerDay: (state) => (state.blocksPerDay = []),
    clearAvailablesPerBlock: (state) => (state.availablesPerBlock = []),
    setChanged: (state, changed) => (state.changed = changed),
  },
  actions: {
    async fetchContracts({ commit }) {
      const response = await axios.get(contracts_list_uri);
      commit("setContracts", response.data);
    },
    async fetchWeeks({ commit, state, dispatch }) {
      const ctr_id = state.contractSelected?.id;
      const tec_id = state.technicianSelected?.id;

      if (!Object.is(ctr_id, undefined) && !Object.is(tec_id, undefined)) {
        const response = await axios.get(
          weeks_list_uri + "?contract_id=" + ctr_id + "&technician_id=" + tec_id
        );
        commit("setWeeks", response.data);
      } else {
        commit("setWeeks", null);
      }

      dispatch("setWeekSelected", null);
    },
    async fetchTechnicians({ commit }) {
      const response = await axios.get(technicians_list_uri);
      commit("setTechnicians", response.data);
    },
    async fetchDaysPerContract({ commit, state }) {
      const week_id = state.weekSelected?.id;

      if (!Object.is(week_id, undefined)) {
        const ctr_id = state.contractSelected.id;

        const uri = days_per_contract_uri.replace(":id", ctr_id);

        const response = await axios.get(uri);
        commit("setDaysPerContract", response.data);
      } else {
        commit("setDaysPerContract", []);
      }
    },
    async fetchTechniciansPerContract({ commit, state }) {
      const week_id = state.weekSelected?.id;

      if (!Object.is(week_id, undefined)) {
        const ctr_id = state.contractSelected.id;

        const uri = technicians_contract_uri.replace(":id", ctr_id);

        const response = await axios.get(uri + "?week_id=" + week_id);
        commit("setTechniciansPerContract", response.data);
      } else {
        commit("setTechniciansPerContract", []);
      }
    },
    async fetchBlocksPerDay({ commit, state }, dy_id) {
      const week_id = state.weekSelected?.id;

      if (!Object.is(week_id, undefined)) {
        const uri = blocks_per_day_uri.replace(":id", dy_id);

        const response = await axios.get(uri);
        commit("setBlocksPerDay", { day_id: dy_id, data: response.data });
      } else {
        commit("clearBlocksPerDay");
      }
    },
    async fetchAvailablesPerBlock({ commit, state }, bk_id) {
      const week_id = state.weekSelected?.id;

      if (!Object.is(week_id, undefined)) {
        const uri = availables_per_block_uri.replace(":id", week_id);

        const response = await axios.get(uri + "?block_id=" + bk_id);
        commit("setAvailablesPerBlock", {
          block_id: bk_id,
          data: response.data,
        });
      } else {
        commit("clearAvailablesPerBlock");
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
      console.log("Entra a setWeekSelected con: " + WeekSelected);
      commit("clearAvailablesPerBlock");
      commit("clearBlocksPerDay");
      commit("setWeekSelected", WeekSelected);

      commit("setChanged", Math.round(Math.random() * 100));

      dispatch("fetchDaysPerContract");
      dispatch("fetchTechniciansPerContract");
    },
  },
  modules: {},
});
