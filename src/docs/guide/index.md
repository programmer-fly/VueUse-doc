
# 开始使用

<CourseLink href="https://vueschool.io/courses/vueuse-for-everyone?friend=vueuse">VueUse学习视频</CourseLink>

VueUse 是一个基于 [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) 的工具集， 提前学习 [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) 相关知识，可以更快的掌握VueUse。

## 安装


```bash
npm i @vueuse/core
```

> 从 v6.0 开始, VueUse 最低需要 `vue` >= v3.2 or `@vue/composition-api` >= v1.1

###### 代码示例

- [Vite + Vue 3](https://github.com/vueuse/vueuse-vite-starter)
- [Nuxt 3 + Vue 3](https://github.com/antfu/vitesse-nuxt3)
- [Webpack + Vue 3](https://github.com/vueuse/vueuse-vue3-example)
- [Nuxt 2 + Vue 2](https://github.com/antfu/vitesse-nuxt-bridge)
- [Vue CLI + Vue 2](https://github.com/vueuse/vueuse-vue2-example)

### CDN

```html
<script src="https://unpkg.com/@vueuse/shared"></script>
<script src="https://unpkg.com/@vueuse/core"></script>
```

如果使用CDN的方式会暴露一个对象 `window.VueUse`

### Nuxt

从 v7.2.0 开始, 支持在 Nuxt 上按需引入了。

```bash
npm i -D @vueuse/nuxt @vueuse/core
```

Nuxt 3
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
  ],
})
```

Nuxt 2
```ts
// nuxt.config.js
export default {
  buildModules: [
    '@vueuse/nuxt',
  ],
}
```

如果你想在Nuxt应用的任何地方都使用VueUse 方法，可以参考下面的示例：

```html
<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div>pos: {{x}}, {{y}}</div>
</template>
```

## 示例

从`@vueuse/core`中引入你需要的方法

```ts
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

export default {
  setup() {
    // tracks mouse position
    const { x, y } = useMouse()

    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage(
      'my-storage',
      {
        name: 'Apple',
        color: 'red',
      },
    )

    return { x, y, isDark, store }
  },
}
```

更多方法查看 [全部方法](/functions) 。