<template>
  <div class="card-header header rounded d-flex justify-content-between">
    <button class="btn" @click="anterior">
      <font-awesome-icon icon="chevron-left" class="icon" />
    </button>

    <h4 class="mt-2">{{monthName}} - {{year}}</h4>

    <button class="btn" @click="proximo">
      <font-awesome-icon icon="chevron-right" class="icon" />
    </button>
  </div>
</template>

<script>
import NomesMes from "../../assets/js/nomesMes.js";

export default {
  props: {
    date: Date
  },

  data() {
    return {
      monthName: "",
      year: 0
    };
  },

  mounted() {
    this.getDate();
  },

  watch: {
    date() {
      this.getDate();
    }
  },

  methods: {
    getDate() {
      var month = this.date.getMonth();
      this.monthName = NomesMes[month].full;
      this.year = this.date.getFullYear();
    },

    proximo() {
      this.$emit("eventNavigation", "proximo");
    },

    anterior() {
      this.$emit("eventNavigation", "anterior");
    }
  }
};
</script>

<style scoped>
.header {
  background-color: white;
}

@media screen and (max-width: 750px) {
  h4 {
    font-size: 1.2rem;
  }
}
</style>