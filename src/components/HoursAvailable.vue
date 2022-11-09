<template>
  <tr>
    <th scope="row" class="table-success">{{ block.hour + ":00" }}</th>
    <td
      class="table-primary"
      v-for="(tech, index) in techniciansPerContract"
      :key="tech['available_id']"
    >
      <span
        v-if="availablesPerBlock?.[this.block.id]?.[index]?.['available_id']"
        class="material-symbols-outlined"
      >
        check
      </span>
      <span v-else>-</span>
    </td>
  </tr>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HoursAvailable",
  props: {
    block: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapState(["availablesPerBlock", "techniciansPerContract"]),
  },
  mounted() {
    this.fetchAvailablesPerBlock(this.block.id);
  },
  methods: {
    ...mapActions(["fetchAvailablesPerBlock"]),
  },
};
</script>
