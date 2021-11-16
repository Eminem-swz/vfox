<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme

const compReg = /^components\/(\w+).md$/
const route = useRoute()

const baseLink = 'https://godxiaoji.github.io/vfox/demo/#/'

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
      <div>
        <iframe
          v-show="baseLink !== demoLink"
          :src="demoLink"
          frameborder="0"
          style="width: 375px; height: 667px; margin-top: 1.5rem;"
        ></iframe>
      </div>
    </template>
  </Layout>
</template>
