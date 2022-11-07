<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid px-5">
      <span class="material-symbols-outlined"> monitor_heart </span>
      <a class="navbar-brand" href="#">MaaS</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Disponibilidades
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Consultar</a></li>
              <li><a class="dropdown-item" href="#">Editar</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Asignaciones
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Consultar</a></li>
              <li><a class="dropdown-item" href="#">Generar</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <ContractsDropDown name="Contrato" />
      <WeeksDropDown name="Semana" />
      <TechniciansDropDown name="Técnico" />
    </div>
  </nav>
  <div class="container-fluid text-center px-3">
    <div class="row align-items-start">
      <div class="col px-5"><ContractDay day="Lunes" /></div>
      <div class="col px-5"><ContractDay day="Martes" /></div>
      <div class="col px-5"><ContractDay day="Miercoles" /></div>
      <div class="col px-5"><ContractDay day="Jueves" /></div>
      <div class="col px-5"><ContractDay day="Viernes" /></div>
      <div class="col px-5"><ContractDay day="Sabado" /></div>
      <div class="col px-5"><ContractDay day="Domingo" /></div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";
import ContractDay from "./components/ContractDay.vue";
import ContractsDropDown from "./components/ContractsDropDown.vue";
import WeeksDropDown from "./components/WeeksDropDown.vue";
import TechniciansDropDown from "./components/TechniciansDropDown.vue";

export default {
  name: "App",
  components: {
    ContractDay,
    ContractsDropDown,
    WeeksDropDown,
    TechniciansDropDown,
  },
  // computed: {
  //   ...mapState(["contracts"]),
  // },
  // mounted() {
  //   this.fetchContracts();
  // },
  // methods: {
  //   ...mapActions(["fetchContracts"]),
  // },
};
</script>
