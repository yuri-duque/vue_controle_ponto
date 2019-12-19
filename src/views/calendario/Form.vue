<template>
  <div>
    <div class="mb-2 d-flex flex-row-reverse">
      <button class="btn btn-success" @click="show=true">Novo Ponto</button>
    </div>

    <modal
      :show="show"
      title="Novo Ponto"
      :saveButton="saveButton"
      :cancelButton="cancelButton"
      @close="close()"
    ></modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  components: {
    Modal
  },

  data() {
    return {
      show: false,

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
    }
  }
};
</script>