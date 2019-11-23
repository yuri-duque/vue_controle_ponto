<template>
  <card class="w-100">
    <div
      class="mesHora d-flex justify-content-between mb-0 rounded pl-2 pr-2 pt-2 pb-0"
      :class="ponto.totalHoras < ponto.meta ? 'bg-danger' : 'bg-success'"
    >
      <h6 class="font-weight-bold">{{ponto.dia}}</h6>
      <p class="font-weight-bold mb-0">{{ponto.totalHoras}}</p>
    </div>

    <div class="p-2">
      <div class="d-flex justify-content-between mb-0">
        <p class="informacao mb-0">Entrada:</p>
        <p class="horario mb-0">{{ponto.entrada}}</p>
      </div>

      <div class="d-flex justify-content-between mb-0">
        <p class="informacao mb-0">Saída almoço:</p>
        <p class="horario mb-0">{{ponto.saidaAlmoco}}</p>
      </div>

      <div class="d-flex justify-content-between mb-0">
        <p class="informacao mb-0">Retorno almoço:</p>
        <p class="horario mb-0">{{ponto.retornoAlmoco}}</p>
      </div>

      <div class="d-flex justify-content-between mb-0">
        <p class="informacao mb-0">Saída:</p>
        <p class="horario mb-0">{{ponto.saida}}</p>
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
    dia: Number
  },

  data() {
    return {
      ponto: Object
    };
  },

  mounted() {
    this.getPonto(this.dia);
  },

  methods: {
    getPonto(dia) {
      var entrada = "08:00";
      var saidaAlmoco = "12:00";
      var retornoAlmoco = "13:00";
      var saida = "17:00";
      var meta = "08:00";

      var demanha = this.formatarDatas(entrada, saidaAlmoco, true, false);
      var tarde = this.formatarDatas(retornoAlmoco, saida, true, false);

      var totalHoras = this.formatarDatas(demanha, tarde, false, true);

      this.ponto = {
        dia,
        entrada,
        saidaAlmoco,
        retornoAlmoco,
        saida,
        totalHoras,
        meta
      };
    },

    formatarDatas(hrA, hrB, zerarHora, somar) {
      hrA = hrA.split(":");
      hrB = hrB.split(":");

      var hora1 = hrA[0];
      var hora2 = hrB[0];

      var minu1 = hrA[1];
      var minu2 = hrB[1];

      if (somar) {
        return this.somaHora(hora1, hora2, minu1, minu2, zerarHora);
      } else {
        return this.diminuirHoras(hora1, hora2, minu1, minu2, zerarHora);
      }
    },

    diminuirHoras(hora1, hora2, minu1, minu2, zerarHora) {
      var temp = 0;
      var nova_h = 0;
      var novo_m = 0;

      temp = parseInt(minu1 - minu2);
      while (temp > 59) {
        nova_h++;
        temp = temp - 60;
      }
      novo_m = temp.toString().length == 2 ? temp : "0" + temp;

      temp = hora1 - hora2 - nova_h;
      while (temp > 23 && zerarHora) {
        temp = temp - 24;
      }
      nova_h = temp.toString().length == 2 ? temp : "0" + temp;

      nova_h = nova_h * -1;

      return nova_h + ":" + novo_m;
    },

    somaHora(hora1, hora2, minu1, minu2, zerarHora) {
      var temp = 0;
      var nova_h = 0;
      var novo_m = 0;

      temp = parseInt(minu1 + minu2);
      while (temp > 59) {
        nova_h++;
        temp = temp - 60;
      }
      novo_m = temp.toString().length == 2 ? temp : "0" + temp;

      temp = parseInt(hora1) + parseInt(hora2) + nova_h;
      while (temp > 23 && zerarHora) {
        temp = temp - 24;
      }
      nova_h = temp.toString().length == 2 ? temp : "0" + temp;

      return nova_h + ":" + novo_m;
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 750px) {
  .informacao {
    display: none;
  }

  .mesHora {
    display: block !important;
  }
}

p {
  font-size: 12px;
}
</style>