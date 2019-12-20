<template>
  <div class="container">
    <Form/>
    <Detalhes :show="showDetalhes" @close="closeDetalhes"/>
    <Calendario :propDate="date" @detalhes="openDetalhes($event)"/>
  </div>
</template>

<script>
import Form from './Form';
import Detalhes from './Detalhes';
import Calendario from "@/components/calendario/Calendario.vue";

export default {
  name: "calendario",
  components: {
    Calendario,
    Form,
    Detalhes
  },

  data() {
    return {
      date: null,

      showDetalhes: false
    };
  },

  created() {
    this.date = new Date();
  },

  methods:{
    openDetalhes(){
      this.showDetalhes = true;
    },

    closeDetalhes(){
      this.showDetalhes = false;
    }
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
