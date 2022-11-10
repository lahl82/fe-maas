<template>
  <div class="container-sm text-right px-5 pt-2 pb-5">
    <div class="fs-3 text-center">Asignaciones Automáticas</div>
    <form class="row text-center justify-content-center">
      <ContractsSelect />
      <TechniciansSelect />
      <WeeksSelect />
    </form>
  </div>
  <div class="container-fluid text-center px-3">
    <div class="row align-items-start">
      <div class="col px-5">
        <button type="button" @click="clicked" class="btn btn-primary btn-lg">
          Generar
        </button>
      </div>
    </div>
    <div v-if="generado" class="row align-items-start py-5">
      <div class="fs-5 text-center">
        Generacion Exitosa. ya puede consultarlas desde la opcion
        <b>Asignaciones->Consultar</b>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ContractsSelect from "./ContractsSelect.vue";
import WeeksSelect from "./WeeksSelect.vue";
import TechniciansSelect from "./TechniciansSelect.vue";

export default {
  name: "GenerateAllocationsShow",
  components: {
    ContractsSelect,
    TechniciansSelect,
    WeeksSelect,
  },
  data() {
    return { generado: false };
  },
  methods: {
    ...mapActions(["generateAllocations"]),
    clicked() {
      this.generateAllocations();
      this.generado = true;
    },
  },
};
</script>
