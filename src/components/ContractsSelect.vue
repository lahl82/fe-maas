<template>
  <div class="col-md-4 px-5">
    <label for="selectContract" class="form-label">Contrato</label>
    <select
      id="selectContract"
      class="form-select"
      v-model="contractSelected"
      @change="contractChange()"
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
import { mapState, mapActions } from "vuex";

export default {
  name: "ContractsSelect",
  props: {
    name: String,
  },
  data: () => ({
    contractSelected: {},
  }),
  computed: {
    ...mapState(["contracts"]),
  },
  mounted() {
    this.fetchContracts();
  },
  methods: {
    ...mapActions(["fetchContracts", "setContractSelected"]),
    contractChange: function () {
      console.log("CtrSelect:" + this.contractSelected.name);
      this.setContractSelected(this.contractSelected);
    },
  },
};
</script>
