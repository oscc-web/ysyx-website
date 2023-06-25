<template>
    <el-row :gutter="20">
        <el-col v-for="(boardItem, i) in boardItemList"
                :key="i"
                :span="8">
            <el-card :body-style="{ padding: '0px', cursor: 'pointer' }">
            <img class="board-image"
                 :src="boardItem.image" />
            <div class="board-content">
                <div>
                    <div>{{ boardItem.title  }}</div>
                    <div>{{ boardItem.funcs }}</div>
                </div>
                <div class="board-bottom">
                    <el-link class=""
                             type="primary"
                             :underline="false"
                             :href="`${boardURL}${boardItem.link}`">
                            详细信息
                            <el-icon class="el-icon--right">
                                <ArrowRight />
                            </el-icon>
                    </el-link>
                </div>
            </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
    import { ref } from "vue"
    import { ArrowRight } from "@element-plus/icons-vue";

    let boardURL = ref("boards/");
    let boardItemList = ref([]);
    boardItemList.value = [{
        image: "https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board-1.jpg",
        title: "标题：星空 V1.2",
        funcs: "简介：主要面向一生一芯三期的板卡",
        link:  "board-1/"
    }];
</script>

<style lang="scss" scoped>
    .board-image {
        width: 100%;
        height: 200px;
        display: block;
        pointer-events: none;
    }
    .board-content {
        padding:15px 15px 20px 15px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .board-bottom {
        display: flex;
        justify-content: right;
    }
</style>
