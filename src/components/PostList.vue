<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  postIndex: {
    type: Number,
    required: true,
  },
});

const store = useStore();
const post = computed(() => store.getters.postAtIndex(props.postIndex));
</script>

<template>
  <article v-if="post" class="post">
    <div class="post-info">
      <a href="#">
        <img
          class="account-img"
          :src="post.profileImageURL || '/res/images/me.png'"
          alt="profile"
        />
      </a>

      <h3 class="account-name">{{ post.username }}</h3>
      <p class="post-date">{{ post.date }}</p>
    </div>

    <div v-if="post.imageURL" class="post-image">
      <img class="post-img" :src="post.imageURL" alt="post image" />
    </div>

    <p class="account-content">{{ post.content }}</p>
  </article>
</template>
