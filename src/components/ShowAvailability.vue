<template>
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
        <ContractDay :day="day" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ContractDay from "./ContractDay.vue";
import ContractsSelect from "./ContractsSelect.vue";
import WeeksSelect from "./WeeksSelect.vue";
import TechniciansSelect from "./TechniciansSelect.vue";

export default {
  name: "ShowAvailability",
  components: {
    ContractDay,
    ContractsSelect,
    WeeksSelect,
    TechniciansSelect,
  },
  computed: {
    ...mapState(["daysPerContract"]),
  },
  methods: {
    ...mapActions(["fetchDaysPerContract"]),
  },
};
</script>
