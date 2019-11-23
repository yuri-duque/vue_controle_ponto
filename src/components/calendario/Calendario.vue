<template>
  <div>
    <Card class="pb-2 rounded">
      <CalendarioHeader mes="Novembro" ano="2019" />

      <div class="d-inline-flex col_1/14 m-1" :key="index" v-for="(item, index) in days">
        <CalendarioItem :dia="item" />
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "../Card.vue";
import CalendarioHeader from "./CalendarioHeader.vue";
import CalendarioItem from "./CalendarioItem.vue";

export default {
  components: {
    Card,
    CalendarioHeader,
    CalendarioItem
  },

  props: {
    month: Number,
    year: Number
  },

  data() {
    return {
      days: Array,
      monthName: String
    };
  },

  mounted() {
    this.days = this.getDiasMes(this.month, this.year);
  },

  methods: {
    getDiasMes(month, year) {
      month--;

      var date = new Date(year, month, 1);
      var days = [];
      while (date.getMonth() === month) {
        var dia = date.getDate();

        days.push(dia);

        date.setDate(date.getDate() + 1);
      }

      return days;
    }
  }
};
</script>

<style scoped>
.col_1\/14 {
  width: 15.5%;
}
</style>