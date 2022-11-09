<template>
  <div class="box" @click="clicked">
    <span v-if="box_data.checked" class="material-symbols-outlined">
      check
    </span>
    <span v-else class="material-symbols-outlined">
      check_indeterminate_small
    </span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AllocationsHourBox",
  props: {
    box_ids: {
      type: Object,
    },
  },
  data() {
    return {
      box_data: {},
    };
  },
  watch: {
    box_ids(newVal) {
      this.box_data = Object.assign({}, newVal);
    },
  },
  methods: {
    ...mapActions(["fetchAvailablesPerBlock", "updateAvailable"]),
    clicked() {
      this.box_data.checked = this.box_data.checked === 1 ? 0 : 1;
      console.log(this.box_data);
      this.updateAvailable(this.box_data);
    },
  },
};
</script>
<style scoped>
.box {
  cursor: pointer;
}
</style>
