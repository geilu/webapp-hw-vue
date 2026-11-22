<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import PageHeader from "../components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import PostList from "../components/PostList.vue";

const store = useStore();
const posts = computed(() => store.state.posts);

onMounted(() => {
  store.dispatch("fetchPosts");
});

function handleLike(postId) {
  store.commit("likePost", postId);
}

function resetLikes() {
  store.commit("resetLikes");
}
</script>

<template>
  <div>
    <PageHeader activeTab="home" />
    <div class="content-center">
      <section id="post-list" class="post-list">
        <PostList
          v-for="(post, index) in posts"
          :key="index"
          :profileImageURL="post.profileImageURL"
          :username="post.username"
          :date="post.date"
          :imageURL="post.imageURL"
          :content="post.content"
          :likes="post.likes ?? 0"
          @like="handleLike(post.id)"
        />
      </section>
      <button v-on:click="resetLikes">Reset likes</button>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>
<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 100%;
  max-width: 50em;
}

.content-center {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
