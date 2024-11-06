<script lang="ts" setup>
import type { MySkillsProps } from '@/types/app'

defineProps<MySkillsProps>()
</script>

<template>
  <!-- 自动换行 -->
  <div class="flex gap-1.5 flex-wrap">
    <div
      class="flex items-center rounded-lg bg-bgGray px-2 h-7 text-sm hover:scale-110 transition duration-300"
      v-for="(s, i) of content"
      :key="i"
    >
      <img
        class="inline mr-1 ml-1"
        width="18"
        height="18"
        :alt="s.title"
        :src="`https://cdn.simpleicons.org/${s.icon}`"
      />
      <div class="font-medium mr-1 ml-1 hover:scale-110 transition">{{ s.title }}</div>
    </div>
  </div>
</template>

<style></style>
