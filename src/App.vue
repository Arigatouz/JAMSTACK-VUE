<template>
  <div>
    <main
      class="d-flex align-items-center position-relative bg-dark bg-size-cover bg-position-center min-vh-100 overflow-hidden pt-6 pb-lg-5"
    >
      <div class="container">
        <Header />
      </div>
    </main>
    <form-component></form-component>
    <todo-component></todo-component>
  </div>
</template>

<script>
import TodoComponent from "./components/TodoComponent";
import Header from "./components/Header";
import FormComponent from "./components/FormComponent";

export default {
  components: {
    Header,
    TodoComponent,
    FormComponent,
  },
};
</script>

<style>

#app {
  font-family: "Courier New", Courier, monospace;
  background-color: rgb(206, 142, 142);
  padding: 3rem;
}
main {
  background-image: url(https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
