<template>
  <div class="container-sm text-right px-5 pt-2 pb-5">
    <div class="fs-3 text-center">Consultar Asignaciones</div>
    <form class="row text-center justify-content-center">
      <ContractsSelect />
      <TechniciansSelect />
      <WeeksSelect />
    </form>
  </div>
  <div class="container-fluid text-center px-3">
    <div class="row align-items-start">
      <div class="col px-5" v-for="day of daysPerContract" :key="day.id">
        <AllocationsContractDay :day="day" :key="this.changed" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ContractsSelect from "./ContractsSelect.vue";
import WeeksSelect from "./WeeksSelect.vue";
import TechniciansSelect from "./TechniciansSelect.vue";
import AllocationsContractDay from "./AllocationsContractDay.vue";

export default {
  name: "AllocationsShow",
  components: {
    ContractsSelect,
    TechniciansSelect,
    WeeksSelect,
    AllocationsContractDay,
  },
  computed: {
    ...mapState(["daysPerContract", "changed"]),
  },
  methods: {
    ...mapActions(["fetchDaysPerContract"]),
  },
};
</script>
