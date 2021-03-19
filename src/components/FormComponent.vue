<template>
  <form @submit.prevent="createTodo">
    <div class="d-flex mb-5 flex-column h-100 bg-light rounded-3 shadow-lg p-4">
      <div class="py-2 p-md-3">
        <div class="row">
          <div class="col-sm-6">
            <div class="mb-3 pb-1">
              <label class="form-label px-0" for="account-fn"> Name</label>
              <input
                class="form-control"
                type="text"
                id="account-fn"
                v-model="name"
                required
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="mb-3 pb-1">
              <label class="form-label px-0" for="account-ln"
                >Description</label
              >
              <textarea
                class="form-control"
                type="text"
                id="account-ln"
                v-model="description"
                required
              ></textarea>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="mb-3 pb-1">
              <label class="form-label px-0" for="account-country"
                >Finished</label
              >
              <select
                class="form-select"
                id="account-country"
                v-model="finished"
              >
                <option :value="true">yes</option>
                <option :value="false">no</option>
              </select>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="mb-3 pb-1">
              <label class="form-label px-0" for="account-city">LINK</label>
              <input
                class="form-control"
                type="text"
                id="account-city"
                v-model="urls"
                required
              />
            </div>
          </div>

          <div class="col-12">
            <hr class="mt-2 mb-4" />
            <div
              class="d-flex flex-wrap justify-content-between align-items-center"
            >
              <div class="form-check d-block">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="show-email"
                  checked=""
                />
                <label class="form-check-label" for="show-email"
                  >Show my email to registered users</label
                >
              </div>
              <input
                class="btn btn-primary mt-3 mt-sm-0"
                type="submit"
                value="Add New"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: "FormComponent",
  data() {
    return {
      name: "",
      urls: "",
      description: "",
      finished: null,
    };
  },
  methods: {
    async createTodo() {
      console.log(this.finished);
      const name = this.name;
      const description = this.description;
      const urls = `http://${this.urls}`;
      const finished = this.finished;
      console.log(finished);
      const body = { name, description, urls, finished };
      console.log(body);
      try {
        await fetch("/api/createTodo", {
          method: "POST",
          body: JSON.stringify(body),
        });
      } catch (error) {
        console.log(error.message);
        throw new Error(`Can't create new Todo`);
      }
      window.location.reload();
    },
  },
};
</script>

<style scoped></style>
