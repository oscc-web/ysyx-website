<template>
    <el-row class="mb-4">
        <el-button :icon="Edit">默认</el-button>
        <el-button type="primary" :icon="Edit">主要</el-button>
        <el-button type="success" :icon="Edit">成功</el-button>
        <el-button type="info" :icon="Edit">信息</el-button>
        <el-button type="warning" :icon="Edit">警告</el-button>
        <el-button type="danger" :icon="Edit">危险</el-button>
    </el-row>
</template>

<script setup>
    import { Edit } from "@element-plus/icons-vue"
</script>
