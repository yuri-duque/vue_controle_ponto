<template>
  <div class="container">
    <Form/>
    <Calendario :propDate="date" />
  </div>
</template>

<script>
import Form from './Form'
import Calendario from "@/components/calendario/Calendario.vue";

export default {
  name: "calendario",
  components: {
    Calendario,
    Form
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
@media screen and (max-width: 750px) {
  .container {
    max-width: 100% !important;
  }
}
</style>
