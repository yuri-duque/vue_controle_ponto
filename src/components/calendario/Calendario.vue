<template>
  <div>
    <Card class="rounded">
      <CalendarioHeader :date="date" @eventNavigation="navigation($event)" />

      <div class="py-2">
        <div class="d-inline-flex col_1/14 m-1 item cursor" :key="index" v-for="(item, index) in pontos" @click="detalhes(item)">
          <CalendarioItem :day="item.day" :inputs="item.inputs"/>
        </div>
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
    propDate: Date
  },

  data() {
    return {
      date: null,
      month: 0,
      year: 0,
      pontos: []
    };
  },

  created() {
    this.date = this.propDate;
  },

  mounted() {
    this.preencherCalendario();
  },

  watch: {
    date() {
      this.preencherCalendario();
    }
  },

  methods: {
    detalhes(ponto){
      this.$emit("detalhes", ponto);
    },

    preencherCalendario() {
      this.pontos = [];
      this.month = this.date.getMonth();
      this.year = this.date.getFullYear();

      var days = this.getDiasMes();

      if (days[0].diaSemana != 0) {
        var diasPassados = this.getDiasMesPassado(days[0].diaSemana, true);

        diasPassados.forEach(element => {
          this.getPonto(element, true);
        });
      }

      days.forEach(element => {
        this.getPonto(element, false);
      });

      if (days[days.length - 1].diaSemana != 6) {
        var dias = 6 - days[days.length - 1].diaSemana;

        var diasProximos = this.getDiasMesPassado(dias, false);

        diasProximos.forEach(element => {
          this.getPonto(element, true);
        });
      }
    },

    getDiasMes(month = this.month) {
      var date = new Date(this.year, month, 1);

      var days = [];
      while (date.getMonth() === month) {
        var dia = date.getDate();
        var diaSemana = date.getDay();

        days.push({ dia, diaSemana });

        date.setDate(dia + 1);
      }

      return days;
    },

    getDiasMesPassado(numeroDias, anterior) {
      var dias = null;
      var d = null;

      if (anterior) {
        d = new Date(this.year, this.month - 1, 1);
        dias = this.getDiasMes(d.getMonth()).reverse();
      } else {
        d = new Date(this.year, this.month - 1, 1);
        dias = this.getDiasMes(d.getMonth());
      }

      return dias.filter(x => {
        var index = dias.indexOf(x);

        if (index < numeroDias) {
          return x;
        }
      });
    },

    getPonto(day, isGetInputs) {
      var inputs = {
        entrada: "08:00",
        saidaAlmoco: "12:00",
        retornoAlmoco: "13:00",
        saida: "17:00",
        meta: "08:00",
        totalHoras: 0,
        isMesPassado: false
      };

      if (isGetInputs) inputs.isMesPassado = true;

      inputs.totalHoras = this.calcularTotalHoras(inputs);

      var ponto = { day, inputs };

      this.pontos.push(ponto);
    },

    navigation(action) {
      if (action === "proximo") {
        this.date = new Date(this.year, this.month + 1);
      }

      if (action === "anterior") {
        this.date = new Date(this.year, this.month - 1);
      }
    },

    calcularTotalHoras(entradas) {
      var demanha = this.formatarDatas(
        entradas.entrada,
        entradas.saidaAlmoco,
        true,
        false
      );

      var tarde = this.formatarDatas(
        entradas.retornoAlmoco,
        entradas.saida,
        true,
        false
      );

      var totalHoras = this.formatarDatas(demanha, tarde, false, true);

      return totalHoras;
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
.col_1\/14 {
  width: 13.2%;
}

@media screen and (max-width: 1100px) {
  .col_1\/14 {
    width: 13% !important;
  }
}

@media screen and (max-width: 800px) {
  .col_1\/14 {
    width: 12.5% !important;
  }
}

@media screen and (max-width: 500px) {
  .col_1\/14 {
    width: 12% !important;
  }
}

@media screen and (max-width: 500px) {
  .col_1\/14 {
    width: 11% !important;
  }
}

.item {
  transition: 1s;
}
</style>