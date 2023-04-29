<template lang="pug">
div
  table.table.table-borderless
    thead
      tr
        th User Id
        th Id
        th Title
        th Body
    tbody
      tr(v-for="post in displayedPosts" :key="post.id")
        td {{ post.userId }}
        td {{ post.id }}
        td {{ post.title }}
        td {{ post.body }}
  div
    nav
      ul.pagination
        li.page-item(:class="{ disabled: pagination.currentPage === 1 }")
          a.page-link(href="#" @click.prevent="pagination.currentPage -= 1")
            | Previous
        li.page-item(v-for="page in pages" :key="page" :class="{ active: pagination.currentPage === page }")
          a.page-link(href="#" @click.prevent="pagination.currentPage = page") {{ page }}
        li.page-item(:class="{ disabled: pagination.currentPage === pages.length }")
          a.page-link(href="#" @click.prevent="pagination.currentPage += 1")
            | Next
</template>

<script>
export default {
  name: "PostsTable",
  props: {
    posts: {
      type: Array,
      required: true,
    },
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
      const start = (this.pagination.currentPage - 1) * this.pagination.pageSize;
      const end = start + this.pagination.pageSize;
      return this.posts.slice(start, end);
    },
    pages() {
      const pageCount = Math.ceil(this.pagination.totalItems / this.pagination.pageSize);
      const pages = [];
      for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
};
</script>

<style>
.table {
  border-collapse: separate;
  border-spacing: 0;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
}

.table td,
.table th {
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
}

.table th {
  background-color: #f5f5f5;
  white-space: nowrap;
  /* text-align: left; */
  font-weight: bold;
  color: #333;
}

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
