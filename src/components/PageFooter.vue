<script setup>
defineProps({
  activeTab: String,
});
</script>

<template>
  <footer class="footer">
    <nav class="footer-items">
      <a href="https://ut.ee/en" class="footer-link">Privacy policy</a>
      <a href="https://ut.ee/en" class="footer-link">Terms of Service</a>
    </nav>
  </footer>
</template>

<style>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1em;
  margin-top: 3em;
  background-color: var(--background-light);
  border: 5px solid transparent;
  border-radius: 8px;
}
.footer-items a {
  color: var(--dark);
}
.footer-link {
  color: #092747;
  text-decoration: none;
  padding: 0.5em 1em;
  text-transform: uppercase;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
  border-radius: 8px;
  font-weight: 400;
}
.footer-link:hover {
  background-color: #a2ccea;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
}
</style>
