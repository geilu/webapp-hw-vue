<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import PageHeader from "../components/PageHeader.vue";
import PostList from "../components/PostList.vue";

const store = useStore();
const posts = computed(() => store.state.posts);

onMounted(() => {
  store.dispatch("fetchPosts");
});
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
        />
      </section>
    </div>
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
