<template>
  <div class="dropdown pe-2">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ name }}
    </button>
    <ul class="dropdown-menu">
      <li v-for="week of weeks" :key="week.id">
        <a class="dropdown-item" href="#">{{ week.number }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "WeeksDropDown",
  props: {
    name: String,
  },
  computed: {
    ...mapState(["weeks", "contracts", "technicians"]),
  },
  mounted() {
    this.fetchWeeks();
  },
  methods: {
    ...mapActions(["fetchWeeks"]),
  },
};
</script>
