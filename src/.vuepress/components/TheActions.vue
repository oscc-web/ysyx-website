<template>
    <div class="actions">
        <div style="display:flex;
                    flex-direction:column;
                    align-items:center;
                    margin-right:30px;">
            <el-button class="button button-solid"
                    size="large"
                    type="default"
                    @click="jumpToProjectInfo">项目介绍
            </el-button>
            <a href="/res/files/ysyx.pdf"
               target="_blank"
               style="margin-top:5px;
                      font-weight:bold;
                      font-size:14px;">PDF下载
            </a>
        </div>
        <el-button class="button"
                   size="large"
                   type="info"
                   @click="jumpToSignup">报名参与
        </el-button>
    </div>
</template>

<script setup>
    const jumpToProjectInfo = () => {
        window.location.href = "/project/project-intro.html";
    }
    const jumpToSignup = () => {
        window.location.href = "/signup/index.html";
    }
</script>

<style lang="scss" scoped>
    .button {
        height: 45px;
        font-weight: bold;
        font-size: 19px;
        background-color: hsl(0, 80%, 50%);
    }
    .button-solid {
        width: 100% !important;
        background-color: hsl(220, 60%, 40%);
        color: white;
    }
    .actions {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 1rem 0;
        & > * {
            margin: 0.5rem;
            flex-grow: 1;
            max-width: 8em;
            @media (min-width: 720px) {
                font-size: 19px;
            }
        }
    }
</style>