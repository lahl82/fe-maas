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
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="menuChange('showAvailability')"
                  >Consultar</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#" @click="menuChange('edit')"
                  >Editar</a
                >
              </li>
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
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="menuChange('showAllocations')"
                  >Consultar</a
                >
              </li>
              <li><a class="dropdown-item" href="#">Generar</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <ShowAvailability v-if="menuSelected == 'showAvailability'" />
  <ShowAllocations v-if="menuSelected == 'showAllocations'" />
</template>

<script>
import ShowAvailability from "./components/ShowAvailability.vue";
import ShowAllocations from "./components/ShowAllocations.vue";

export default {
  name: "App",
  components: {
    ShowAvailability,
    ShowAllocations,
  },
  data: () => ({
    menuSelected: {},
  }),
  methods: {
    menuChange: function (event) {
      this.menuSelected = event;
      console.log("Menu:" + event);
      console.log("MenuSelected:" + this.menuSelected);
    },
  },
};
</script>
