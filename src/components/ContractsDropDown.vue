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
      <li v-for="contract of contracts" :key="contract.id">
        <a class="dropdown-item" href="#">{{ contract.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ContractsDropDown",
  props: {
    name: String,
  },
  computed: {
    ...mapState(["contracts"]),
  },
  mounted() {
    this.fetchContracts();
  },
  methods: {
    ...mapActions(["fetchContracts"]),
  },
};
</script>
