<template>
  <tr>
    <th scope="row" class="table-success">{{ block.hour + ":00" }}</th>
    <td
      class="table-primary"
      v-for="(tech, index) in techniciansPerContract"
      :key="tech['id']"
    >
      <AvailableHourBox
        :box_ids="{
          contract_id: this.contractSelected.id,
          block_id: this.block.id,
          week_id: this.weekSelected.id,
          tech_id: tech['id'],
          available_id:
            availablesPerBlock?.[this.block.id]?.[index]?.['available_id'],
          checked:
            availablesPerBlock?.[this.block.id]?.[index]?.['available_id'] ==
            undefined
              ? 0
              : 1,
        }"
      ></AvailableHourBox>
    </td>
  </tr>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AvailableHourBox from "./AvailableHourBox.vue";

export default {
  name: "AvailableHours",
  props: {
    block: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    AvailableHourBox,
  },
  computed: {
    ...mapState([
      "availablesPerBlock",
      "techniciansPerContract",
      "weekSelected",
      "contractSelected",
    ]),
  },
  mounted() {
    this.fetchAvailablesPerBlock(this.block.id);
  },
  methods: {
    ...mapActions(["fetchAvailablesPerBlock"]),
  },
};
</script>
