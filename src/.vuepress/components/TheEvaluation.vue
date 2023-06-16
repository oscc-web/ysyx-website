<template>
    <el-row align="middle"
            :gutter="20">
        <el-col v-for="(evalItem, i) in evalItemList"
            :key="i"
            :span="evalColVal"
            style="margin-bottom:20px;">
            <el-card :body-style="{ 'display':'flex',
                                    'flex-direction':'column',
                                    'justify-content':'space-between',
                                    'height': '85%' }"
                     style="font-size:14px; height:300px;">
                <div style="text-align:left;">{{ evalItem.text }}</div>
                <div>
                    <el-divider style="margin:10px auto;"></el-divider>
                    <div style="text-align:right;">
                        <div>{{ evalItem.name }}</div>
                        <div>{{ evalItem.comp }}</div>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from "vue";

    const evalItemList = ref([]);
    evalItemList.value = [{
        name: "xxx",
        comp: "中国科学院计算技术研究所",
        text: "学生在开发初期不一定能完全掌握芯片中各个模块之前的关系，此时需要教师对学生的工作进行较为细致的分工，让学生通过一些初期的任务来认识芯片的全貌。随着项目的进行，学生对芯片的认识逐渐清晰之后，教师进行的分工可以向粗略的方向转变，向学生提出清晰的任务目标，并让学生尝试提出自己的解决方案。"
    }, {
        name: "xxx",
        comp: "北京开源芯片研究院",
        text: "芯片是一个复杂的系统，学生需对芯片每一个模块的行为都有所了解，还需要了解程序在芯片上运行的每一处细节。但是学生一开始往往不能从课程设计的模式中转变过来，认为只需要了解自己任务相关的模块即可，不去主动了解其它模块，不去了解软件层次的行为。这导致他们在遇到问题会想不出解决的思路。此时教师需要对学生进行引导，让他们主动去认识芯片甚至是软件行为的每一处细节。在遇到困难的时候，这些认识就会成为解决问题的线索，顺着线索去追溯问题的过程又会进一步加深学生对这些认识的理解，从而形成良性循环。"
    }, {
        name: "xxx",
        comp: "鹏城实验室",
        text: "芯片开发过程中可能会遇到各种困难，一些表面上看像是硬件设计的问题，最终可能是软件配置错误造成的。解决这些困难需要学生站在全局的视角来分析问题，并与课堂上学习到的知识建立联系，从中寻找解决问题的可能性。教师需要引导学生根据观测到的现象进行思维的发散，主动思考可能与哪些学过的知识建立联系。如果学生面对一些比较困难的问题，也会需要教师进行点拨。"
    }, {
        name: "xxx",
        comp: "yyy",
        text: "在一款功能完整的芯片，有一些关键模块的原理是课堂上没有详细介绍的，学生要正确地实现这些模块，需要一个探索的过程。这意味着学生不能像课程作业那样按部就班地完成，而是会经历设计方案的调整，甚至是整个方案的推倒重来。这容易导致学生感到焦虑或沮丧，因此教师需要对学生的心态进行正确的引导，告诉他们不确定性是探索过程中的客观规律，然后引导学生去总结探索失败的经验，去深刻地分析当前方案不可行的原因，从而加深对问题的理解，让学生正确认识到探索失败的意义。"
    }, {
        name: "xxx",
        comp: "yyy",
        text: "无。"
    }];

    const evalColVal = ref(8);
    onMounted(() => {
        getWindowWidth();
        window.addEventListener("resize", getWindowWidth);
    });
    onUnmounted(() => {
        window.removeEventListener("resize", null);
    });
    const getWindowWidth = () => {
        evalColVal.value = (window.innerWidth >= 1200) ? 8  :
                           (window.innerWidth >=  800) ? 12 : 24;
        console.log(window.innerWidth);
    }
</script>

<style lang="scss" scoped>
</style>
