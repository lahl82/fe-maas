<template>
  <table class="table table-hover">
    <thead>
      <tr class="table-warning">
        <th scope="row" colspan="3">{{ day }}</th>
      </tr>
      <tr class="table-success">
        <th scope="col">Hora</th>
        <th scope="col">Técnico</th>
        <th scope="col">Disponible</th>
      </tr>
    </thead>
    <tbody>
      <HoursAvailable />
    </tbody>
  </table>
</template>

<script>
import HoursAvailable from "./HoursAvailable.vue";

export default {
  name: "ContractDay",
  props: {
    day: String,
  },
  components: {
    HoursAvailable,
  },
};
</script>
