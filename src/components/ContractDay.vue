<template>
  <table class="table table-hover">
    <thead>
      <tr class="table-warning">
        <th scope="row" :colspan="techniciansPerContract?.length + 1">
          {{ day.name }}
        </th>
      </tr>
      <tr class="table-success">
        <th scope="col">Técnico</th>
        <th scope="col" v-for="tech of techniciansPerContract" :key="tech.id">
          {{ tech.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <HoursAvailable
        :block="block"
        v-for="block of blocksPerDay[this.day.id]"
        :key="parseInt(block.id) * parseInt(this.changed)"
      />
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from "vuex";
import HoursAvailable from "./HoursAvailable.vue";

export default {
  name: "ContractDay",
  props: {
    day: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapState(["techniciansPerContract", "blocksPerDay", "changed"]),
  },
  components: {
    HoursAvailable,
  },
  mounted() {
    console.log("Se monto el ContractDay");
    this.fetchBlocksPerDay(this.day.id);
    this.fetchTechniciansPerContract();
  },
  updated() {
    // console.log("updated el ContractDay");
  },
  methods: {
    ...mapActions(["fetchBlocksPerDay", "fetchTechniciansPerContract"]),
  },
};
</script>
