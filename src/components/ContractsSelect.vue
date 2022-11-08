<template>
  <div class="col-md-4 px-5">
    <label for="selectContract" class="form-label">Contrato</label>
    <select
      id="selectContract"
      class="form-select"
      v-model="contractSelectedV"
      aria-label="Default select example"
    >
      <option selected>--Seleccione--</option>
      <option
        v-for="contract of contracts"
        :key="contract.id"
        :value="contract"
      >
        {{ contract.name }}
      </option>
    </select>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "ContractsSelect",
  props: {
    name: String,
  },
  computed: {
    ...mapState(["contracts"]),
    contractSelectedV: {
      get() {
        return this.contractSelected();
      },
      set(value) {
        return this.setContractSelected(value);
      },
    },
  },
  mounted() {
    this.fetchContracts();
  },
  methods: {
    ...mapActions(["fetchContracts", "setContractSelected"]),
    ...mapGetters(["contractSelected"]),
  },
};
</script>
