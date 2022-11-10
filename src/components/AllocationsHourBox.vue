<template>
  <div class="box" @click="clicked">
    <span v-if="alloc_data.checked" class="material-symbols-outlined">
      check_box
    </span>
    <span v-else-if="avails_data.checked" class="material-symbols-outlined">
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
    alloc_ids: {
      type: Object,
    },
    avail_ids: {
      type: Object,
    },
  },
  data() {
    return {
      alloc_data: {},
      avails_data: {},
    };
  },
  watch: {
    alloc_ids(newVal) {
      this.alloc_data = Object.assign({}, newVal);
    },
    avail_ids(newVal) {
      this.avails_data = Object.assign({}, newVal);
    },
  },
  methods: {
    ...mapActions(["updateAllocation"]),
    clicked() {
      this.alloc_data.checked = this.alloc_data.checked === 1 ? 0 : 1;
      console.log(this.alloc_data);
      this.updateAllocation(this.alloc_data);
    },
  },
};
</script>
<style scoped>
.box {
  cursor: pointer;
}
</style>
