<template lang="pug">
.container
  PostsTable(:posts="store.posts")
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "./store";
import PostsTable from './components/PostsTable.vue'

export default defineComponent({
  name: "App",
  components: {
    PostsTable,
  },
  setup() {
    const store = useStore();
    store.getPosts();
    return { store };
  },
});
</script>