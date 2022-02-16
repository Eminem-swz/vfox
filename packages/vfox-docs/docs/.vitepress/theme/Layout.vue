<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme

const compReg = /^components\/(\w+).md$/
const route = useRoute()

const baseLink = 'demo/#/'

const demoLink = computed(() => {
  const match = route.data.relativePath.match(compReg)

  if (match && match[1]) {
    return baseLink + match[1]
  }

  return baseLink
})
</script>

<template>
  <Layout>
    <template #page-top>
      <div class="demo">
        <iframe
          v-show="baseLink !== demoLink"
          :src="demoLink"
          frameborder="0"
        ></iframe>
      </div>
    </template>
  </Layout>
</template>
