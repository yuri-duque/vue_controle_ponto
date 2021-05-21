<template>
  <div>
    <div class="modal" ref="modal" :class="show? 'modal-open' : 'modal-close'">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Cabeçalho do Modal -->
          <div class="modal-header d-flex justify-content-between align-middle">
            <p class="font-weight-bold mb-0 title">{{title}}</p>
            <font-awesome-icon icon="times" class="icon cursor title mt-1" @click="close" />
          </div>

          <!-- Corpo do Modal -->
          <div class="modal-body">
            <slot></slot>
          </div>

          <!-- Rodapé do Modal -->
          <div class="modal-footer d-flex justify-content-between">
            <button type="button" class="btn btn-danger" @click="close">{{textCancelButton}}</button>
            <button type="button" class="btn btn-success" @click="save">{{textSaveButton}}</button>
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

    isSaveButton: Boolean,
    textSaveButton: { type: String, default: "Salvar" },

    isCancelButton: Boolean,
    textCancelButton: { type: String, default: "Cancelar" },
  },

  methods: {
    close() {
      this.$emit("close");
    },

    save(){
      this.$emit("save");
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

.modal-header {
  padding: 10px;
}

.title {
  font-size: 19px;
}
</style>