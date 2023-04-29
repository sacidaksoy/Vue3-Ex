<template lang="pug">
.container
  Posts(:posts="store.posts")
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "./store";
import Posts from "./pages/Posts.vue";

export default defineComponent({
  name: "App",
  components: {
    Posts,
  },
  setup() {
    const store = useStore();
    store.getPosts();
    return { store };
  },
});
</script>
