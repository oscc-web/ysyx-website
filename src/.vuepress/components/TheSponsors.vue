<template>
    <div style="margin-top:100px; text-align:center;">
        <el-divider />
        <el-text style="font-size:1.5rem; color:var(--text-color);">合作伙伴</el-text>
        <el-row :gutter="10"
                 justify="center"
                align="middle">
            <el-col
                v-for="(item, i) in sponsorItemList"
                :key="i"
                :span="sponsorObj.col"
                style="text-align:center">
                <div :style="{ '--scale': item.scale }">
                    <a :href="item.link"
                        target="_blank">
                        <div v-if="item.image === undefined">
                            <component :is="item.elem"
                                       :title="item.name"
                                       :style="{
                                            'max-width': sponsorObj.width,
                                            'transform': 'scale(var(--scale))',
                                            'width': '100%',
                                            'height': '100px'}" />
                        </div>
                        <div v-if="item.image !== undefined">
                            <img :src="item.image"
                                 :style="{
                                    'max-width': sponsorObj.width,
                                    'transform': 'scale(var(--scale))',
                                    'pointer-events': 'none'}" />
                        </div>
                    </a>
                </div>
            </el-col>
        </el-row>
    </div>
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

    const sponsorItemList = shallowRef([{
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
        scale: 0.8,
        link: "https://www.pcl.ac.cn",
        image: "/res/images/logo/pcl.png"
    }, {
        name: "北京开源芯片研究院",
        elem: BOSC,
        scale: 0.9,
        link: "https://www.bosc.ac.cn",
        image: "/res/images/logo/bosc.png"
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
        link: "https://www.youdao.com"
    }, {
        name: "中国开放指令生态联盟",
        elem: CRVA,
        scale: 1.0,
        link: "http://crva.ict.ac.cn"
    }]);
    const sponsorObj = ref({
        col: 8,
        width: "90%"
    });

    onMounted(() => {
        getWindowWidth();
        window.addEventListener("resize", getWindowWidth);
    });
    onUnmounted(() => {
        window.removeEventListener("resize", null);
    });
    const getWindowWidth = () => {
        sponsorObj.value.col = (window.innerWidth >= 1200) ? 8  :
                               (window.innerWidth >=  800) ? 12 : 24;
        sponsorObj.value.width = (window.innerWidth >= 1200) ? "90%" :
                                 (window.innerWidth >=  800) ? "80%" : "70%";
    }
</script>
