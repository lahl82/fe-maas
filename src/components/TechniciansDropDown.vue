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
      <li v-for="technician of technicians" :key="technician.id">
        <a class="dropdown-item" href="#">{{ technician.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TechniciansDropDown",
  props: {
    name: String,
  },
  computed: {
    ...mapState(["technicians"]),
  },
  mounted() {
    this.fetchTechnicians();
  },
  methods: {
    ...mapActions(["fetchTechnicians"]),
  },
};
</script>
