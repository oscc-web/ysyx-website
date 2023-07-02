<template>
    <el-row align="middle"
            :gutter="10">
        <el-col v-for="(sponsorItem, i) in sponsorItemList"
                :key="i"
                :span="sponsorColVal">
            <div :style="{ '--scale': sponsorItem.scale }">
                <a :href="sponsorItem.link"
                    target="_blank">
                    <div v-if="i !== 3" >
                        <component :is="sponsorItem.elem"
                                   :title="sponsorItem.name"
                                   :style="{'max-width':  sponsorObjVal.width,
                                            'max-height': sponsorObjVal.height,
                                            'transform':  'scale(var(--scale))',
                                            'width':      '100%',
                                            'height':     '100px',
                                            'margin-left': sponsorItem.margin}" />
                    </div>
                    <div v-else-if="i === 3">
                        <img src="/res/images/logo-bosc.png"
                            :style="{
                            'max-width':  sponsorObjVal.width,
                            'max-height': sponsorObjVal.height,
                            'transform':  'scale(var(--scale))',
                            'pointer-events': 'none'}" />
                    </div>
                </a>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
    import UCAS from "./sponsors/UCAS.vue";
    import ICT from "./sponsors/ICT.vue";
    import PCL from "./sponsors/PCL.vue";
    import BOSC from "./sponsors/BOSC.vue";
    import SHIC from "./sponsors/SHIC.vue";
    import ByteDance from "./sponsors/ByteDance.vue";
    import YouDao from "./sponsors/YouDao.vue";
    import CRVA from "./sponsors/CRVA.vue";

    import { onMounted, onUnmounted, ref, shallowRef } from "vue";

    const sponsorItemList = shallowRef([]);
    sponsorItemList.value =[{
        name: "中国科学院大学",
        elem: UCAS,
        scale: 0.8,
        link: "https://www.ucas.ac.cn"
    }, {
        name: "中国科学院计算技术研究所",
        elem: ICT,
        scale: 1.1,
        link: "http://www.ict.ac.cn"
    }, {
        name: "鹏城实验室",
        elem: PCL,
        scale: 1.0,
        link: "https://www.pcl.ac.cn",
        margin: "40px"
    }, {
        name: "北京开源芯片研究院",
        elem: BOSC,
        scale: 0.9,
        link: "https://www.bosc.ac.cn"
    }, {
        name: "上海处理器技术创新中心",
        elem: SHIC,
        scale: 1.0,
        link: ""
    }, {
        name: "字节跳动",
        elem: ByteDance,
        scale: 0.6,
        link: "https://www.bytedance.com"
    }, {
        name: "有道",
        elem: YouDao,
        scale: 0.6,
        link: ""
    }, {
        name: "中国开放指令生态联盟",
        elem: CRVA,
        scale: 1.0,
        link: "http://crva.ict.ac.cn"
    }];

    const sponsorColVal = ref(8);
    const sponsorObjVal = ref({
        width:  "90%",
        height: "90%"
    });
    onMounted(() => {
        getWindowWidth();
        window.addEventListener("resize", getWindowWidth);
    });
    onUnmounted(() => {
        window.removeEventListener("resize", null);
    });
    const getWindowWidth = () => {
        sponsorColVal.value = (window.innerWidth >= 1200) ? 8  :
                              (window.innerWidth >=  800) ? 12 : 24;
        sponsorObjVal.value = (window.innerWidth >= 1200) ?
                              { width:"90%", height: "90%"} :
                              (window.innerWidth >=  800) ?
                              { width:"70%", height: "70%"} :
                              { width:"50%", height: "50%"};
        console.log(sponsorObjVal.value);
    }
</script>

<style lang="scss" scope>
    [data-theme="dark"] svg .clx {
        fill: hsl(0, 0%, 70%) !important;
    }
</style>
