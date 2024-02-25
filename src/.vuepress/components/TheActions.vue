<template>
    <div class="actions">
        <div style="display:flex;
                    flex-direction:column;
                    align-items:center;
                    margin-right:30px;">
            <el-button class="button button-solid"
                    size="large"
                    type="default"
                    @click="jumpToProjectInfo">{{ i18n[prop.lang].projectInfo }}
            </el-button>
            <a href="/res/files/ysyx.pdf"
               target="_blank"
               style="margin-top:5px;
                      font-weight:bold;
                      font-size:14px;">{{ i18n[prop.lang].pdfDownload }}
            </a>
        </div>
        <div>
            <el-button class="button"
                   size="large"
                   type="info"
                   @click="jumpToSignup">{{ i18n[prop.lang].signup }}
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
            pdfDownload: "PDF下载"
        },
        "/en": {
            projectInfo: "Project Info",
            signup: "Signup",
            pdfDownload: "PDF Download"
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
        & button {
            margin: 0.5rem;
            flex-grow: 1;
            min-width: 8em;
            @media (min-width: 720px) {
                font-size: 1.2em;
            }
        }
    }
</style>