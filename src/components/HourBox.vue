<template>
  <span
    v-if="availablesPerBlock?.[this.block.id]?.[index]?.['available_id']"
    class="material-symbols-outlined"
  >
    check
  </span>
  <span v-else class="material-symbols-outlined">
    check_indeterminate_small
  </span>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HourBox",
  props: {
    box_ids: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.fetchAvailablesPerBlock(this.block.id);
  },
  methods: {
    ...mapActions(["fetchAvailablesPerBlock"]),
  },
};
</script>
