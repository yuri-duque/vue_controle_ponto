<template>
  <div>
    <div class="modal" ref="modal" :class="show? 'modal-open' : 'modal-close'">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Cabeçalho do Modal -->
          <div class="modal-header">
            <h2>Apresentando Modal</h2>
          </div>

          <!-- Corpo do Modal -->
          <div class="modal-body">
            <p>Mostrando Modal em BootStrap</p>
          </div>

          <!-- Rodapé do Modal -->
          <div class="modal-footer">
            <button class="btn btn-danger" @click="close()">Fechar Modal</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StackModal",
  props: {
    show: Boolean,

    title: String,

    saveButton: {
      type: Object,
      default: () => ({})
    },

    cancelButton: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.modal {
  z-index: 3;
  padding-top: 10%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-open {
  display: block;
  animation: slide-up 0.5s ease;
}

.modeal-close {
  display: none;
  animation: slide-down 0.5s ease;
}

@keyframes slide-up {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-down {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>