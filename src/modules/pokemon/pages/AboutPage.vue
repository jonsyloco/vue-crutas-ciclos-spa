<template>
  <h1>About Page</h1>
  <hr>
  <h2 for=""> {{ name }} </h2>
  <button @click="onChangeNombre">Cambiar nombre</button>
</template>

<script>
export default {
  data() {
    return {
        name: 'Jhonatan',
    }
  },
  methods: {
    onChangeNombre() {
        this.name = 'wagner';
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    //peticiones HTTP
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>