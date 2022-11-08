<template>
  <div class="col-md-4 px-5">
    <label for="selectWeek" class="form-label">Semana</label>
    <select
      id="selectWeek"
      class="form-select"
      v-model="weekSelectedV"
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
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "WeeksSelect",
  props: {
    name: String,
  },
  computed: {
    ...mapState(["weeks"]),
    weekSelectedV: {
      get() {
        return this.weekSelected();
      },
      set(value) {
        return this.setWeekSelected(value);
      },
    },
  },
  mounted() {
    this.fetchWeeks();
  },
  methods: {
    ...mapGetters(["weekSelected"]),
    ...mapActions(["fetchWeeks", "setWeekSelected"]),
  },
};
</script>
