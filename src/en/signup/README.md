---
sidebar: false
title: Signup
---

Thank you for participating in the "One Student One Chip" program! 😊

## <span id="understandPlan" style="display: block; padding-top: 70px; margin-top: -70px">:mag_right: Learn about the "One Student One Chip" project</span> {data-ysyx-nav=Learn about project}

Before officially registering for the "One Student One Chip" program, please take the time to read the [**Project Overview**](/en/project/intro.html) section. This article provides a comprehensive and detailed explanation of the "One Student One Chip" program from various perspectives, including **Background and Current Situation**, **Goals and Philosophy**, **Project Highlights**, **Learning Path**, and **Expected Gains**. This will help students gain a basic understanding of the program before officially signing up and eliminate any misunderstandings that may arise due to information asymmetry.

- [Overview Video](https://www.bilibili.com/video/BV12e4y1Y76i/)
- [Introduction Slides](https://ysyx.oscc.cc/slides/2205/01.html#/)
- [FAQ](/en/project/faq.html)

::: info
If you want to learn more about the "One Student, One Chip" program and engage in discussions with others, you can join the Telegram or Discord group.

> You can scan the QR code or click on the QR code to open Telegram or Discord and join the group chat.
> | Telegram | Discord |
> |:---:|:---:|
> | <a class="qrcode-container" :href="qrcodeTelegram" target="_blank"><qrcode-vue :value="qrcodeTelegram" :render-as="qrcodeRenderAs" :margin="qrcodeMargin" :level="qrcodeLevel" /></a> | <a class="qrcode-container" :href="qrcodeDiscord" target="_blank"><qrcode-vue :value="qrcodeDiscord" :render-as="qrcodeRenderAs" :margin="qrcodeMargin" :level="qrcodeLevel" /></a> |
> | <a :href="qrcodeTelegram" target="_blank">Telegram Group</a> | <a :href="qrcodeDiscord" target="_blank">Discord Group</a> |
:::

## <span id="entryForm" style="display: block; padding-top: 70px; margin-top: -70px">🔥 Fill out the Signup Form</span> {data-ysyx-nav=Signup}

We believe that you fully understand the "One Student One Chip" project. Before learning, please fill out the ✨ **"One Student One Chip" Signup Form**.

The "One Student One Chip" project team would like to understand your basic information for the purposes of [🎈 Learning Organization] and [🔎 Statistical Analysis] only, and will not be used for any other purposes. We respect your privacy, and the information provided will be kept strictly confidential 🔒.

::: warning
If the registration questionnaire displays **Not Available for Submission**, it means that **updates or maintenance** are in progress. Please come back and fill it out later.
:::

<br>

<el-row justify="center">
    <el-button size="large" type="primary" class="custom-button" @click="jumpToEntryForm">🚀 Click to Fill Out the Signup Form</el-button>
</el-row>

<br>

## 🚩 Starting

After registration, you can start learning "One Student One Chip"! You now need to complete the **pre-learning phase** tasks.

<br>

<el-row justify="center">
    <el-button size="large" type="primary" class="custom-button" @click="jumpToCourseHome">😎 Start Learning "One Student One Chip"</el-button>
</el-row>

<br>

## 🔰 Subsequent Process

After completing the **pre-learning phase** tasks, you will be able to see the **admission defense application entry**. The subsequent process is as follows:

> Note: The specific details of the following process will be visible after you complete the pre-learning tasks. This section helps you **understand the entire process**.

1. Apply for the admission defense.
2. Participate in the admission defense.
3. <span style="color: #2ea121;">:heavy_check_mark: Defense Passed</span>, become a formal member of "One Student One Chip";
   <span style="color: #e81224;">:x: Defense Not Passed</span>, you will need to address the issues according to the assistant’s feedback, return to step 1, and reapply for the defense.
4. Join the formal learning group.

<!-- ---------------------------------------------- -->

<ClientOnly><bottom-nav-bar/></ClientOnly>

<!-- ---------------------  phone-bottom-bar  ----------------------- -->
<div class="phone-bottom-bar">
    <a href="https://ysyx.oscc.cc/" class="phone-bottom-button">
        <span class="emoji" style="padding-left: 4px; margin-bottom: -2px">◀</span>
        <span class="text">Back to Home</span>
    </a>
    <a href="#understandPlan" class="phone-bottom-button">
        <span class="emoji" style="padding-left: 4px; margin-bottom: -2px">🧐</span>
        <span class="text">Learn this project</span>
    </a>
    <a href="#entryForm" class="phone-bottom-button">
        <span class="emoji" style="padding-left: 4px; margin-bottom: -2px">🔥</span>
        <span class="text">Signup</span>
    </a>
    <a href="https://ysyx.oscc.cc/docs/2306/preliminary/preliminary.html" target="_blank" class="phone-bottom-button">
        <span class="emoji" style="padding-left: 4px; margin-bottom: -2px">🚀</span>
        <span class="text">Start</span>
    </a>
</div>

<!-- -------------------------------------------------- -->
<script setup>
    const jumpToEntryForm = () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdKaNiHEzBz9Ti38zNyq66HhTpb2QPPn7NeboJDEWAyozUoAw/viewform", "_blank");
    }

    const jumpToCourseHome = () => {
        window.open("https://ysyx.oscc.cc/docs/en/2306/preliminary/preliminary.html", "_blank");
    }
</script>

<script>
    import QrcodeVue from "qrcode.vue";

    export default {
        data() {
            return {
                qrcodeRenderAs: "svg",
                qrcodeMargin: 3,
                qrcodeLevel: "L",
                qrcodeDiscord: "https://discord.gg/Y9PGkCuU4U",
                qrcodeTelegram: "https://t.me/+iqdvAT3BOHZhYTk1",
            }
        },
        components: {
            QrcodeVue
        },
    }
</script>

<style lang="scss" scoped>
    [qrcode-container] {
        display: block;
        border-radius: 5px;
        overflow: hidden;
        width: 100px;
        height: 100px;
    }

    .custom-button {
        height: 50px;
        font-size: 18px;
        background-color: #f0f8ff;
        color: #008cff;
        border-radius: 25px;
        padding-left: 30px;
        padding-right: 30px;
        transition: background-color 0.2s, color 0.2s; /* 平滑过渡效果 */
    }

    .custom-button:hover {
        background-color: #4caeff; /* 鼠标悬停时的背景色 */
        color: #f0f8ff; /* 鼠标悬停时的文字颜色 */
    }

    .phone-bottom-button {
        /* background-color: #ff9100;  */
        color: #2b2b2b;
        /* border: 1px groove #616161; */
        border-radius: 8px;
        padding: 10px 12px;
        text-decoration: none; /* 移除下划线 */
        display: flex;
        flex-direction: column; /* 设置子项垂直排列 */
        justify-content: center;
        align-items: center
    }

    .phone-bottom-button:hover {
        /* background-color: #ff8800; 鼠标悬停时的背景色 */
        color: #096dd9; /* 鼠标悬停时的文字颜色 */
        /* border: 1px groove #30c4ff; */
        text-decoration: none;
    }

    .phone-bottom-button .emoji {
        width: 24px; /* 图标大小 */
        height: 24px;
        margin-bottom: 1px; /* 图标和文本之间的间距 */
    }

    .phone-bottom-button .text {
        display: block;
        font-size: 12px; /* 文本大小 */
    }

    @media (min-width: 600px) {
        .phone-bottom-bar {
            display:none;
        }
    }

    @media (max-width: 600px) {
        .phone-bottom-bar {
            display:none;

            /* position: fixed;  */
            /* bottom: 0px;  */
            /* padding: 5px 4px; */
            /* margin: 0px -25px; 父级元素 padding=24px */
            /* display: flex;  */
            /* justify-content: center;  */
            /* align-items: center; */
            /* background-color: #fbfbfb; */
            /* height: 50px; */
            /* width: 100%; */
            /* box-shadow: 0px 0px 2px 0 rgba(0, 0, 0, 0.3);  */

            /* z-index: 1000; */
        }
    }

    td {
        font-weight: bold;
    }
</style>