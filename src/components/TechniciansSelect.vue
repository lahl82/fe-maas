<template>
  <div class="col-md-4 px-5">
    <label for="selectTechnician" class="form-label">Técnico</label>
    <select
      id="selectTechnician"
      class="form-select"
      v-model="technicianSelectedV"
      aria-label="Default select example"
    >
      <option selected>--Seleccione--</option>
      <option
        v-for="technician of technicians"
        :key="technician.id"
        :value="technician"
      >
        {{ technician.name }}
      </option>
    </select>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "TechniciansSelect",
  props: {
    name: String,
  },
  computed: {
    ...mapState(["technicians"]),
    technicianSelectedV: {
      get() {
        return this.technicianSelected();
      },
      set(value) {
        return this.setTechnicianSelected(value);
      },
    },
  },
  mounted() {
    this.fetchTechnicians();
  },
  methods: {
    ...mapActions(["fetchTechnicians", "setTechnicianSelected"]),
    ...mapGetters(["technicianSelected"]),
  },
};
</script>
