<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import PageHeader from "../components/PageHeader.vue";
import PostListCard from "../components/PostList.vue";

const store = useStore();

const postIndexes = computed(() => store.getters.postIndexes);

onMounted(() => {
  store.dispatch("fetchPosts");
});
</script>

<template>
  <div>
    <PageHeader activeTab="home" />
    <h1>Posts</h1>
    <div class="content-center">
      <section id="post-list" class="post-list">
        <PostListCard
          v-for="postIndex in postIndexes"
          :key="postIndex"
          :post-index="postIndex"
        />
      </section>
    </div>
  </div>
</template>
