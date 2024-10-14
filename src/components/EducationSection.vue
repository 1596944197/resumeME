<script lang="ts" setup>
import type { EducationProps } from '@/types/app'

defineProps<EducationProps>()
</script>

<template>
  <div class="col-span-5 grid gap-x-6 gap-y-1" style="grid-template-columns: repeat(1, 1fr)">
    <div class="space-y-2">
      <div class="flex items-start justify-between">
        <div class="text-left">
          <div class="text-sm text-tTitle font-bold mr-2">{{ school }}</div>
          <span class="text-xs mr-3">{{ major }}</span>
          <span class="text-xs mr-3">{{ degree }}</span>
          <span class="text-xs mr-3" v-if="gpa">GPA: {{ gpa }}</span>
        </div>
        <div class="shrink-0 text-right text-xs">
          <div>{{ time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
