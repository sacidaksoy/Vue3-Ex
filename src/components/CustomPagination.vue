<template lang="pug">
nav
  ul.pagination
    li.page-item(:class="{ disabled: currentPage === 1 }")
      a.page-link(@click.prevent="goToPage(currentPage - 1)") Previous
    li.page-item(v-for="page in pages" :key="page" :class="{ active: currentPage === page }")
      a.page-link(@click.prevent="goToPage(page)") {{ page }}
    li.page-item(:class="{ disabled: currentPage === pageCount }")
      a.page-link(@click.prevent="goToPage(currentPage + 1)") Next
</template>

<script>
export default {
  name: "CustomPagination",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.pageCount) {
        this.$emit("update:currentPage", page);
      }
    },
  },
  computed: {
    pages() {
      const pages = [];
      for (let i = 1; i <= this.pageCount; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page-item {
  list-style: none;
  margin: 0 5px;
}

.page-link {
  padding: 10px 15px;
  color: #333;
  background-color: #f5f5f5;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
}

.page-link:hover {
  background-color: #ddd;
}

.page-link:focus {
  outline: none;
  box-shadow: none;
}

.page-link.disabled {
  color: #999;
  pointer-events: none;
  background-color: #f5f5f5;
}

.page-link.active {
  color: white;
  background-color: #333;
}
</style>
