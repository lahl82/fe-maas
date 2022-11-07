<template>
  <div class="col-md-4 px-5">
    <label for="selectTechnician" class="form-label">Técnico</label>
    <select
      id="selectTechnician"
      class="form-select"
      v-model="technicianSelected"
      @change="technicianChange()"
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
import { mapState, mapActions } from "vuex";

export default {
  name: "TechniciansSelect",
  props: {
    name: String,
  },
  data: () => ({
    technicianSelected: {},
  }),
  computed: {
    ...mapState(["technicians"]),
  },
  mounted() {
    this.fetchTechnicians();
  },
  methods: {
    ...mapActions(["fetchTechnicians", "setTechnicianSelected"]),
    technicianChange: function () {
      console.log("TechSelect:" + this.technicianSelected.name);
      this.setTechnicianSelected(this.technicianSelected);
    },
  },
};
</script>
