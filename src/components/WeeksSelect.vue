<template>
  <div class="col-md-4 px-5">
    <label for="selectWeek" class="form-label">Semana</label>
    <select
      id="selectWeek"
      class="form-select"
      v-model="weekSelected"
      aria-label="Default select example"
    >
      <option selected>Seleccione...</option>
      <option v-for="week of weeks" :key="week.id" :value="week">
        {{ week.number }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "WeeksSelect",
  props: {
    name: String,
  },
  data: () => ({
    weekSelected: {},
  }),
  computed: {
    ...mapState([
      "weeks",
      "contracts",
      "technicians",
      "contractSelected",
      "technicianSelected",
    ]),
  },
  methods: {
    ...mapActions(["fetchWeeks"]),
  },
};
</script>
