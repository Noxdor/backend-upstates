<template>
  <div class="container">
    <h1>PTT SERVER AVAILABILITY</h1>
    <ServerState
      name="Staging"
      api-endpoint="/api/status/staging"
      style="margin-top: 2rem"
    />
    <ServerState name="Production" api-endpoint="/api/status/production" />
  </div>
</template>

<script setup lang="ts"></script>

<style>
:root {
  --clr-primary: #ff9800;
  --clr-secondary: #33383e;
  font-family: Roboto;
  letter-spacing: 2%;
  color: #f7f7f7;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
body {
  background-color: black;
}

h1:not(:first-child) {
  margin-top: 1rem;
}

h2:not(:first-child) {
  margin-top: 0.5rem;
}

p:not(:first-child) {
  margin-top: 0.25rem;
}
</style>

<style lang="scss" scoped>
h1 {
  /* color: var(--clr-primary); */
  position: relative;
  &::after {
    content: "";
    border-radius: 8px;
    position: absolute;
    left: 0;
    bottom: -8px;
    height: 2px;
    width: 100%;
    background-color: var(--clr-primary);
  }
}
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -70%;
  width: 80ch;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--clr-secondary);
  box-shadow: 8px 8px 12px 0px rgb(from var(--clr-primary) r g b / 0.2);
}
</style>
