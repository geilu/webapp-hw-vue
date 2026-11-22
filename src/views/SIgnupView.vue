<script setup>
import PageHeader from "../components/PageHeader.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import PageFooter from "@/components/PageFooter.vue";

const router = useRouter();
const password = ref("");
const error = ref("");

function onSubmit() {
  error.value = validatePassword(password.value);
  if (error.value) {
    return; // stay on page and show error
  }
  router.push(".");
}

function validatePassword(password) {
  // specific length 8 <= pw <= 15
  if (password.length < 8 || password.length > 15) {
    return "length should be between 8 and 15";
  }
  // start with an uppercase char (also covers at least 1)
  if (!password.match(/^[A-Z]/)) {
    return "should start with an uppercase character";
  }
  // at least two lowercase chars
  const lowercaseCount = (password.match(/[a-z]/g) || []).length;
  if (lowercaseCount < 2) {
    return "should include at least two lowercase characters";
  }
  // at least one numeric value
  const digitCount = (password.match(/\d/g) || []).length;
  if (digitCount < 1) {
    return "should include at least one number";
  }
  // includes "_"
  if (!password.includes("_")) {
    return "should include an underscore";
  }

  return "";
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
        <div class="signup-password-container">
          <div class="signup-form-row">
            <p>Password</p>
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="signup-input"
              required
            />
          </div>
          <p v-if="error" class="error">Password invalid - {{ error }}</p>
        </div>
        <button type="submit" class="signup-button">Sign up</button>
        <div class="requirements-container">
          <h3>Password requirements</h3>
          <ul class="requirements-list">
            <li>
              <p>Must be between 8 and 15 characters</p>
            </li>
            <li>
              <p>Must include at least one uppercase character</p>
            </li>
            <li>
              <p>Must include at least two lowercase characters</p>
            </li>
            <li>
              <p>Must include at least one number</p>
            </li>
            <li>
              <p>Must begin with an uppercase character</p>
            </li>
            <li>
              <p>Must include an underscore "_"</p>
            </li>
          </ul>
        </div>
      </form>
    </div>
    <PageFooter></PageFooter>
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
  font-size: 16px;
}
.signup-password-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
.requirements-container {
  display: flex;
  flex-direction: column;
  align-self: start;
}
.requirements-container h3 {
  text-align: left;
  margin: 0;
  padding: 0;
}
.error {
  color: red;
  text-align: right;
  font-size: 14px;
  margin: 0;
}
.requirements-list {
  margin-left: 1em;
  margin-top: 0;
  padding: 0;
}
.requirements-list li {
  text-align: left;
}
</style>
