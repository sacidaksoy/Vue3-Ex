import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("store", {
  state: () => ({
    posts: [],
  }),
  actions: {
    async getPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.$state.posts = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
