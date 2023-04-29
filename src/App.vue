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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
