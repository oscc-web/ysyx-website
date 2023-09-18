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
                    <el-button type="primary"
                               @click="jumpToBoardDetailsPage(boardItem)">
                        详细信息
                        <el-icon class="el-icon--right">
                            <ArrowRight />
                        </el-icon>
                    </el-button>
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
        image: "/res/images/board/res/v1p2/board-func.png",
        title: "标题：星空 V1.2",
        funcs: "简介：一生一芯三期第一批板卡",
        link:  "board-1/"
    }, {
        image: "/res/images/board/res/v1p3/board-func.png",
        title: "标题：星空 V1.3",
        funcs: "简介：一生一芯三期第二批板卡",
        link:  "board-2/"
    }];
    const jumpToBoardDetailsPage = (boardItemTemp) => {
        window.location.href = boardURL.value + boardItemTemp.link;
    }
</script>

<style lang="scss" scoped>
    .board-image {
        width: 100%;
        height: 200px;
        display: block;
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
