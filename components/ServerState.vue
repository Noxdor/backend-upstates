<template>
  <h1 v-bind="$attrs">{{ name }}</h1>

  <p>
    Status:
    <span class="availability" :data-state="statusName">{{ statusName }}</span>
  </p>
</template>

<script lang="ts" setup>
import {} from "vue"

// types

// components

// composables

// stores

const { apiEndpoint } = defineProps<{
  name: string
  apiEndpoint: Parameters<typeof $fetch>[0]
}>()

const status = ref<boolean | null>(null)

onMounted(async () => {
  status.value = (await $fetch<{ status: boolean }>(apiEndpoint)).status
})

const statusName = computed(() => {
  switch (status.value) {
    case true:
      return "available"
    case false:
      return "unavailable"
    case null:
      return "loading ..."
  }
})
</script>

<style lang="scss" scoped>
p {
  font-size: 125%;
}
.availability {
  &[data-state="available"] {
    color: #a7c957;
  }
  &[data-state="unavailable"] {
    color: #bc4749;
  }
  &[data-state="loading"] {
    color: #f2e8cf;
  }
}
</style>
