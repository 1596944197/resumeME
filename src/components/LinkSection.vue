<script lang="ts" setup>
import type { LinkProps } from '@/types/app'
import { PhAddressBook, PhAt, PhCactus, PhCirclesThree, PhPhone } from '@phosphor-icons/vue'
import { computed } from 'vue'

const props = defineProps<LinkProps>()

const parentClass = computed(() => [
  'flex',
  'items-center',
  props.showIcon && 'gap-x-1',
  props.headerFlex ? 'justify-start' : 'justify-center',
  props.headerFlex && 'w-[48.5%]',
])
</script>

<template>
  <div
    :class="[
      'flex',
      'flex-wrap',
      'items-center',
      'gap-y-0.5',
      'text-sm',
      !headerFlex && 'justify-center gap-x-2',
      'mt-2',
    ]"
  >
    <div :class="parentClass" v-if="phone">
      <PhPhone color="blue" v-if="showIcon" />
      <span v-else>联系电话：</span>
      <a
        :href="`tel:${phone}`"
        target="_blank"
        rel="noreferrer"
        class="inline-block decoration-solid underline hover:text-tRed"
        >{{ phone }}</a
      >
    </div>
    <div :class="parentClass" v-if="email">
      <PhAt color="blue" v-if="showIcon" />
      <span v-else>联系邮箱：</span>
      <a
        :href="`mailto:${email}`"
        rel="noreferrer"
        class="inline-block decoration-solid underline hover:text-tRed"
        >{{ email }}
      </a>
    </div>
    <div :class="parentClass" v-if="experience">
      <PhCactus color="blue" v-if="showIcon" />
      <span v-else>工作经验：</span>
      <span class="hover:text-tRed">{{ experience }}</span>
    </div>
    <div :class="parentClass" v-if="age">
      <PhCirclesThree color="blue" v-if="showIcon" />
      <span v-else>年龄：</span>
      <span class="hover:text-tRed">{{ age }}岁 </span>
    </div>
    <div :class="parentClass" v-if="socialAddress">
      <PhAddressBook color="blue" v-if="showIcon" />
      <span v-else>个人站点：</span>
      <a
        :href="`${socialAddress}`"
        target="_blank"
        rel="noreferrer"
        class="inline-block decoration-solid underline hover:text-tRed"
        >{{ socialAddress }}</a
      >
    </div>
  </div>
</template>

<style></style>
