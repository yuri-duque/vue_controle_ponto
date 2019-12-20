<template>
  <card class="w-100" :class="inputs.isMesPassado ? 'mesPassado' : 'mesAtual'">
    <div
      class="mesHora d-flex justify-content-between mb-0 rounded pl-2 pr-2 pt-2 pb-0"
      :class="inputs.totalHoras < inputs.meta ? 'bg-danger' : 'bg-success'"
    >
      <h6 class="font-weight-bold">{{day.dia}}</h6>
      <p class="font-weight-bold mb-0">{{inputs.totalHoras}}</p>
    </div>

    <div class="p-2">
      <div class="d-flex justify-content-between mb-0">
        <p class="informacao mb-0">Entrada:</p>
        <p class="horario mb-0">{{inputs.entrada}}</p>
      </div>

      <div class="d-flex justify-content-between mb-0">
        <p class="informacao mb-0">Saída:</p>
        <p class="horario mb-0">{{inputs.saidaAlmoco}}</p>
      </div>

      <div class="d-flex justify-content-between mb-0">
        <p class="informacao mb-0">Retorno:</p>
        <p class="horario mb-0">{{inputs.retornoAlmoco}}</p>
      </div>

      <div class="d-flex justify-content-between mb-0">
        <p class="informacao mb-0">Saída:</p>
        <p class="horario mb-0">{{inputs.saida}}</p>
      </div>
    </div>
  </card>
</template>

<script>
import Card from "../Card.vue";

export default {
  components: {
    Card
  },

  props: {
    day: Object,
    inputs: Object
  },

  methods:{

  }
};
</script>

<style scoped>
.mesPassado {
  filter: opacity(0.4) grayscale(100%);
  transition: opacity 2s linear;
}

.mesAtual {
  filter: opacity(0.8);
  transition: opacity 2s;
}

@media screen and (max-width: 992px) {
  .informacao {
    display: none;
  }

  .mesHora {
    display: block !important;
  }
}

@media screen and (max-width: 800px) {
}

@media screen and (max-width: 500px) {
  .informacao {
    display: none;
  }

  .mesHora {
    display: block !important;
  }

  h6 {
    font-size: 0.8rem;
  }

  p {
    font-size: 10px !important;
  }
}

p {
  font-size: 12px;
}
</style>