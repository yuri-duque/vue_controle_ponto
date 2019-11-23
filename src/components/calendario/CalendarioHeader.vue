<template>
  <div class="card-header header rounded ml-2 mr-2 d-flex justify-content-between">
    <button class="btn">
      <font-awesome-icon icon="chevron-left" />
    </button>

    <h4 class="mt-2">{{mes}} - {{ano}}</h4>

    <button class="btn">
      <font-awesome-icon icon="chevron-right" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    mes: String,
    ano: String
  }
};
</script>

<style scoped>
.header {
  background-color: white;
}
</style>