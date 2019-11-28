<template>
  <div class="container">
    <Calendario :propDate="date" />
  </div>
</template>

<script>
// @ is an alias to /src
import Calendario from "@/components/calendario/Calendario.vue";

export default {
  name: "calendario",
  components: {
    Calendario
  },

  data() {
    return {
      date: null
    };
  },

  created() {
    this.date = new Date();
  }
};
</script>

<style scoped>
</style>
