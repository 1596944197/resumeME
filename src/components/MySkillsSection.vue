<script lang="ts" setup>
import type { MySkillsProps } from '@/types/app'

defineProps<MySkillsProps>()
</script>

<template>
  <!-- 自动换行 -->
  <div class="flex gap-2 flex-wrap">
    <div
      class="flex items-center rounded-lg bg-bgGray p-2 h-8 text-sm"
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
      <div class="font-medium mr-1 ml-1">{{ s.title }}</div>
    </div>
  </div>
</template>

<style></style>
