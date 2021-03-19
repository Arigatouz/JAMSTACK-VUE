<template>
  <div class="row">
    <div
      class="card"
      style="width: 18rem;"
      v-for="data of dataArray"
      :key="data._id"
    >
      <img
        src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        class="card-img-top"
        alt="normal Image"
      />
      <div class="card-body">
        <h5 class="card-title">{{ data.name }}</h5>
        <p class="card-text">
          {{ data.description }}
        </p>
        <p class="card-text">
          Finished :
          {{ data.finished ? "yes" : "no" }}
        </p>
        <a :href="data.urls" class="btn btn-primary">Visit Site</a>

        <input
          @click="deleteTodo(data._id, data.finished)"
          class="btn btn-danger mt-3 mt-sm-0"
          type="submit"
          value="Delete Todo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoComponent",
  data() {
    return {
      dataArray: [],
    };
  },
  mounted() {
    fetch("/api/getTodo")
      .then((res) => res.json())
      .then((data) => (this.dataArray = data))
      .catch((error) => {
        console.log(error.message);
        throw new Error(`Couldn't Fetch Data from Server`);
      });
  },
  methods: {
    async deleteTodo(_id, finished) {
      console.log(finished);
      try {
        const res = await fetch("/api/deleteTodo", {
          method: "DELETE",
          body: JSON.stringify({ _id }),
        });
        window.location.reload();
      } catch (error) {
        console.log(error.message);
        throw new Error(`can't delete right now`);
      }
    },
  },
};
</script>

<style scoped></style>
