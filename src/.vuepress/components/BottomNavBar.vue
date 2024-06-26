<template>
  <el-affix ref="affix" position="bottom" :offset="50">
    <div class="nav">
      <router-link to="/"><el-icon><DArrowLeft /></el-icon> 返回主页</router-link>
      <router-link
        v-for="item in navList"
        :to="`#${item.attributes['id'].value}`"
        :class="{ active: hash === `#${item.attributes['id'].value}` }">
        {{ item.attributes['data-ysyx-nav'].value }}
      </router-link>
      <router-link to="/docs/">开始学习 <el-icon><DArrowRight /></el-icon></router-link>
    </div>
  </el-affix>
</template>

<script lang="ts" setup>
import { Ref, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { AffixInstance } from "element-plus";
import { useResizeObserver } from '@vueuse/core'
import { useActiveHeaderHash } from "../composables/useActiveHeaderHash";

const affix = ref<AffixInstance>()
const navList: Ref<HTMLElement[]> = ref([]);
const hash = useActiveHeaderHash();

// useElementBounding in affix won't be triggered by winodw resize when element is not visible
useResizeObserver(document.body, () => {
  affix.value!.updateRoot()
})

onMounted(() => {
  navList.value = Array.from(document.querySelectorAll('[data-ysyx-nav]'));
});
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 50px;

  @media (max-width: 767px) {
    column-gap: 10px;
  }

  > a {
    display: flex;
    padding: 15px 20px 15px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background: #F0F8FF;
    border: #409EFF 1px solid;
    transition: background-color .2s, color .2s;
    color: #008cff;
  }

  > a.active, > a:hover {
    background: #409EFF;
    color: #FFFFFF;
  }

  > a, > a:hover, > a:visited {
    text-decoration: none;
  }
}
</style>