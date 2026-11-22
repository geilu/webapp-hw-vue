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
</script>

<template>
  <div>
    <PageHeader activeTab="home" />
    <div class="content-center">
      <section id="post-list" class="post-list">
        <PostList
          v-for="post in posts"
          :key="post.id"
          :profileImageURL="post.profileImageURL"
          :username="post.username"
          :date="post.date"
          :imageURL="post.imageURL"
          :content="post.content"
        />
      </section>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>
