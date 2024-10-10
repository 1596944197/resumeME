<script lang="ts" setup>
import type { SocialProps } from '@/types/app'

defineProps<{
  socials: SocialProps[]
}>()
</script>

<template>
  <div class="col-span-4 grid gap-x-6 text-sm" style="grid-template-columns: repeat(1, 1fr)">
    <div class="space-y-2" v-for="(s, i) of socials" :key="i">
      <div>
        <div class="flex items-center gap-x-1.5">
          <img class="ph" width="14" height="14" :alt="s.name" :src="s.iconUrl" />
          <div class="font-medium w-20">{{ s.name }}：</div>
          <a
            :href="s.a_href"
            target="_blank"
            rel="noreferrer noopener nofollow"
            class="inline-block decoration-solid underline text-tBlue"
            >{{ s.value }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
