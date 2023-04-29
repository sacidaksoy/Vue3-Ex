<template lang="pug">
div
  CustomTable(:headers="headers" :items="displayedPosts")
  CustomPagination(:currentPage="pagination.currentPage" :pageCount="pages.length" @update:currentPage="pagination.currentPage = $event")
</template>

<script>
import CustomTable from "../components/CustomTable.vue";
import CustomPagination from "../components/CustomPagination.vue";

export default {
  name: "PostsTable",
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    CustomTable,
    CustomPagination,
  },
  data() {
    return {
      pagination: {
        currentPage: 1,
        pageSize: 10,
        totalItems: this.posts.length,
        items: this.posts.slice(0, 10),
      },
    };
  },
  computed: {
    displayedPosts() {
      const start =
        (this.pagination.currentPage - 1) * this.pagination.pageSize;
      const end = start + this.pagination.pageSize;
      console.log(this.posts.slice(start, end));
      return this.posts.slice(start, end);
    },
    pages() {
      const pageCount = Math.ceil(
        this.pagination.totalItems / this.pagination.pageSize
      );
      let pages = [];
      for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
      }
      return pages;
    },
    headers() {
      if (this.displayedPosts.length > 0) {
        const examplePost = this.displayedPosts[0];
        return Object.keys(examplePost);
      } else {
        return [];
      }
    },
  },
  watch: {
    posts() {
      this.pagination.totalItems = this.posts.length;
      this.pagination.currentPage = 1;
    },
    "pagination.currentPage": function () {
      const start =
        (this.pagination.currentPage - 1) * this.pagination.pageSize;
      const end = start + this.pagination.pageSize;
      this.pagination.items = this.posts.slice(start, end);
    },
  },
};
</script>
