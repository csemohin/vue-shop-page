<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" :to="{ path: '/' }"
        >Ecommerce</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <form @keydown="search(keyword)" class="form-inline my-2 my-lg-0">
          <input
            v-model="keyword"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    ...mapActions(["search"]),
    searching() {
      this.search(this.keyword);
    }
  }
};
</script>

<style lang="scss" scoped></style>
