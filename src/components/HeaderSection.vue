<script lang="ts" setup>
import type { HeaderProps } from '@/types/app'

defineProps<HeaderProps>()
</script>

<template>
  <div>
    <img
      v-if="showImg"
      :src="
        avatar ||
        'https://mh33.top:81/api/check-file/c52b0426d5164e3ab172732611bfd650bbf962f0adb00c8ccdd742dbf820e515/3BDD15C4269F36997F16927F928C5B07_1726012519644.jpeg'
      "
      alt="Profile"
      class="relative z-20 object-cover block m-auto"
      style="max-width: 64px; aspect-ratio: 1 / 1; border-radius: 0px; border-width: 0px"
    />
    <div class="text-2xl font-bold text-center mt-2 tracking-wider">{{ name }}</div>
  </div>
</template>

<style></style>
