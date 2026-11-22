<script setup>
defineProps({
  activeTab: String,
});
</script>

<template>
  <div class="page-header">
    <nav>
      <router-link
        to="/"
        class="header-link"
        :class="{ active: activeTab === 'home' }"
        >Home</router-link
      >
      <router-link
        to="/signup"
        class="header-link"
        :class="{ active: activeTab === 'signup' }"
        >Sign up</router-link
      >
    </nav>
  </div>
</template>

<style>
.page-header {
  background-color: #c8e5fa;
  display: flex;
  flex-direction: row;
  padding: 1.5em;
  justify-content: space-between;
}
.header-link {
  color: #092747;
  text-decoration: none;
  padding: 0.5em 1em;
  text-transform: uppercase;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
  border-radius: 8px;
  font-weight: 800;
}
.header-link:hover {
  background-color: #a2ccea;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
}
.active {
  text-decoration: underline;
}
</style>
