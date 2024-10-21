<script lang="ts" setup>
import type { LinkProps } from '@/types/app'
import { PhAddressBook, PhAt, PhCactus, PhCirclesThree, PhPhone } from '@phosphor-icons/vue'
defineProps<LinkProps>()
</script>

<template>
  <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm justify-center mt-2">
    <div class="flex items-center gap-x-1" v-if="phone">
      <PhPhone color="blue" />
      <a :href="`tel:${phone}`" target="_blank" rel="noreferrer">{{ phone }}</a>
    </div>
    <div class="flex items-center gap-x-1" v-if="email">
      <PhAt color="blue" />
      <a :href="`mailto:${email}`" rel="noreferrer" class="inline-block decoration-solid underline"
        >{{ email }}
      </a>
    </div>
    <div class="flex items-center gap-x-1" v-if="experience">
      <PhCactus color="blue" />
      <span>{{ experience }}年开发经验</span>
    </div>
    <div class="flex items-center gap-x-1" v-if="age">
      <PhCirclesThree color="blue" />
      <span>{{ age }}岁 </span>
    </div>
    <div class="flex items-center gap-x-1" v-if="socialAddress">
      <PhAddressBook color="blue" />
      <span>{{ socialAddress }}</span>
    </div>
  </div>
</template>

<style></style>
