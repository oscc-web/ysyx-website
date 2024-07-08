<template>
  <el-affix ref="affix" position="bottom" :offset="50">
    <div class="nav">
      <router-link to="/">返回主页</router-link>
      <span class="divider"></span>
      <router-link
        v-for="item in navList"
        :to="`#${item.attributes['id'].value}`"
        :class="{ active: hash === `#${item.attributes['id'].value}` }">
        {{ item.attributes['data-ysyx-nav'].value }}
      </router-link>
      <span class="divider"></span>
      <router-link to="/docs/">开始学习</router-link>
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
  position: fixed;
  bottom: 0;
  left: 0;  
  right: 0; 
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.3); 
  /* width: 100%; */
  height: 65px;
  z-index: 999;

  column-gap: 10px;

  @media (max-width: 600px) {
    // column-gap: 10px;
    // display: none;
  }

  > a {
    display: flex;
    padding: 15px 7px 15px 7px;
    justify-content: center;
    align-items: center;
    // border-radius: 25px;
    // background: #F0F8FF;
    height: 25%;
    border-radius: 7px;
    // margin-left: 5px;
    // margin-right: 5px;
    border: #e2e2e262 1px solid;
    transition: background-color .2s, color .2s;
    color: #666666;
  }

  > a.active, > a:hover {
    background: #409EFF;
    // color: #008cff;
    color: #fff;
    height: 25%;
    border-radius: 7px;
    margin-left: 5px;
    margin-right: 5px;
  }

  > a, > a:hover, > a:visited {
    text-decoration: none;
  }

  > .divider {
    height: 30%;  // 根据需要调整高度
    width: 1px;
    background-color: #d1d1d1;  // 竖线颜色
    margin: 0;  // 竖线两侧的间距
  }
}
</style>