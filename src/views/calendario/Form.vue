<template>
  <div>
    <div class="mb-2 d-flex flex-row-reverse">
      <button class="btn btn-success font-weight-bold" @click="show=true">Novo Ponto</button>
    </div>

    <modal
      :show="show"
      title="Novo Ponto"
      :saveButton="saveButton"
      :cancelButton="cancelButton"
      @close="close()"
    >
      <datepicker v-model="data" name="uniquename" :language="pt" format="dd/MM/yyyy"></datepicker>
    </modal>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import Modal from "@/components/Modal";
import pt from "vuejs-datepicker/dist/locale/translations/pt-BR"

export default {
  components: {
    Modal,
    Datepicker
  },

  data() {
    return {
      show: false,
      pt: pt,

      data: null,

      saveButton: {
        title: "Salvar",
        visible: true,
        btnClass: { "btn btn-success": true }
      },
      cancelButton: {
        title: "Cancelar",
        visible: true,
        btnClass: { "btn btn-danger": true }
      }
    };
  },

  methods: {
    close() {
      this.show = false;
    },
  }
};
</script>