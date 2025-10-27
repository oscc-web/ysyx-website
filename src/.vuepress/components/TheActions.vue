<template>
    <div class="actions">
        <div style="display:flex;
                    flex-direction:column;
                    align-items:center;
                    position: relative;">
            <el-button class="button button-solid"
                    size="large"
                    type="default"
                    @click="jumpToProjectInfo">{{ i18n[prop.lang].projectInfo }}
            </el-button>
            <a :href="i18n[prop.lang].pdf"
               target="_blank"
               style="bottom:calc(-1em - 14px);
                      font-weight:bold;
                      position: absolute;">{{ i18n[prop.lang].pdfDownload }}
            </a>
        </div>
        <div>
            <el-button class="button"
                   size="large"
                   type="info"
                   @click="jumpToSignup">{{ i18n[prop.lang].signup }}
            </el-button>
        </div>
        <div>
            <el-button class="button button-solid"
                   size="large"
                   type="info"
                   @click="jumpToAdvice">{{ i18n[prop.lang].feedback }}
            </el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const prop = defineProps(["lang"])
    const i18n = {
        "/": {
            projectInfo: "项目介绍",
            signup: "报名参与",
            pdfDownload: "资料下载",
            pdf: "/res/files/ysyx.pptx",
            feedback: "问题反馈"
        },
        "/en": {
            projectInfo: "Project Info",
            signup: "Signup",
            pdfDownload: "PDF Download",
            pdf: "/res/files/ysyx-en.pdf",
            feedback: "Feedback"
        }
    }

    const jumpToProjectInfo = () => {
        window.location.href = ((prop.lang === "/") ? "" : prop.lang) +
                               "/project/intro.html";
    }
    const jumpToSignup = () => {
        window.location.href = ((prop.lang === "/") ? "" : prop.lang) +
                               "/signup/index.html";
    }
    const jumpToAdvice = () => {
        window.location.href = "https://fa45epzd9c7.feishu.cn/share/base/form/shrcnVC245Ha0hGNPmXF9jJMkHc";
    }
</script>

<style lang="scss" scoped>
    .button {
        width: 100%;
        height: 45px;
        font-weight: bold;
        font-size: 16px;
        background-color: hsl(0, 80%, 50%);
    }
    .button-solid {
        background-color: hsl(220, 60%, 40%);
        color: white;
    }
    .actions {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 1rem 0;
        column-gap: 35px;
        & button {
            flex-grow: 1;
            min-width: 8em;
            @media (min-width: 720px) {
                font-size: 1.2em;
            }
        }
        @media (max-width: 720px) {
            flex-direction: column;
            align-items: center;
            row-gap: 50px;
            & button {
                width: 200px;
            }
        }
    }
</style>
