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
            <a href="/res/files/“一生一芯”计划.pdf"
               target="_blank"
               style="margin-top:5px;
                      font-weight:bold;
                      font-size:14px;">PDF下载
            </a>
        </div>
        <div>
            <el-button class="button"
                   size="large"
                   type="info"
                   @click="jumpToSignup">报名参与
            </el-button>
        </div>
    </div>
</template>

<script setup>
    const jumpToProjectInfo = () => {
        window.location.href = "/project/intro.html";
    }
    const jumpToSignup = () => {
        window.location.href = "/signup/index.html";
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