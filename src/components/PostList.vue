<script setup>
import { computed, ref } from "vue";
import fallbackImage from "../assets/me.png";

const props = defineProps({
  profileImageURL: { type: String, default: "" },
  username: { type: String, default: "" },
  date: { type: String, default: "" },
  imageURL: { type: String, default: "" },
  content: { type: String, default: "" },
  likes: { type: Number, default: 0 },
});

const showingFallback = ref(false);
const fallbackFailed = ref(false);
const emit = defineEmits(["like"]);

const profileImageSrc = computed(() =>
  props.profileImageURL && !showingFallback.value
    ? props.profileImageURL
    : fallbackImage
);

function handleProfileImageError() {
  if (profileImageSrc.value === fallbackImage) {
    fallbackFailed.value = true;
  } else {
    showingFallback.value = true;
  }
}
</script>

<template>
  <article class="post">
    <div class="post-info">
      <a href="#">
        <img
          v-if="!fallbackFailed"
          class="account-img"
          :src="profileImageSrc"
          :alt="`profile`"
          @error="handleProfileImageError"
        />
      </a>

      <h3>{{ username }}</h3>
      <p class="post-date">{{ date }}</p>
    </div>

    <div v-if="imageURL">
      <img class="post-img" :src="imageURL" alt="Post image" />
    </div>

    <p class="post-content">{{ content }}</p>
    <button @click="emit('like')" class="like-button">{{ likes }} Like</button>
  </article>
</template>
l
<style scoped>
.post-img {
  width: 100%;
}
.post-content {
  text-align: justify;
}
.post-date {
}

.post-info {
  padding: 0.5em 0.75em;
  display: flex;
  align-items: center;
  gap: 0.75em;
  color: #34495e;
  font-size: 0.99em;
}
.post {
  display: flex;
  padding: 1em;
  border-radius: 8px;
  flex-direction: column;
  gap: 1em;
  border: 1px solid transparent;
  background-color: var(--background-light);
}
.account-img {
  display: block;
  width: 3em;
  height: 3em;
}
.like-button {
  border: none;
  cursor: pointer;
  background-color: var(--button-secondary);
  width: fit-content;
  align-self: flex-start;
  color: white;
  font-weight: 600;
  padding: 0.2em 0.5em;
  border-radius: 4px;
  font-size: 16px;
}
</style>
