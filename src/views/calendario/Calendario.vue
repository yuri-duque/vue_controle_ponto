<template>
  <div class="container">
    <Calendario :month="10" :year="2019" />
  </div>
</template>

<script>
// @ is an alias to /src
import Calendario from "@/components/calendario/Calendario.vue";

export default {
  name: "calendario",
  components: {
    Calendario
  }
};
</script>

<style scoped>
</style>
