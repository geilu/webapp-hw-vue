<script setup>
import { computed, ref } from "vue";
import fallbackImage from "../assets/me.png";

const props = defineProps({
  profileImageURL: { type: String, default: "" },
  username: { type: String, default: "" },
  date: { type: String, default: "" },
  imageURL: { type: String, default: "" },
  content: { type: String, default: "" },
});

const showingFallback = ref(false);
const fallbackFailed = ref(false);

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
          :alt="`${username} profile image`"
          @error="handleProfileImageError"
        />
      </a>

      <h3 class="account-name">{{ username }}</h3>
      <p class="post-date">{{ date }}</p>
    </div>

    <div v-if="imageURL" class="post-image">
      <img class="post-img" :src="imageURL" alt="Post image" />
    </div>

    <p class="account-content">{{ content }}</p>
  </article>
</template>
l
