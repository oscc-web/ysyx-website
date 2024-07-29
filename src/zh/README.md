---
lastUpdated: false
contributors: false
containerClass: "home"
home: true
---

<TheHome />

```ts{1,7-9} :no-line-numbers
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```