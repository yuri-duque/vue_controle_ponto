<template>
  <div>
    <modal
      :show="show"
      title="Detalhes"
      :saveButton="saveButton"
      :cancelButton="cancelButton"
      @close="close()"
    >
      jlaskjdfhasçf~çlknl ioknflknj kjçlnhsdfçj
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  components: {
    Modal
  },

  props:{
      show: Boolean
  },

  data() {
    return {
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
      this.$emit("close")
    }
  }
};
</script>