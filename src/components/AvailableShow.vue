<template>
  Disponibilidades
  <div class="container-sm text-right px-5 pt-2 pb-5">
    <form class="row text-center justify-content-center">
      <ContractsSelect />
      <TechniciansSelect />
      <WeeksSelect />
    </form>
  </div>
  <div class="container-fluid text-center px-3">
    <div class="row align-items-start">
      <div class="col px-5" v-for="day of daysPerContract" :key="day.id">
        <AvailableContractDay :day="day" :key="this.changed" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ContractsSelect from "./ContractsSelect.vue";
import WeeksSelect from "./WeeksSelect.vue";
import TechniciansSelect from "./TechniciansSelect.vue";
import AvailableContractDay from "./AvailableContractDay.vue";

export default {
  name: "ShowAvailability",
  components: {
    ContractsSelect,
    TechniciansSelect,
    WeeksSelect,
    AvailableContractDay,
  },
  computed: {
    ...mapState(["daysPerContract", "changed"]),
  },
  methods: {
    ...mapActions(["fetchDaysPerContract"]),
  },
};
</script>
