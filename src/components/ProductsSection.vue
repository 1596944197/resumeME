<script lang="tsx" setup>
import type { ProductProps } from '@/types/app'
const props = defineProps<ProductProps>()

function FormAtList(items?: string[]) {
  if (!items) return
  return items.map((item, index) => {
    const parts = item.split(/(<[^>]+>)/).map((part, i) => {
      if (part.startsWith('<') && part.endsWith('>')) {
        return (
          <span key={i} class="text-tRed">
            {part.slice(1, -1)}
          </span>
        )
      }
      return part
    })
    return (
      <li key={index} class="tracking-wide mx-0.5 ml-1.5 mb-1">
        {parts}
      </li>
    )
  })
}

function FormatText(input?: string) {
  if (!input) return null

  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g // 匹配 Markdown 链接
  const independentTextRegex = /(?<!\])\s*[（(]([^（）()]+)[）)]/g

  const parts = []
  let currentIndex = 0
  let match

  // 解析 Markdown 链接
  while ((match = markdownLinkRegex.exec(input)) !== null) {
    const [fullMatch, text, url] = match
    const matchIndex = match.index

    if (currentIndex < matchIndex) {
      parts.push(input.substring(currentIndex, matchIndex))
    }

    parts.push(
      <a key={matchIndex} href={url} class="text-tBlue" target="_blank">
        <u class="underline">{text}</u>
      </a>,
    )

    currentIndex = matchIndex + fullMatch.length
  }

  let independentMatch

  // 解析（独立开发）等格式
  while ((independentMatch = independentTextRegex.exec(input)) !== null) {
    const [fullIndependentMatch, independentText] = independentMatch
    const independentMatchIndex = independentMatch.index

    if (currentIndex < independentMatchIndex) {
      parts.push(input.substring(currentIndex, independentMatchIndex))
    }

    parts.push(
      <span key={independentMatchIndex} class="text-tBlue ml-1">
        ({independentText})
      </span>,
    )

    currentIndex = independentMatchIndex + fullIndependentMatch.length
  }

  // 添加最后的普通文本
  if (currentIndex < input.length) {
    parts.push(input.substring(currentIndex))
  }

  return <span>{parts}</span>
}

const RoleNode = () => FormAtList(props.role)
const BgNode = () => FormAtList(props.bg)
const ActionsNode = () => FormAtList(props.actions)
const ResultNode = () => FormAtList(props.result)
const SkillNode = () => FormAtList(props.skills)

const TitleNode = FormatText(props.title)
</script>

<template>
  <div class="space-y-2">
    <div class="flex flex-col items-start">
      <div class="flex justify-between w-full mb-1">
        <div class="text-left">
          <div class="text-tTitle font-bold mr-2 mb-1 text-base">
            <!-- slot位置 -->
            <TitleNode />
          </div>
        </div>
        <div class="shrink-0 text-right text-xs">
          <!-- slot位置 -->
          {{ time }}
        </div>
      </div>

      <div class="text-left ml-1.5">
        <div class="text-left" v-if="bg">
          <div class="text-xs font-bold text-tTitle mb-1">背景</div>
          <!-- slot位置 -->
          <ul class="list-disc col-span-5 ml-2 text-xs">
            <BgNode />
          </ul>
        </div>

        <div class="text-left" v-if="skills">
          <div class="text-xs font-bold text-tTitle mb-1">关键词</div>
          <!-- slot位置 -->
          <ul class="list-disc col-span-5 ml-2 text-xs">
            <SkillNode />
          </ul>
        </div>

        <div class="text-left" v-if="role">
          <div class="text-xs font-bold text-tTitle mb-1">角色</div>
          <!-- slot位置 -->

          <ul class="list-disc col-span-5 ml-2 text-xs">
            <RoleNode />
          </ul>
        </div>

        <div class="text-left" v-if="actions">
          <div class="text-xs font-bold text-tTitle mb-1">行动</div>
          <!-- slot位置 -->
          <ul class="list-disc col-span-5 ml-2 text-xs">
            <ActionsNode />
          </ul>
        </div>

        <div class="text-left mb-2.5" v-if="result">
          <div class="text-xs font-bold text-tTitle mb-1">
            行动 <span class="align-text-bottom">|</span>
            结果
          </div>
          <!-- slot位置 -->
          <ul class="list-disc col-span-5 ml-2 text-xs">
            <ResultNode />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
