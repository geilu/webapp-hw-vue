<script setup>
import PageHeader from "../components/PageHeader.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function onSubmit() {
  router.push(".");
}
</script>

<template>
  <div>
    <PageHeader activeTab="signup" />
    <div class="signup-page">
      <h1>Create an account</h1>
      <form class="signup-form" @submit.prevent="onSubmit">
        <div class="signup-form-row">
          <p>Email</p>
          <input
            type="email"
            placeholder="user@example.com"
            class="signup-input"
            required
          />
        </div>
        <div class="signup-form-row">
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            class="signup-input"
            required
          />
        </div>
        <button type="submit" class="signup-button">Sign up</button>
      </form>
    </div>
  </div>
</template>

<style>
.signup-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  justify-content: center;
}
.signup-form {
  background-color: #c8e5fa;
  padding: 2em;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 20em;
  align-items: flex-end;
}
.signup-form-row {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
}
.signup-input {
  padding: 0.875em 0.5em;
  border-radius: 8px;
  align-self: center;
}
.signup-button {
  background-color: #375482;
  text-decoration: none;
  color: white;
  padding: 0.5em 1em;
  font-size: 16px;
  border-radius: 6px;
  font-weight: 800;
  cursor: pointer;
}
</style>
