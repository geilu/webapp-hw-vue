<template>
  <router-view />
</template>

<style>
:root {
  --background-dark: #a2ccea;
  --background-light: #c8e5fa;
  --background-pale: #e9f8ff;
  --button-cta: #375482;
  --button-cta-hover: #293675;
  --button-secondary: #7398cd;
  --button-secondary-hover: #6584be;
  --border-medium: #4775a6;
  --dark: #092747;
  --gray: #646174;
  --error: #c90a0a;
  font-size: 1.1rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  line-height: 1.6;
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

.post-info {
  padding: 0.5em 0.75em;
  display: flex;
  align-items: center;
  gap: 0.75em;
  color: #34495e;
  font-size: 0.99em;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 100%;
  max-width: 50em;
}

.post-img {
  width: 100%;
}

.post-date {
}

.content-center {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.img {
  float: right;
}

.account-img {
  display: block;
  width: 3em;
  height: 3em;
}
</style>
