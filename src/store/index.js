import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    postsLoading: false,
    postsError: "",
  },

  getters: {
    postIndexes: (state) => state.posts.map((_, index) => index),
    postAtIndex: (state) => (index) => state.posts[index],
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPostsLoading(state, loading) {
      state.postsLoading = loading;
    },
    setPostsError(state, error) {
      state.postsError = error;
    },
  },

  actions: {
    async fetchPosts({ commit }) {
      commit("setPostsLoading", true);
      commit("setPostsError", "");

      try {
        const response = await fetch(
          "https://api.npoint.io/63c7205cc41a9edbb178"
        );

        if (!response.ok) {
          throw new Error(`Could not load posts (${response.status})`);
        }

        const posts = await response.json();

        if (!Array.isArray(posts)) {
          throw new Error("The posts response was not a list.");
        }

        commit("setPosts", posts);
      } catch (error) {
        commit("setPostsError", error.message || "Could not load posts.");
      } finally {
        commit("setPostsLoading", false);
      }
    },
  },

  modules: {},
});
