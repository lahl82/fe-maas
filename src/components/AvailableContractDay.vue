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
      <AvailableHours
        :block="block"
        v-for="block of blocksPerDay[this.day.id]"
        :key="parseInt(block.id) * parseInt(this.changed)"
      />
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AvailableHours from "./AvailableHours.vue";

export default {
  name: "AvailableContractDay",
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
    AvailableHours,
  },
  mounted() {
    this.fetchBlocksPerDay(this.day.id);
    this.fetchTechniciansPerContract();
  },
  methods: {
    ...mapActions(["fetchBlocksPerDay", "fetchTechniciansPerContract"]),
  },
};
</script>
