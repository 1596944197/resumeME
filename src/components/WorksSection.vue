<script lang="tsx" setup>
import type { WorksProps } from '@/types/app'

function FormAtList(items?: WorksProps['works']) {
  if (!items) return
  return items.map((item, index) => {
    return (
      <div class="space-y-1" key={index}>
        <div class="flex items-start justify-between">
          <div class="text-left">
            <span class="text-sm text-tTitle font-bold mr-2"> {item.company}</span>
            <span class="text-xs">{item.depart}</span>
            <span>_</span>
            <span class="text-xs">{item.role}</span>
          </div>
          <div class="shrink-0 text-right text-xs">
            <div>{item.time}</div>
          </div>
        </div>
        {item.bg && (
          <ul class="ml-4">
            <li class="text-xs">{item.bg}</li>
          </ul>
        )}
      </div>
    )
  })
}

const props = defineProps<WorksProps>()

const SectionNode = () => FormAtList(props.works)
</script>

<template>
  <div class="col-span-5 grid gap-x-6 gap-y-1" style="grid-template-columns: repeat(1, 1fr)">
    <SectionNode />
  </div>
</template>

<style></style>
