<script setup lang="ts">
import { ref } from 'vue'
import Content from '../content'
import EducationSection from './components/EducationSection.vue'
import HeaderSection from './components/HeaderSection.vue'
import LeftContentSection from './components/LeftContentSection.vue'
import LinkSection from './components/LinkSection.vue'
import PageSection from './components/PageSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import SocialSection from './components/SocialSection.vue'
import WorksSection from './components/WorksSection.vue'
import {
  type Direction,
  type EducationProps,
  type HeaderProps,
  type LinkProps,
  type ProductProps,
  type WorksProps,
} from './types/app'

const direction = ref<Direction>(Content.direction)

const professionSkills = ref(Content.skills)

const works = ref<WorksProps['works']>(Content.works)

const linkInfo = ref<LinkProps>(Content.link)

const productRef = ref<ProductProps[]>(Content.products)

const header = ref<HeaderProps>(Content.header)

const educationRef = ref<EducationProps[]>(Content.educations)

const socials = ref(Content.socials)
</script>

<template>
  <PageSection>
    <HeaderSection v-bind="header" />

    <LinkSection v-bind="linkInfo" />

    <LeftContentSection title="社交信息" :direction="direction">
      <SocialSection :socials="socials" />
    </LeftContentSection>

    <LeftContentSection title="工作经历" :direction="direction">
      <WorksSection :works="works" />
    </LeftContentSection>

    <LeftContentSection title="专业技能" :direction="direction">
      <SkillsSection :content="professionSkills" />
    </LeftContentSection>

    <LeftContentSection title="教育经历" :direction="direction">
      <EducationSection v-for="(edu, index) of educationRef" v-bind="edu" :key="index" />
    </LeftContentSection>

    <LeftContentSection title="项目经历" :direction="direction">
      <ProductsSection v-for="(product, index) of productRef" v-bind="product" :key="index" />
    </LeftContentSection>

    <LeftContentSection title="致谢" :direction="direction">
      <span class="text-xs">感谢您的耐心阅读！期待与您一起共事~~</span>
    </LeftContentSection>
  </PageSection>
</template>

<style scoped>
svg {
  margin-bottom: 0.125rem;
}
</style>
