<script lang="ts" setup>
interface Props {
  title: string
  // 方向
  direction?: 'left' | 'top'
}

const { direction = 'left' } = defineProps<Props>()
</script>

<template>
  <div v-if="direction == 'top'">
    <h4 class="text-base text-tTitle font-bold">
      {{ title }}
    </h4>
  </div>
  <section
    class="grid border-t-2 p-2.5 border-black pr-1 mt-1"
    :class="[direction === 'left' ? 'grid-cols-6' : 'grid-cols-5']"
  >
    <div v-if="direction == 'left'">
      <h4 class="text-base text-tTitle font-bold">
        {{ title }}
      </h4>
    </div>
    <div class="col-span-5 grid gap-x-6 gap-y-1" style="grid-template-columns: repeat(1, 1fr)">
      <slot />
    </div>
  </section>
</template>

<style></style>
