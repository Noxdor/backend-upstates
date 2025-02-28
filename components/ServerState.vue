<template>
  <h1 v-bind="$attrs">{{ name }}</h1>

  <p>
    Status:
    <span class="availability" :data-state="statusName"
      >{{ statusName }} <span v-if="statusCode">({{ statusCode }})</span></span
    >
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
const statusCode = ref<number | null>(null)

onMounted(async () => {
  const result = await $fetch<{ status: boolean; statusCode: number }>(
    apiEndpoint,
  )

  status.value = result.status
  statusCode.value = result.statusCode
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
