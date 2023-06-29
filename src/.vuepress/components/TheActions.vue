<template>
    <div class="actions">
        <el-button class="button button-solid"
                   size="large"
                   type="default"
                   style="margin-right:30px;"
                   @click="jumpToProjectInfo">项目介绍
        </el-button>
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
        font-size: 16px;
    }
    .button-solid {
        background-color:hsl(212, 60%, 40%);
        color:white;
    }
    .actions {
        width: 100%;
        // max-width: 42em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 1rem 0;
        & > * {
            margin: 0.5rem;
            font-size: 16px;
            flex-grow: 1;
            max-width: 8em;
            @media (min-width: 720px) {
                font-size: 1.2em;
            }
        }
    }
</style>